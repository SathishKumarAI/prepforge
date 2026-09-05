---
qid: ing_e738b5e7af__star__local
question: 'Explain: Features of Cassandra — Difference Between Cassandra and MongoDB
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 344
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:10:51-05:00'
sources: []
---

**Situation:** While leading a data‑engineering sprint for a fintech startup, we needed to migrate the real‑time transaction ledger from our legacy relational DB to a NoSQL solution that could handle millions of writes per second and support global replication.

**Task:** I had to evaluate which database—Cassandra or MongoDB—would best meet our scalability, consistency, and operational requirements, and then present a recommendation to senior management.

**Action:** I set up side‑by‑side benchmarks. With Cassandra I leveraged its tunable consistency (QUORUM vs ALL), linearizable writes via the LWT feature, and time‑series partitioning using composite keys (`user_id|timestamp`). MongoDB’s WiredTiger engine offered rich secondary indexes and document aggregation pipelines, but its default replication model limited write throughput under cross‑region workloads. I also compared data modeling: Cassandra’s wide‑row schema ensured efficient range queries on the primary key while avoiding hot partitions; MongoDB’s flexible BSON documents simplified schema evolution but introduced larger write amplification due to journaling.

**Result:** The benchmark showed Cassandra could sustain 2 M writes/sec with <200 ms latency across three regions, whereas MongoDB capped at ~300 k writes/sec under similar conditions. I recommended Cassandra, which reduced operational cost by 30% (no sharding overhead) and improved uptime to 99.99%. This migration also taught me the importance of aligning consistency models with business SLAs in NoSQL design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
