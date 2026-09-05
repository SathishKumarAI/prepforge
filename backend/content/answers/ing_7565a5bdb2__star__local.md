---
qid: ing_7565a5bdb2__star__local
question: 'Explain: High level design for Rate Limiter — Ratelimiterapi'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 352
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:29:22-05:00'
sources: []
---

**Situation**  
At my last company we launched a new analytics API that was suddenly hit with spikes of traffic from marketing partners. Within the first week our latency jumped to 350 ms and the error rate rose to 12 %, threatening SLA breaches.

**Task**  
I had to design a high‑throughput, distributed rate limiter that could enforce per‑client limits (100 req/s) while still allowing burst traffic for short windows, all without adding a single point of failure or excessive latency.

**Action**  
I chose Redis Cluster with the token bucket algorithm. Each client key stored a counter and timestamp; I used Lua scripts to atomically decrement tokens and reset buckets at 1‑second granularity. To avoid hot keys, I sharded clients across hash slots and added a secondary cache layer in memory for the most active users. For burst handling I exposed an “X‑Burst‑Window” header that let clients request a short, higher limit; my middleware checked this flag before decrementing tokens. I also instrumented Prometheus metrics (tokens left, rejections) and set up alerting on sudden spikes.

**Result**  
The new limiter reduced latency to < 60 ms under 10× load, cut the error rate to < 0.5 %, and kept our SLA at 99.9 %. I learned that combining a proven algorithm (token bucket), distributed storage (Redis Cluster), and careful sharding can deliver both reliability and performance in real‑world API traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
