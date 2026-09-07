---
qid: ing_1b807ff9e9__faang__local
question: 'Explain: Audit and Compliance — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 565
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:48:51-05:00'
sources: []
---

**Audit & Compliance – CDC System Design**

| Step | What to do |
|------|------------|
| **1️⃣ Clarify** | *Problem:* Build a change‑data‑capture pipeline that records every DML event on a production database, guarantees order and durability for audit/compliance, and feeds downstream analytics/alerts. <br>*Assumptions:* single source DB (PostgreSQL/MySQL), high write volume (~10k ops/s), retention 90 days, low latency (<1 s). |
| **2️⃣ Approach** | • Read changes via database‑native CDC (Debezium + Kafka) or binary log.<br>• Persist raw events in a durable, immutable store (Kafka topic → HDFS/Cloud Storage).<br>• Transform to audit schema (timestamp, user_id, op_type, before/after JSON).<br>• Provide query API (SQL on Iceberg/Spark) and real‑time alerts. |
| **3️⃣ Depth** | *Components:* <br>• **CDC source connector**: streams binlog → Kafka topic “audit”. <br>• **Kafka cluster**: partitioned by table, retention 90 days, compaction for schema changes. <br>• **Schema registry**: Avro/Protobuf for evolution. <br>• **Sink**: HDFS/S3 + Iceberg tables; stream to downstream via Kafka Streams or Flink for alerts. <br>*Complexity:* O(1) per event write, O(log n) reads from Iceberg. *Trade‑offs:* Higher throughput vs. larger storage cost; stronger consistency requires idempotent writes. |
| **4️⃣ Edge Cases** | • **Schema drift**: handle added/removed columns via dynamic Avro schema registry.<br>• **Back‑fill** for missed events: use binlog replay or snapshot + CDC merge.<br>• **Time‑zone & clock skew**: store UTC timestamps, capture server time. <br>• **Data privacy**: mask PII in audit log before storage. |
| **5️⃣ Optimize & Communicate** | • Compress Avro records and enable Kafka compression to cut bandwidth.<br>• Use Kinesis/Redshift Spectrum for instant SQL queries without full load.<br>• Narrate as: “We capture every change atomically, store it durably, then expose it via a query‑able layer that guarantees audit‑ready ordering and retention.” |

*Result:* A fault‑tolerant, scalable CDC pipeline that satisfies compliance (immutability, traceability) while enabling real‑time analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
