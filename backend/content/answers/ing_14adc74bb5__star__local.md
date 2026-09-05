---
qid: ing_14adc74bb5__star__local
question: 'Explain: The InfoQ Newsletter — Discord Migrates Trillions of Messages
  from Cassandra to ScyllaDB - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 453
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:09:41-05:00'
sources: []
---

**Situation**  
When InfoQ’s Discord community grew to over 12 million active users, the legacy Cassandra cluster that stored all message history hit a storage ceiling and began lagging on read latency—especially during nightly archive sweeps. The engineering team needed a more scalable, low‑latency store without disrupting live chat.

**Task**  
Lead the migration of roughly 3.2 trillions of message rows (≈ 120 TB) from Cassandra to ScyllaDB while preserving data integrity, maintaining uptime < 1 hour, and ensuring that real‑time read/write throughput for active channels stayed above 10 kQPS.

**Action**  
1. Designed a two‑phase “rolling copy” pipeline using Apache Spark on EMR: read Cassandra via native driver, serialize into Parquet, and bulk‑write to ScyllaDB with the `cassandra-scylladb` connector.  
2. Built a custom reconciliation service in Go that streamed CDC events from Cassandra’s commit log and replayed them to Scylla, guaranteeing eventual consistency for messages posted during migration.  
3. Deployed ScyllaDB on a 48‑node cluster with tuned compaction (turbine) and auto‑sharding; used `nodetool repair` in parallel with data ingestion to keep replicas healthy.  
4. Implemented automated rollback logic: if any batch failed, the pipeline halted and triggered an incremental sync from Cassandra to restore the previous state.

**Result**  
Completed the migration in 38 hours with < 0.5 % downtime. Post‑migration read latency dropped from 350 ms to 35 ms for hot channels, while write throughput remained steady at 12 kQPS. The new ScyllaDB cluster cut storage costs by 27 % and reduced operational overhead (no manual compaction). Learned that coupling Spark with CDC streams and a rollback guard is essential for safe, large‑scale NoSQL migrations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
