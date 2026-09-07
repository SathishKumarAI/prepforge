---
qid: ing_38942bf46c__faang__local
question: 'Explain: Trigger-Based CDC — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 567
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:55:56-05:00'
sources: []
---

**Trigger‑Based CDC – System Design**

| Step | What to do | Why |
|------|------------|-----|
| **1️⃣ Clarify** | *Goal:* capture row inserts/updates/deletes from a source DB and stream them to downstream consumers (analytics, search, ETL). <br>*Assumptions to confirm:* relational DB (e.g., MySQL/PostgreSQL), single‑tenant or multi‑schema, latency tolerance (<1 s), durability required, no schema drift. | Sets scope; avoids off‑track solutions. |
| **2️⃣ Approach** | 1) **Trigger placement:** create AFTER INSERT/UPDATE/DELETE triggers that write a lightweight audit record to a *CDC log table* (id, pk, op, payload, ts). <br>2) **Log consumer:** a background worker polls the log, batches rows, serializes to JSON, publishes to a message broker (Kafka/RabbitMQ). <br>3) **Offset tracking:** store last processed PK/row‑ID in a separate state table or use Kafka’s commit. | Keeps DB write path minimal and isolates streaming logic. |
| **3️⃣ Depth** | *Trigger logic:* `INSERT INTO cdc_log VALUES (NEW.id, 'I', row_to_json(NEW), now());` <br>*Consumer pseudocode:* fetch with `WHERE id > last_id ORDER BY id ASC LIMIT 10k;` batch‑serialize → Kafka topic. Complexity: O(1) per write; consumer O(n) where n=rows polled. Trade‑off: triggers increase transaction time but keep consistency; polling avoids deadlocks. |
| **4️⃣ Edge Cases** | • Concurrent inserts causing duplicate IDs – use `SERIALIZABLE` isolation or unique log key.<br>• Schema changes – embed column list in payload; consumer must handle optional fields.<br>• High write burst – back‑pressure via Kafka partitions, adjust batch size. <br>• Failure of consumer – replay from last_id to guarantee at‑least‑once semantics. |
| **5️⃣ Optimize & Communicate** | • Switch to *row‑level CDC* with binary log (Debezium) if DB supports it for lower latency.<br>• Compress payloads, use Avro/Parquet for schema evolution.<br>Explain reasoning: triggers give strong consistency at the cost of write latency; consumer decouples streaming and allows horizontal scaling. | This structured plan shows clear assumptions, a pragmatic design, complexity analysis, edge‑case handling, and optimization pathways—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
