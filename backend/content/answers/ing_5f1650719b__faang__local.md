---
qid: ing_5f1650719b__faang__local
question: 'Explain: Real Time Stream Processing — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 478
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:25:15-05:00'
sources: []
---

**Real‑time stream processing system design**

| **1️⃣ Clarify** |  
*Goal*: ingest high‑velocity data (e.g., click logs), process it with sub‑second latency, and expose real‑time aggregates/alerts.  
Assumptions to confirm: event rate (events/sec), window size, tolerance for out‑of‑order events, persistence needs, fault‑tolerance level, and downstream consumers.

| **2️⃣ Approach** |  
1. **Ingestion layer** – Kafka/Flink/Storm topics with topic partitioning per key (user/session).  
2. **Processing engine** – Stateless operators for filtering/enrichment; stateful operators for windowed aggregates (sliding/tumbling) using keyed state and checkpoints.  
3. **State store** – RocksDB or external KV store for durability, enabling recovery after failures.  
4. **Output sinks** – Real‑time dashboards via Redis/Elasticsearch, alerts via Kafka, batch export to data lake.

| **3️⃣ Depth** |  
*Complexity*: Throughput O(events × operators). Latency dominated by network + operator processing; aim <50 ms end‑to‑end.  
Fault tolerance: exactly‑once semantics via idempotent writes and transactional commits.  
Backpressure handled by Kafka consumer lag metrics and dynamic scaling of task slots.

| **4️⃣ Edge Cases** |  
- Late events → out‑of‑order handling with allowed lateness or watermarking.  
- Partition skew → rebalancing partitions, using hash on key.  
- State explosion → TTLs, state compaction.  
- Service downtime → replay from Kafka offset checkpoints.

| **5️⃣ Optimize & Communicate** |  
*Optimizations*: Use vectorized UDFs, broadcast static reference data, compress state snapshots.  
Narration: “I’d start with a proven ingestion pipeline, then layer a stateful stream processor that guarantees exactly‑once semantics, and finally expose results through fast in‑memory stores for low‑latency consumption.”  

*Key take‑away*: Design the system to be modular, horizontally scalable, and fault‑tolerant while keeping latency within business SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
