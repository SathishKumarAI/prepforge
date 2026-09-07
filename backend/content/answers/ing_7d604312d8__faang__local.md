---
qid: ing_7d604312d8__faang__local
question: 'Explain: Hot Shards — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 486
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:36:43-05:00'
sources: []
---

**Hot Shards – Sharding & System‑Design**

### 1️⃣ Clarify  
*Problem:* In a distributed key–value store, certain shards receive far more traffic (“hot” shards) than others, leading to bottlenecks and uneven latency.  
*Assumptions to confirm:*  
- Total data size > single node capacity.  
- Workload is read‑heavy or write‑heavy?  
- Keys are evenly distributed by hash in current design.  
- We can add nodes but not change application logic drastically.

### 2️⃣ Approach  
1. **Detect hot shards**: monitor request rate per shard (e.g., via Prometheus).  
2. **Redistribute load**: split the hot shard into sub‑shards (range or hash prefix) and migrate data to new nodes.  
3. **Re‑hash routing**: update client/cluster routing tables so future requests hit balanced shards.  
4. **Incremental migration**: use a “split‑log” technique to avoid downtime.

### 3️⃣ Depth  
- **Detection**: threshold (e.g., >2× average traffic) triggers split.  
- **Splitting**: pick a key boundary, create two new shards, copy data in parallel, then redirect traffic.  
- **Routing**: consistent hashing with virtual nodes; when a shard splits, add its virtual nodes to the ring.  
- **Complexity**: O(N) for data move per split, but amortized over time and spread across nodes.  
- **Trade‑offs**: extra metadata overhead vs. reduced latency.

### 4️⃣ Edge Cases  
- Sudden flash crowds that exceed thresholds before detection → add temporary “hot spot” replicas.  
- Write skew causing inconsistent splits; need to lock the shard during migration.  
- Client caching of shard IDs must be refreshed.

### 5️⃣ Optimize & Communicate  
- Use **lazy replication** for hot data: keep a hot‑cache layer that mirrors hot shards.  
- Predictive scaling with ML on request patterns can preemptively split before load spikes.  
- Explain to interviewers how consistent hashing minimizes rebalancing and preserves cache locality, aligning with FAANG emphasis on scalable, low‑latency systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
