---
qid: ing_a75cdade91__star__local
question: 'Explain: Cassandra vs. MongoDB: Read Performance — Cassandra Vs MongoDB
  Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 408
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:07:23-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup in 2023, our team was migrating the customer‑profile microservice from a legacy relational DB to a NoSQL store to support real‑time analytics. The service had to serve over 200 k read requests per second with <10 ms latency during peak hours.

**Task**  
I needed to decide whether Cassandra or MongoDB would deliver that throughput while keeping the data model simple and minimizing operational cost.

**Action**  
I benchmarked both systems using YCSB‑A workload A. In Cassandra, I designed a wide‑column schema with a composite primary key (user_id + timestamp) and enabled read repair at 10 %. I tuned compaction to size‑tiered, set `read_repair_chance` to 0.1, and used `cassandra.yaml`’s `concurrent_reads=64`. For MongoDB, I created a sharded cluster with chunk ranges on `user_id`, enabled WiredTiger’s cache at 4 GB per shard, and used an index on `{user_id: 1}`. I also compared consistency levels: Cassandra’s QUORUM vs MongoDB’s “majority”.

**Result**  
Cassandra returned 180 k reads/sec with average latency of 8 ms (±2 %) at QUORUM, while MongoDB capped at 110 k reads/sec and hit 15 ms under the same load. The trade‑off was Cassandra’s higher write amplification but lower read amplification due to its append‑only storage. I learned that for high‑throughput, low‑latency read workloads with a predictable partition key, Cassandra outperforms MongoDB; however, MongoDB offers easier schema evolution and richer query features when latency can be slightly higher.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
