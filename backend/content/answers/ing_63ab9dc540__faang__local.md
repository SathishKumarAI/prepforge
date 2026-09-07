---
qid: ing_63ab9dc540__faang__local
question: 'Q77: How would you design a multi-provider LLM architecture for 99.9% availability?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 467
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:36:17-05:00'
sources: []
---

**Clarify**  
We need an LLM‑as‑a‑service that can route queries across several provider APIs (OpenAI, Anthropic, Cohere, etc.) while guaranteeing **99.9 % uptime** for the public endpoint.  
Assumptions to confirm:  
- SLA is measured on the aggregate service, not individual providers.  
- Each provider offers health checks and rate limits.  
- We can instantiate multiple replicas of our own routing layer.

**Approach**  
1. Deploy a *load‑balancing gateway* behind an auto‑scaling cluster (K8s + Horizontal Pod Autoscaler).  
2. For each request, the gateway performs:  
   - **Health‑check cache** – keeps per‑provider status and cooldown timers.  
   - **Dynamic routing policy** – picks a provider based on latency, cost, and health.  
3. If a provider fails (timeout or 5xx), mark it unhealthy for *N* seconds and retry with the next best provider.  
4. Use **Circuit Breaker** patterns per provider to prevent cascading failures.  
5. Log all attempts; compute SLA via an external monitoring system.

**Depth**  
- Latency: gateway → provider ~ <200 ms baseline.  
- Failure probability per provider *p* ≈ 0.01 (99% uptime).  
- With 3 independent providers, overall failure ≈ p³ ≈ 1e‑6 → >99.999 % availability.  
- Complexity O(1) per request; health checks run every 30 s.

**Edge Cases**  
- Simultaneous provider outage: fallback to local cached model (fallback policy).  
- Rate limit exhaustion: throttle client requests or queue them.  
- Network partitions: use multi‑AZ deployment for the gateway.

**Optimize & Communicate**  
Explain that redundancy, health checks, and circuit breakers together reduce risk of single points of failure. Highlight trade‑offs: added latency from retries vs. higher availability. Conclude with a monitoring dashboard showing uptime, request counts, and provider health—ready to present in an interview setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
