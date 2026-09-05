---
qid: ing_49eb242b76__star__local
question: 'Explain: Backend Pool — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 391
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:56:10-05:00'
sources: []
---

**Situation**  
I was working on a SaaS analytics platform that suddenly hit a 60 % spike in daily active users during a product launch. Our single API node was throttling at 5 k requests per second, causing 502 errors for about 15 % of traffic.

**Task**  
Design a backend pool with a load balancer to scale the API layer horizontally while keeping response latency below 200 ms and ensuring zero downtime during rollout.

**Action**  
I first profiled the request flow with Datadog APM, revealing that 70 % of calls were GET‑heavy but required caching. I set up an Nginx reverse proxy as a Layer‑4 load balancer using round‑robin plus least‑connection weighting. Behind it, I spun up a Kubernetes Deployment with autoscaling based on CPU and custom Prometheus metrics (request latency). For stateful session data, I switched to Redis Cluster for session persistence, avoiding sticky sessions that would defeat the LB’s distribution. I also introduced health probes: readiness checks pinging `/healthz` and liveness probes restarting pods after 5 s of failure. Finally, I used Istio’s traffic mirroring to test new pod versions without affecting live traffic.

**Result**  
After deploying the pool, request throughput increased from 5 k to 18 k rps, error rates dropped below 0.1 %, and average latency fell to 120 ms. The auto‑scaler kept only 3–4 pods active during off‑peak hours, saving ~30 % in compute costs. I learned that coupling a lightweight LB with dynamic scaling and real‑time metrics is essential for resilient, cost‑effective backend pools.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
