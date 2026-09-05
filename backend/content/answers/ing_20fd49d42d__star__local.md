---
qid: ing_20fd49d42d__star__local
question: 'Explain: Partition Key vs Composite Key vs Clustering Columns in Cassandra
  – BMC Software | Blogs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 327
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:35:31-05:00'
sources: []
---

**Situation:** While leading a migration of our support ticket system to Cassandra at BMC, the analytics team was complaining that query latency for daily ticket summaries exceeded 2 seconds, and we were hitting hot‑spot partitions on the “service_id” column.

**Task:** I needed to redesign the schema so that reads for per‑service metrics stayed under 500 ms, while still supporting range queries by date and efficient updates of ticket status.

**Action:** I restructured the table to use a composite partition key `(service_id, year_month)` to spread data across nodes and avoid hot spots. Inside each partition I defined clustering columns `created_at DESC, ticket_id ASC` so that recent tickets could be fetched in order without full scans. I also added a secondary index on `status` for ad‑hoc status filters. During modeling I ran YCSB benchmarks, iterated on the key layout, and used `cqlsh` to verify cardinality and read/write patterns.

**Result:** The new design cut average query latency from 2 s to 350 ms and reduced node CPU usage by 30 %. It also simplified maintenance because each month’s data could be dropped as a single partition. I learned that balancing the granularity of the partition key with clustering order is critical for both write scalability and read efficiency in Cassandra.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
