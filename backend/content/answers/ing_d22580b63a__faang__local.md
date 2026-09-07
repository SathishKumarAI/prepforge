---
qid: ing_d22580b63a__faang__local
question: 'Explain: Filtering — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 506
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:49:08-05:00'
sources: []
---

**Filtering – Pub/Sub System Design**

---

### 1️⃣ Clarify  
*Goal:* Build a pub/sub pipeline that filters messages on the broker side before delivery to subscribers.  
*Assumptions to confirm:*
- Topic cardinality (hundreds of topics vs millions).  
- Message rate per topic (k‑msg/s).  
- Filter granularity (topic, tag, payload field).  
- Latency budget (≤ 10 ms).  
- Exactly‑once semantics?  

---

### 2️⃣ Approach  
1. **Topic → Partition**: Hash topics to partitions for parallelism.  
2. **Filter Registry**: Each partition keeps a *Bloom‑filter* per subscriber for fast membership tests, backed by a deterministic rule store (SQL/NoSQL).  
3. **Ingestion Path**:
   - Producer writes to topic; broker hashes key → partition.
   - Broker checks Bloom filters; only matching subscribers’ queues receive the message.  
4. **Delivery**: Push or pull via lightweight sockets; ack to guarantee at‑least‑once.  

---

### 3️⃣ Depth  
*Complexity*: Ingestion O(1) per subscriber check (Bloom filter). Storage ≈ |subscribers| × |rules| × log₂(m) bits.  
*Trade‑offs*:  
- **False positives** → extra messages, but can be filtered downstream.  
- **Rule updates** → propagate via config change streams; rebuild Bloom filters asynchronously.  

---

### 4️⃣ Edge Cases  
- **High cardinality rules** → switch to *Cuckoo filter* or sharded rule DB.  
- **Burst traffic** → back‑pressure via per‑partition queues.  
- **Subscriber churn** → lazy cleanup of stale filters.  

---

### 5️⃣ Optimize & Communicate  
- Cache Bloom filters in memory, persist to SSD for crash recovery.  
- Use RDMA or zero‑copy sockets for sub‑millisecond delivery.  
- In explanation: “We first hash to partitions for scale, then use probabilistic filters per subscriber to prune traffic at the broker, achieving O(1) checks while keeping storage linear in subscribers.”  

*Complexity*: Time O(k·|subscribers|), Space O(|subscribers|·|rules|).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
