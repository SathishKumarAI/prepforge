---
qid: ing_66a05a95b3__faang__local
question: 'Explain: High-level architecture — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 479
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:42:56-05:00'
sources: []
---

**Clarify**  
We need to sketch a production‑grade system that exposes large language models (LLMs) via an API gateway and serves requests at scale. Key assumptions:  
* Models are hosted in containers or serverless functions; we can spin up new instances on demand.  
* Traffic is bursty – millions of concurrent short prompts per day.  
* Latency < 200 ms, throughput > 10k QPS.  

**Approach**  
1. **API Gateway (Front‑Door)** – handles auth, rate limiting, request routing, TLS termination.  
2. **Model Registry & Scheduler** – keeps metadata (model version, capacity) and decides which instance to route to.  
3. **Serving Layer** – stateless worker pods behind a load balancer; each pod runs the LLM inference engine.  
4. **Autoscaler** – monitors queue depth/latency, scales workers horizontally or switches model weights.  
5. **Observability & Logging** – distributed tracing (e.g., OpenTelemetry) and metrics to track latency per model version.

**Depth**  
- Gateway uses gRPC/HTTP‑2 with connection pooling; rate limits via token bucket.  
- Scheduler employs consistent hashing + health checks; falls back to “cold start” if no healthy instance.  
- Workers use GPU or TPU inference libraries (e.g., NVIDIA Triton).  
- Autoscaling policy: scale up when QPS > threshold *or* tail latency > 90th percentile.  
Complexity: O(1) routing per request; autoscaler runs in O(n) over active pods.

**Edge Cases**  
- Model version drift → test backward compatibility.  
- Network partitions → fallback to a secondary data center.  
- Sudden traffic spike → “fail‑fast” responses with retry hints.

**Optimize & Communicate**  
To reduce cold starts, keep a pool of warm instances per model. Batch multiple small prompts into one inference call to amortize GPU overhead. I’d present the diagram first, then walk through each layer, highlighting trade‑offs (e.g., tighter rate limits vs. higher throughput). This shows clear problem understanding, systematic design, and depth—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
