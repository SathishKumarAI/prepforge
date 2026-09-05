---
qid: ing_3fbf1a39c2__star__local
question: 'Explain: How Sharding Works — A Crash Course on Database Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 335
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:35:40-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we hit a traffic spike: the user table grew from 5 M to 35 M rows and our single PostgreSQL instance was struggling with 250 k concurrent reads per second, causing latency to balloon past 300 ms.

**Task** – I had to design a sharding strategy that kept query performance under 80 ms while preserving transactional integrity for account balances and ensuring minimal downtime during rollout.

**Action** – First, I mapped the most frequent access patterns: queries were always scoped by `customer_id`. I chose hash‑based sharding on that key and created four physical shards (each a separate PostgreSQL cluster). Using PgPool‑II I set up connection pooling and load balancing. To keep cross‑shard joins feasible, I introduced a “routing layer” in the application: every request first looked up the shard via a deterministic hash function, then executed the query locally. For balance updates I implemented two‑phase commits across shards to guarantee ACID semantics. I also added a monitoring dashboard that tracked per‑shard latency and hot‑spot metrics.

**Result** – After deployment, read latency dropped from 300 ms to 65 ms, while write throughput increased by 4×. The system handled 1 M active users without any outages. I learned the importance of aligning sharding keys with real access patterns and that a lightweight routing layer can keep cross‑shard complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
