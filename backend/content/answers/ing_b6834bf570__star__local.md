---
qid: ing_b6834bf570__star__local
question: 'Explain: Fixing the Plumbing: How We Identify and Stop Slow Latency Leaks
  at LinkedIn'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 322
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:36:09-05:00'
sources: []
---

**Situation:**  
At LinkedIn I was on the Real‑Time Ads team where our feed recommendation service had a sudden spike in tail latency—95th percentile went from ~120 ms to ~350 ms during peak hours, hurting click‑through rates.

**Task:**  
Identify the root cause of the “latency leak” and bring the 95th percentile back below 150 ms without degrading throughput or adding cost.

**Action:**  
1. Instrumented every microservice with OpenTelemetry traces, aggregating spans in Tempo and visualizing them in Grafana.  
2. Ran a distributed tracing analysis that revealed a hidden bottleneck: an async batch writer to Redis was throttling because its connection pool size had drifted from 50 to 12 due to a config change in production.  
3. Implemented a dynamic pool‑size monitor using Prometheus alerts, and automated a Kubernetes HPA that scaled the worker pods based on `redis_conn_latency` metrics.  
4. Added a circuit breaker with a short‑term fallback to local caching for bursts, reducing backpressure.

**Result:**  
95th percentile latency dropped to 140 ms within two days, throughput increased by 18%, and the new monitoring stack cut debugging time from hours to minutes. I learned that fine‑grained observability coupled with automated scaling is key to stopping slow leaks in a high‑traffic system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
