---
qid: ing_d5afff6522__star__local
question: Why Sharding? — A Crash Course on Database Sharding
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 364
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:36:16-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a real‑time recommendation engine that served millions of users daily. Within three months the single PostgreSQL instance was choking—queries took 3–4 seconds, and our SLA demanded <200 ms for 95 % of requests.

**Task:**  
I had to redesign the data layer so the system could handle 10× traffic while keeping latency under 150 ms without rewriting the entire application stack.

**Action:**  
I introduced horizontal sharding across a cluster of PostgreSQL nodes, using consistent hashing on the user_id. I added a lightweight proxy (PgBouncer) to route requests and implemented read‑replicas for analytics queries. To avoid “hot spots,” I split the users into 8 shards and rotated them monthly. We also switched the write‑heavy tables to CockroachDB for its automatic multi‑region replication, while keeping the read‑intensive logs in a Cassandra cluster. I monitored with Prometheus; after sharding, each shard handled ~125 k writes/sec.

**Result:**  
Query latency dropped from 3 s to <120 ms for 99 % of traffic, and we scaled to 20 M active users without any code changes. The exercise taught me that sharding isn’t just a scaling trick—it’s a disciplined approach to partitioning data by access patterns, balancing load, and ensuring resilience in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
