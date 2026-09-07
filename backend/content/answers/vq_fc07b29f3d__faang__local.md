---
qid: vq_fc07b29f3d__faang__local
question: What are the types of Triggers?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 613
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:43:42-05:00'
sources: []
---

**Clarify**  
The interviewer asks about *triggers* in a data‑engineering context—typically database or stream processing systems. I’ll assume they mean the mechanisms that automatically fire when certain events occur (e.g., DML, time, or external signals).

---

### 1️⃣ Types of Triggers

| Category | Typical Systems | What Fires It | Example Use |
|----------|-----------------|--------------|-------------|
| **DDL/DML Triggers** | Relational DBs (PostgreSQL, MySQL) | `INSERT`, `UPDATE`, `DELETE` or schema changes | Auditing, enforcing business rules |
| **Statement‑level vs Row‑level** | Same systems | Entire statement vs each affected row | Bulk inserts vs per‑row validation |
| **Time‑based Triggers** | Scheduler (Airflow, dbt) | Clock events (`cron`, `interval`) | Periodic ETL jobs |
| **External/Async Triggers** | Kafka Streams, Flink, Spark Structured Streaming | Arrival of new messages or files | Real‑time analytics pipelines |
| **Change Data Capture (CDC)** | Debezium, MySQL binlog | Underlying database changes captured and streamed | Replication, downstream materialized views |
| **Event‑driven Triggers** | Serverless platforms (AWS Lambda, GCP Cloud Functions) | External events (HTTP request, S3 upload) | Trigger micro‑services on data arrival |

---

### 2️⃣ Depth & Trade‑offs  

- **DDL/DML triggers** are tightly coupled to the DB; they can serialize writes and hurt performance if heavy logic is embedded.  
- **Time‑based schedulers** give predictable latency but may miss “real‑time” updates.  
- **CDC + stream processors** decouple source and sink, provide low‑latency propagation, but add operational overhead (offset management, fault tolerance).  

---

### 3️⃣ Edge Cases to Test  

1. **Concurrent writes** – ensure row‑level triggers don’t deadlock.  
2. **Large bulk operations** – verify statement‑level triggers don’t balloon logs.  
3. **Backpressure** in stream triggers – confirm that downstream systems handle slow consumers.  
4. **Schema evolution** – DDL triggers must adapt to added/removed columns.

---

### 4️⃣ Optimization & Communication  

- Prefer **CDC + lightweight stream processors** for near‑real‑time data pipelines; keep DB triggers minimal (audit, simple constraints).  
- Use **idempotent logic** in triggers to avoid duplicate side‑effects.  
- Communicate clearly: “We’ll use CDC via Debezium to push changes to Kafka; downstream Spark jobs will process them, reducing load on the source DB.”  

*Key takeaway:* Choose the trigger type that balances latency, consistency, and operational complexity for your specific data‑engineering workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
