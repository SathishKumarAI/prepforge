---
qid: ing_087da45c83__faang__local
question: 'Explain: Log Retention — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 485
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:04:12-05:00'
sources: []
---

**Clarify**

We’re asked how to design a *log‑retention* system that captures changes to data (Change Data Capture, CDC).  
Key assumptions:  
1. The source is a relational database that emits change events (INSERT/UPDATE/DELETE).  
2. Retention period is configurable (e.g., 90 days).  
3. Queries need point‑in‑time reconstruction and audit trails.  

**Approach**

1. **Capture** – use the DB’s binlog or logical replication to stream DML rows into a Kafka topic per table.  
2. **Persist** – write each CDC event to a durable, append‑only storage (S3/Blob + Parquet) keyed by timestamp and partition.  
3. **Indexing** – maintain a compact metadata store (e.g., DynamoDB) mapping primary key → list of event offsets for fast lookup.  
4. **Retention purge** – run a scheduled job that deletes S3 objects older than the retention window and removes corresponding index entries.  

**Depth**

- *Encoding*: Use Avro/Protobuf to preserve schema evolution; store the full row snapshot (before & after).  
- *Consistency*: Kafka guarantees order per partition; we keep table‑level partitions so ordering is preserved.  
- *Querying*: To reconstruct a row at time T, read the latest event ≤ T via the index and replay events backward if needed.  
- *Complexity*: Write O(1) append; query O(log N + K) where N = #events for key, K = number of rows returned.  

**Edge Cases**

- Schema changes → re‑partition or add new topic.  
- Tombstones (DELETE) must be retained for audit.  
- Back‑fills: if retention window is extended, need to replay older data.

**Optimize & Communicate**

Explain trade‑offs: using Kafka + S3 gives durability and cost‑efficiency; however, reconstructing a row can be slow if many events exist—optimize by materializing snapshots every N rows.  
Summarize the design in a diagram (capture → Kafka → storage → index) and highlight how each component meets latency, scalability, and compliance requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
