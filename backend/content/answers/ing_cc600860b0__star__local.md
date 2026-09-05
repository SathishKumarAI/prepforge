---
qid: ing_cc600860b0__star__local
question: 'Explain: Read Path — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 327
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:17:39-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a real‑time recommendation engine for an e‑commerce platform that served millions of users per day. The click‑through rate (CTR) was stagnating at 2%, and we suspected the latency in fetching product attributes from our catalog service was killing conversions.

**Task:**  
I needed to redesign the read path so that product data could be retrieved in under 10 ms while still supporting eventual consistency across a distributed cache and a SQL backend.

**Action:**  
First, I profiled the existing monolith and identified that each request hit the relational DB, performed a join on three tables, then serialized JSON. I introduced a two‑tier read architecture: (1) a Redis cluster with sharded keys for hot products, using Lua scripts to batch fetch attributes; (2) an event‑driven cache invalidation pipeline where catalog updates were published to Kafka and consumed by a microservice that refreshed the cache asynchronously. I also added a circuit breaker and bulkhead pattern around the DB fallback, limiting retries to three attempts.

**Result:**  
The average read latency dropped from 85 ms to 7 ms, boosting CTR to 3.8% (+90%) within two weeks of deployment. I learned that balancing cache freshness with low‑latency reads often requires an asynchronous invalidation strategy and that monitoring at the shard level is essential for pinpointing bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
