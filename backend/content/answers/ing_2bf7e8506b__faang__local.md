---
qid: ing_2bf7e8506b__faang__local
question: 'Explain: Log-Based CDC — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 482
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:25:15-05:00'
sources: []
---

**Log‑Based CDC – System Design**

| # | Section | Key Points |
|---|---------|------------|
| **1️⃣ Clarify** | • Capture every data change (INSERT/UPDATE/DELETE) from a source DB.<br>• Persist changes in an append‑only log for downstream consumers (analytics, sync).<br>Assumptions: ACID source, high write volume, low latency requirement. |
| **2️⃣ Approach** | 1. **Log ingestion** – use native binlog (MySQL), WAL (PostgreSQL) or Kafka Connect.<br>2. **Schema evolution** – keep a schema registry; emit change events with versioned metadata.<br>3. **Event routing** – publish to a distributed log (Kafka, Pulsar).<br>4. **Consumer tier** – decouple via streaming jobs or CDC workers that apply changes to target stores. |
| **3️⃣ Depth** | *Ingestion*: tail the binlog → parse rows → emit JSON with `op`, `ts`, `before/after`. Complexity O(1) per row; storage ~Δsize of writes.<br>*Durability*: Kafka guarantees at-least-once, idempotent producers for exactly‑once. <br>*Schema*: Avro/Protobuf + Confluent Schema Registry → backward compatibility. |
| **4️⃣ Edge Cases** | • **Skewed partitions** → re‑partition by key.<br>• **Long‑running deletes** – tombstones with TTL.<br>• **Downtime** – use “snapshot + log” to avoid missing changes.<br>• **Schema breakage** – fail fast if incompatible. |
| **5️⃣ Optimize & Communicate** | • Batch writes, compress logs (snappy).<br>• Use compacted topics for stateful CDC.<br>• Monitor lag, back‑pressure signals.<br>Communicate trade‑offs: higher throughput → more storage; strict consistency → extra checkpoints. |

*Result*: A robust, horizontally scalable pipeline that turns database writes into streaming events with minimal latency and strong durability guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
