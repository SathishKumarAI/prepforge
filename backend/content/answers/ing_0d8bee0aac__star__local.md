---
qid: ing_0d8bee0aac__star__local
question: 'Explain: Distributed Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 320
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:55:41-05:00'
sources: []
---

**Situation** – At my last role, our e‑commerce platform was hitting a 40 % slow‑down during flash sales because every request had to hit the database for product inventory and pricing. The load balancer would route to any node, but each node still queried PostgreSQL, causing contention.

**Task** – I needed to reduce latency by 70 % and lower DB pressure while keeping data fresh within 5 seconds during peak traffic.

**Action** – I designed a distributed cache layer using Redis Cluster. First, I identified hot keys (top 200 SKUs) and set TTLs of 3 seconds for inventory and 10 seconds for pricing. I added a read‑through cache: application code first checks Redis; on miss it queries Postgres, then writes back to Redis with the appropriate key. To keep consistency across nodes, I used Redis Pub/Sub to invalidate keys when an order updates stock. I also sharded data by SKU hash to spread load and enabled persistence (RDB snapshots) for recovery.

**Result** – Query latency dropped from 350 ms to 90 ms, reducing database connections by 60 %. During a subsequent sale we handled 12k QPS with no timeouts. The exercise taught me how to balance cache hit ratios, TTLs, and invalidation strategies while maintaining eventual consistency in a distributed environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
