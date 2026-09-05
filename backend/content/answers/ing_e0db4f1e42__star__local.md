---
qid: ing_e0db4f1e42__star__local
question: 'Explain: Caching — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 388
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:58:17-05:00'
sources: []
---

**Situation:**  
At my last company we launched a new recommendation engine that pulled user data from our PostgreSQL cluster. Within the first month traffic spiked to 10 k requests per second, and latency on the “user profile” endpoint jumped from 120 ms to over 1 s, causing a 15% drop in conversion.

**Task:**  
I had to design a scaling solution that reduced read latency below 200 ms while keeping writes consistent, all without a full database migration or a huge budget.

**Action:**  
First I profiled the queries and identified that 80 % of traffic was reading the same user rows. I introduced Redis as an in‑memory cache, populating it on write events with a TTL of 10 min and using Redis Cluster to distribute keys across three shards. To handle eventual consistency, I added a “cache aside” pattern: writes first updated Postgres, then invalidated or refreshed the corresponding Redis key via a lightweight pub/sub channel. For heavy read traffic I also spun up a PostgreSQL read replica cluster behind a connection pooler (pgbouncer) to offload SELECTs that couldn’t be cached (e.g., cold users). Finally, I added circuit‑breaker logic so if Redis failed, the system gracefully fell back to Postgres.

**Result:**  
Read latency dropped from 1 s to 110 ms on average, and our page load times improved by 22%. The write path overhead increased only 3 ms per request. I learned that a hybrid cache‑plus‑replica strategy can deliver low latency at scale while keeping data integrity without overhauling the underlying database.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
