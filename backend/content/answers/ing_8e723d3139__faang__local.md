---
qid: ing_8e723d3139__faang__local
question: 'Q: What reliability patterns would you use for a production LLM system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 518
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:15:25-05:00'
sources: []
---

**Clarify**  
We’re building a *production* large‑language‑model (LLM) service that must serve thousands of concurrent requests with high availability and low latency. Key assumptions:  
- The model is hosted in containers on a managed cluster (e.g., GKE, ECS).  
- Requests are stateless but may involve user context.  
- SLA requires 99.9 % uptime and <200 ms average latency.  

**Approach**  
1. **Graceful degradation & fallback** – expose a lightweight “fallback” model for peak traffic.  
2. **Circuit breaker / bulkhead** – isolate failing shards of the inference pipeline.  
3. **Health‑check + self‑healing** – Kubernetes probes + auto‑scaling.  
4. **Rate limiting + retry with exponential backoff** – protect downstream services.  

**Depth**  
- *Graceful degradation*: deploy a distilled model that can be swapped in if the primary model’s GPU queue exceeds 80 % utilization; this keeps latency bounded.  
- *Circuit breaker*: track consecutive failures per inference endpoint; trip after 3 errors, opening for 30 s before retrying. Bulkheads partition CPU/GPU resources so one failing pod doesn’t starve others.  
- *Health checks*: liveness probes hit a lightweight “ping” endpoint; readiness probes confirm GPU allocation and model warm‑up. Auto‑scaling triggers on queue depth or latency percentiles.  
- *Rate limiting*: per‑IP/tenant quotas with token buckets; retries use exponential backoff plus jitter to avoid thundering herd.  

**Edge Cases**  
- Sudden traffic spikes that exceed all fallback capacity → request throttling and graceful error messages.  
- GPU driver crashes causing model unloads → health probes restart pods automatically.  
- Network partitions between inference service and storage → circuit breaker isolates, retry with eventual consistency.  

**Optimize & Communicate**  
Start with the simplest pattern (health checks + auto‑scaling) to satisfy basic SLAs. Incrementally add circuit breakers and fallbacks as load grows, documenting each change in the architecture diagram and monitoring dashboards. This incremental rollout demonstrates clear reasoning, risk mitigation, and maintainability—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
