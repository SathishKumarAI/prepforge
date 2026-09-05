---
qid: ing_3b5f58a082__star__local
question: 'Explain: 2.3 Health Check Overhead — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 357
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:27:16-05:00'
sources: []
---

**Situation**  
I was leading the redesign of our API gateway for a fintech app that processes ~50k requests per second. The old round‑robin LB sent traffic to all backends, even those temporarily down, causing spikes in error rates and increased latency.

**Task**  
Reduce the health‑check overhead so the load balancer can quickly detect unhealthy nodes without flooding them with probes or delaying valid traffic, while keeping overall system throughput above 95%.

**Action**  
I introduced a two‑tier health‑check scheme. First, a lightweight “liveness” probe that pinged each service’s `/healthz` endpoint every 2 s, using a shared HTTP client with connection pooling to cut TLS handshakes by 70%. Second, an “integrity” probe ran asynchronously on a separate thread pool at 30 s intervals, performing a full payload validation only if the liveness probe failed. I also implemented exponential back‑off for retries and added a circuit‑breaker that removed a node from rotation after three consecutive failures, then re‑added it only when its liveness check succeeded twice in a row.

**Result**  
Health‑check traffic dropped by 60%, lowering CPU usage on the LB by 35%. The system’s error rate fell from 4.2% to 0.7%, and we maintained >99.5% availability during a simulated outage of one backend. I learned that tiered, adaptive probes balance responsiveness with overhead, and that coupling health checks with circuit breakers can dramatically improve resilience without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
