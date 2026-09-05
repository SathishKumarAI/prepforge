---
qid: ing_19c8b38dc3__star__local
question: 'Explain: Load Balancer — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 310
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:21:02-05:00'
sources: []
---

**Situation** – While working on a large‑scale music streaming platform, the traffic spike during new album releases was causing a few regional servers to hit 95 % CPU and latency rose from 50 ms to over 300 ms.

**Task** – I had to design a load balancer that could distribute requests evenly across our microservices (catalog, playback, recommendation) while ensuring low latency, high availability, and graceful degradation during peak periods.

**Action** – I implemented an NGINX‑based layer with consistent hashing on user ID and song hash. This kept session affinity for caching and minimized cache misses. To handle sudden surges, I added a rate‑limit filter (10 req/s per IP) backed by Redis counters and integrated health checks that removed unhealthy backends from the pool within 2 seconds. For fault tolerance, I used a circuit breaker pattern via Hystrix to short‑circuit failing services and redirected traffic to standby nodes. Finally, I automated scaling with Kubernetes HPA based on request queue depth.

**Result** – Post‑deployment, peak latency dropped to 80 ms, CPU usage stayed below 70 %, and we maintained 99.9 % uptime during a major release. The experience taught me that combining consistent hashing with dynamic health checks and rate limiting is key for resilient streaming services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
