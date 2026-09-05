---
qid: ing_b778b380ef__star__local
question: 'Explain: Cache Invalidation — How Uber Serves Over 40 Million Reads Per
  Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 365
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:38:01-05:00'
sources: []
---

**Situation:**  
When I joined the data platform team at a rides‑hailing company, our real‑time trip planner was hitting the backend services for every fare estimate request. We were serving roughly 40 M read requests per second, but latency kept creeping above 150 ms because each call hit a distributed NoSQL store that didn’t scale linearly.

**Task:**  
I had to design an integrated caching layer that would reduce backend load by at least 80% while guaranteeing that users always saw up‑to‑date pricing and availability. The cache needed to support high write traffic from surge updates and maintenance events without stalling reads.

**Action:**  
We built a two‑tier system: a local in‑process LRU cache for microservices and a shared Redis cluster with keyspace notifications. For invalidation, we implemented “write‑through” semantics—every time a pricing rule changed, the service updated Redis and published an event on Kafka. Consumers subscribed to the topic flushed only the affected keys from their local caches. We also used versioned hash tags in Redis so that bulk updates (e.g., city‑wide fare caps) could be invalidated with a single key deletion, reducing network chatter. Metrics were collected via Prometheus; we set alerts when cache hit ratios fell below 95%.

**Result:**  
The combined strategy cut backend hits from 40 M/s to under 6 M/s and lowered average latency to 45 ms. Cache hit ratio rose from 60% to 97%. I learned that fine‑grained invalidation, coupled with event‑driven coordination, can keep distributed systems both fast and consistent at massive scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
