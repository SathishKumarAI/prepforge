---
qid: ing_e8b2e5c31f__faang__local
question: 'Explain: Timestamp-Based CDC — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 526
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:40:32-05:00'
sources: []
---

**Timestamp‑Based CDC – System Design**

| Step | What to do |
|------|------------|
| **Clarify** | *Goal:* capture all row changes in a source DB after a given timestamp, stream them downstream (e.g., data lake).  Assume relational tables, ACID commits, no schema evolution during a run.  Confirm: read‑only access vs. transactional logs, latency requirement, max throughput, and consistency guarantees needed by the consumer. |
| **Approach** | 1️⃣ Scan metadata to get last processed timestamp per table. <br>2️⃣ For each table, issue `SELECT * FROM t WHERE updated_at > :last_ts ORDER BY updated_at`. <br>3️⃣ Buffer results in a Kafka topic (or SQS) with schema‑id and change type. <br>4️⃣ Update checkpoint after batch commit.  Use incremental snapshots or log‑based replication if available for higher fidelity. |
| **Depth** | • **Time‑stamped query** guarantees ordering per table but not globally; use a composite key (ts, pk) to enforce uniqueness. <br>• **Batch size & windowing:** choose 1 MB or 10 s windows to balance latency and throughput. <br>• **Complexity:** O(N) reads where N = rows changed since last run; amortized cost depends on change rate. <br>• **Fault tolerance:** store checkpoints in a durable KV store (e.g., DynamoDB). If job restarts, it resumes from the last committed timestamp. |
| **Edge Cases** | • **Clock skew / out‑of‑order updates:** use database’s write‑timestamp instead of system clock. <br>• **Bulk deletes/updates before snapshot:** may miss changes if `updated_at` not set; fallback to binlog or change‑capture tool. <br>• **Schema drift:** handle with dynamic schema registry and versioned Avro/Parquet. |
| **Optimize & Communicate** | • Switch from polling to *binlog* or *logical decoding* for near‑real‑time capture when supported (e.g., MySQL’s X‑Comet, PostgreSQL WAL). <br>• Compress payloads, partition Kafka by table and time window. <br>Explain that timestamp CDC is simple, works with any RDBMS, but trades off completeness for latency; use log‑based CDC for high‑volume, low‑latency workloads. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
