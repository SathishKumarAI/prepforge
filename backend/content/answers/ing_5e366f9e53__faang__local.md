---
qid: ing_5e366f9e53__faang__local
question: 'Explain: Deletes — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 474
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:22:49-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re designing a *Deletes‑as‑CDC* pipeline: every time a row is removed from the source DB, we capture that event and publish it to downstream systems (analytics, search, audit).  
Assumptions:  
- Relational source with primary key.  
- Near‑real‑time latency (< 1 s).  
- High write volume (~10k deletes/s).  

**2️⃣ Approach**  
1. **Capture** – use database‑native CDC (Oracle/SQL Server) or binary log tailing (MySQL, PostgreSQL).  
2. **Transform** – enrich the delete record with metadata (timestamp, user, operation type).  
3. **Transport** – stream to a Kafka topic (`deletes-topic`).  
4. **Consume** – downstream services subscribe; they apply the delete to their own stores or trigger compensating actions.  

**3️⃣ Depth**  
- *Capture*: Debezium reads binlog → emits JSON change events.  
- *Schema evolution*: keep Avro schema registry; mark `op: D`.  
- *Ordering*: Kafka partitions by PK ensures causal order per key.  
- *Failure handling*: idempotent consumers (store last‑processed offset).  
Complexity: O(1) per event; storage linear in delete rate.  

**4️⃣ Edge Cases**  
- **Bulk deletes**: may flood log → use compaction or batch processing.  
- **Rollback**: if a delete is undone, emit an `op: R` (restore) event.  
- **Schema change**: dropping PK – fallback to surrogate key.  
Testing: replay binlog snapshots; verify downstream idempotency.

**5️⃣ Optimize & Communicate**  
- *Compression*: enable GZIP on Kafka payloads to cut bandwidth.  
- *Batching*: group 1000 deletes before publishing for throughput.  
Explain trade‑offs: higher batch size → lower latency vs. network cost.  

> **Takeaway:** A CDC‑based delete stream is reliable, scalable, and keeps downstream systems in sync without polling the source DB.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
