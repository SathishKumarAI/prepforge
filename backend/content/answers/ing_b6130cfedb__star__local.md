---
qid: ing_b6130cfedb__star__local
question: 'Explain: Cassandra: — Difference Between Cassandra and MongoDB - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 382
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:35:25-05:00'
sources: []
---

**Situation:**  
At my last company we were migrating a legacy reporting system that stored millions of daily transaction logs into a NoSQL store. The data model was append‑only, highly write‑heavy, and we needed near real‑time analytics for compliance dashboards.

**Task:**  
I had to decide between Cassandra and MongoDB, justify the choice, and design the schema so it could handle 5 M writes per second while still allowing ad‑hoc aggregation queries on a subset of fields.

**Action:**  
I compared their consistency models, storage engines, and query capabilities. Cassandra’s wide‑column format and tunable eventual consistency let us shard across 20 nodes with 99.999% write availability; its built‑in time‑series compaction made log retention efficient. MongoDB’s document model was more natural for nested JSON but its single‑document ACID guarantees required a primary node, limiting horizontal scale under our write load. I also benchmarked read/write latency: Cassandra returned <5 ms inserts at 10 k writes/sec per node, while MongoDB hit ~20 ms at the same rate. After building a small prototype, I implemented a partition key based on `user_id` + hour, used Cassandra’s TTL to auto‑expire old logs, and set up Spark jobs for daily aggregates.

**Result:**  
We deployed Cassandra across 22 nodes, achieving >6 M writes/sec with <8 ms latency, and reduced storage costs by 30% thanks to compaction. The compliance dashboards now update within 2 minutes of ingestion. I learned that choosing a database is less about “NoSQL vs NoSQL” and more about aligning its data model, consistency guarantees, and scalability patterns with the workload’s characteristics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
