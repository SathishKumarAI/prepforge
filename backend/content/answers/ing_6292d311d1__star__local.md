---
qid: ing_6292d311d1__star__local
question: 'Explain: Cassandra — Difference Between Cassandra and MongoDB - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 356
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:45:12-05:00'
sources: []
---

**Situation** – At a fintech startup, we had to migrate our real‑time transaction ledger from a legacy MySQL database. The data volume was growing at ~30 % month‑over‑month, and latency for read/write operations had to stay under 5 ms even with 10k concurrent users.

**Task** – I needed to pick a NoSQL store that could handle massive write throughput, provide linear scalability, and still allow flexible querying on account balances without compromising consistency.

**Action** – I compared Cassandra and MongoDB. Cassandra’s wide‑column model offered tunable consistency (quorum reads/writes) and horizontal scaling through automatic sharding across nodes; its write path was log‑structured with SSTables, giving us predictable 1–2 ms writes even under peak load. MongoDB, while richer in ad‑hoc query language and secondary indexes, had a single‑primary architecture that introduced write bottlenecks and higher latency when scaling beyond a few shards. I prototyped both on a 3-node cluster; Cassandra achieved ~200k TPS with <2 ms latency, whereas MongoDB capped at ~45k TPS before read amplification caused >10 ms latency.

**Result** – We deployed Cassandra in production, achieving a 4× increase in throughput and reducing transaction confirmation time from 12 ms to 3 ms. I learned that choosing the right NoSQL model hinges on workload patterns: Cassandra excels at write‑heavy, partitioned workloads with eventual consistency; MongoDB shines for document-centric use cases needing rich indexing but can suffer under massive horizontal scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
