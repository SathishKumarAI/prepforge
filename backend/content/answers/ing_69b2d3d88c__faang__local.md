---
qid: ing_69b2d3d88c__faang__local
question: 'Explain: Problem — Pattern: Messaging'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 581
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:49:26-05:00'
sources: []
---

**Problem & Pattern (Messaging)**  
We need a system that delivers real‑time text notifications to millions of users while keeping latency < 200 ms, throughput > 10⁶ msgs/s, and guaranteeing at‑least‑once delivery. The pattern is *publish/subscribe* with *topic routing* and *message persistence*.

---

### 1️⃣ Clarify  
- **What constitutes a “message”?** (size, metadata)  
- **Delivery guarantees:** at‑most‑once vs. at‑least‑once?  
- **Failure modes to tolerate:** node crash, network partition, backpressure.  
- **Throughput & latency targets per region.**

---

### 2️⃣ Approach  
1. **Topic Layer** – Kafka or Pulsar clusters; topics per app feature.  
2. **Partitioning** – hash on user_id → ensures ordering per user and horizontal scalability.  
3. **Replication** – ≥ 3 replicas for durability, ISR to handle leader failover in < 200 ms.  
4. **Consumer Group** – one consumer per region; use sticky assignment to balance load.  
5. **Back‑pressure & Flow Control** – broker side `max.message.bytes`, client-side `fetch.min.bytes` tuning.

---

### 3️⃣ Depth  
- **Latency:** leader fetch + network round‑trip ≈ 50–70 ms; replication adds ~30 ms, still <200 ms.  
- **Throughput:** 10⁶ msgs/s → ~5 GB/s raw traffic; shard into > 100 partitions.  
- **Failure Handling:** Leader election O(1) time; ISR shrinks only if quorum ≥3.  
- **Durability:** Write‑ahead log on disk, replicated over at least 3 nodes, persistence guarantee ≥ P99.

---

### 4️⃣ Edge Cases  
- **Burst traffic** → burst buffers + back‑pressure to consumers.  
- **Network partitions** → split‑brain avoided by consensus quorum.  
- **Consumer lag** → monitor `consumer.lag` and auto‑scale consumer pods.

---

### 5️⃣ Optimize & Communicate  
- **Compression (Snappy/Avro)** to cut bandwidth.  
- **Batching**: fetch 10–20 kB per poll, reducing RPC overhead.  
- **Explain trade‑offs:** higher replication → lower latency but more disk I/O; more partitions → better parallelism but increased coordination cost.  

Conclude with a quick sanity check: “If we hit a 200 ms SLA breach in one region, our fallback is to route to a secondary cluster and replay from the last committed offset.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
