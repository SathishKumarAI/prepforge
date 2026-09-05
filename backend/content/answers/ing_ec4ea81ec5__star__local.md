---
qid: ing_ec4ea81ec5__star__local
question: 'Explain: Difference Between Cassandra and MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 408
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:21:31-05:00'
sources: []
---

**Situation:**  
During a data‑migration project at my previous company, we had to move the customer‑behavior analytics from a legacy MySQL system into a NoSQL store that could handle billions of events per day and provide low‑latency reads for real‑time dashboards.

**Task:**  
I needed to choose between Cassandra and MongoDB as the backend, ensuring horizontal scalability, high write throughput, and flexible querying for both analytical aggregates and ad‑hoc exploration.

**Action:**  
I first profiled our write patterns: 70% of traffic were time‑series events with a strict ordering requirement. I set up benchmark tests in a lab cluster, measuring writes per second, read latency for range queries, and repair overhead. Cassandra’s partition key strategy allowed us to shard by user ID, yielding 1 M writes/sec on a 12‑node ring; its tunable consistency let us choose QUORUM for critical updates while keeping reads at ONE for dashboards. MongoDB’s document model suited our flexible schema needs, but the single‑primary write path capped throughput to ~50k ops/sec per node and required replica set failover that increased read latency during recovery. I also considered operational factors: Cassandra needed careful compaction tuning; MongoDB offered richer aggregation pipelines out of the box.

**Result:**  
We deployed Cassandra as the primary event store, achieving 1.2 M writes/sec with <15 ms read latency for user‑level aggregates, and reduced downtime during node repairs to under 30 seconds. MongoDB was retained only for reporting dashboards where flexible queries outweighed write performance. The migration cut data ingestion costs by 25% and improved real‑time insight delivery time from 5 min to <1 s. I learned that aligning data access patterns with the underlying consistency model is key to choosing the right NoSQL database.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
