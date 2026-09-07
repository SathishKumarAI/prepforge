---
qid: ing_f216b7beb5__faang__local
question: 'Explain: Operational Challenges — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 620
total_tokens: 857
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:02:34-05:00'
sources: []
---

**Operational Challenges – Change Data Capture (CDC)**  

| **Challenge** | **Why It Matters** | **Typical Mitigation** |
|---------------|--------------------|------------------------|
| **Latency vs Throughput** | Need near‑real‑time updates without overloading source DB. | Tune batch window, use async queues, back‑pressure controls. |
| **Schema Evolution** | Tables may add/drop columns; downstream must adapt. | Store schema snapshots, versioned change logs, dynamic mapping layers. |
| **Data Consistency & Ordering** | Replication errors can lead to out‑of‑order events or duplicates. | Use transaction IDs/commit timestamps, sequence numbers, idempotent processing. |
| **Fault Tolerance** | Network hiccups or node failures risk data loss. | Write-ahead logs, checkpointing, replay mechanisms, redundant capture agents. |
| **Security & Compliance** | Sensitive data may be captured inadvertently. | Apply fine‑grained encryption, masking, audit trails, role‑based access. |

---

### System Design Sketch (High‑Level)

1. **Capture Layer**  
   - *Log‑Based CDC*: Read binary logs or transaction logs via lightweight agents.  
   - *Change Buffer*: Append changes to a durable, ordered stream (Kafka / Pulsar).  

2. **Processing Layer**  
   - *Stream Processor* (Flink/Beam): Apply transformations, schema evolution logic, deduplication.  
   - *Checkpointing*: Persist state in distributed store (Zookeeper, etcd) for exactly‑once guarantees.

3. **Sink Layer**  
   - *Data Warehouse / OLAP*: Write to columnar storage (Snowflake, BigQuery).  
   - *Real‑Time Dashboards*: Push updates to Redis Streams or WebSocket servers.

4. **Observability & Control**  
   - Metrics: Latency, lag, error rates.  
   - Alerts: Schema drift, replication lag > threshold.  

---

### Edge Cases to Test

- Sudden schema change (new column) during active stream → verify mapping layer adapts without downtime.  
- Network partition causing duplicate log entries → ensure idempotent sink logic.  
- High write burst → monitor back‑pressure handling and queue depth.

---

**Optimization & Communication**

- **Batching vs Micro‑batch**: trade‑off between latency and throughput; explain when to adjust batch size based on SLA.  
- **Compression & Encryption**: balance performance overhead against compliance needs.  

When interviewing, articulate the trade‑offs clearly, quantify expected latencies (e.g., 5 s for CDC → 2 min for warehouse) and justify design choices with concrete metrics. This demonstrates structured thinking, depth, and an awareness of operational realities—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
