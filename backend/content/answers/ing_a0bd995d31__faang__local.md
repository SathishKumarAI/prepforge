---
qid: ing_a0bd995d31__faang__local
question: 'Explain: What CDC Captures — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 560
total_tokens: 799
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:58:14-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise description of *Change Data Capture* (CDC) in the context of system design: *What data does it capture, how is that captured, and why is it useful?* I’ll assume we’re dealing with relational or document stores where changes are logged.

---

**Approach**  

1. Identify the *source* (DB logs, triggers, WAL).  
2. Define the *payload* – what constitutes a “change” (insert, update, delete).  
3. Explain the *transport* to downstream consumers (streams, queues).  
4. Highlight use‑cases and constraints.

---

**Depth**

| Component | What CDC captures |
|-----------|------------------|
| **Row/Document Level** | Each row’s state before & after change (old vs new values). |
| **Metadata** | Timestamp, transaction ID, operation type (I/U/D), source table/collection. |
| **Schema Evolution** | DDL changes that affect data shape (column adds/drops). |

CDC typically reads the database’s write‑ahead log (WAL) or transaction log, which contains a serial stream of all modifications. By parsing this log, CDC emits *change events* in real time: e.g., `{"op":"U","table":"orders","pk":123,"before":{"status":"P"},"after":{"status":"S"},"ts":"2026‑09‑07T12:00:01Z"}`.

Downstream systems (Kafka, Kinesis) consume these events to keep materialized views, data warehouses, or microservice caches in sync. CDC is *incremental*—only changed rows are sent, reducing bandwidth and latency compared to full table scans.

---

**Edge Cases**

- **Bulk loads**: May generate millions of events; throttling needed.  
- **Schema changes mid‑stream**: Consumers must handle new columns gracefully.  
- **Deleted records**: Some CDC tools emit tombstones; others store the *before* state only.  
- **Replication lag**: If log truncation is aggressive, lost events can occur.

---

**Optimize & Communicate**

To improve efficiency, batch changes per transaction and compress payloads. For reliability, enable exactly‑once semantics via idempotent keys (transaction ID + LSN). In an interview, I’d articulate that CDC turns a write‑heavy system into a *push* model for downstream services, enabling real‑time analytics while keeping latency low. This aligns with FAANG’s emphasis on scalable, event‑driven architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
