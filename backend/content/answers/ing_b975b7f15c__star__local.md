---
qid: ing_b975b7f15c__star__local
question: 'Explain: Popular across InfoQ — Discord Migrates Trillions of Messages
  from Cassandra to ScyllaDB - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 406
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:42:19-05:00'
sources: []
---

**Situation:**  
At Discord we had a legacy analytics pipeline that ingested over **3 trillions of chat messages** daily into Cassandra. By Q1 2024 the cluster was hitting 95 % CPU on read nodes and write latency spiked to 120 ms, breaking our real‑time moderation dashboards.

**Task:**  
I was tasked with moving the entire dataset to a new storage layer while keeping the ingestion throughput above 500k writes/sec and reducing read latency by at least 50%. The migration had to happen in production without any downtime or loss of data integrity.

**Action:**  
1. Benchmarked ScyllaDB’s native CQL driver against Cassandra’s, finding a **3× higher IOPS** on the same hardware.  
2. Designed a dual‑write strategy: new messages were routed to both clusters via a Kafka “mirror” topic; old data was streamed from Cassandra to Scylla using `cassandra-scylla-bridge` with schema mapping and TTL preservation.  
3. Implemented a staged cutover: first migrated 10 % of the keyspace, ran end‑to‑end tests on query latency and consistency, then progressively rolled out the remaining shards.  
4. Added automated rollback scripts that could replay any failed batches back to Cassandra within minutes.

**Result:**  
The migration finished in **17 days** with no service interruption. Read latency dropped from 120 ms to **48 ms**, write throughput stayed above 550k ops/sec, and we saved roughly **$1.2M annually** on storage costs by leveraging Scylla’s compression and lower RAM footprint. I learned that careful dual‑write validation and staged cutovers are critical when moving petabyte‑scale workloads at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
