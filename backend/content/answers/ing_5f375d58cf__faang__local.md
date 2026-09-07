---
qid: ing_5f375d58cf__faang__local
question: 'Explain: Eviction Policy — Design of a Modern\u00a0Cache - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 473
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:25:33-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Design an eviction policy for a high‑scale cache that balances hit rate, latency, and memory usage while supporting millions of concurrent requests.  
*Assumptions to confirm:*  
- Write‑through or write‑back semantics?  
- Cache size is fixed but can grow/shrink dynamically.  
- Workload mix (read‑heavy vs. write‑heavy).  
- Need for fault tolerance across shards.

**2️⃣ Approach**  
1. Partition cache into *segments* (shards) to reduce contention.  
2. Use a *hybrid LRU–LFU* counter per segment: keep recent access order (LRU stack) and frequency counts (LFU).  
3. When eviction is needed, compute a *score* = α·rank + β·frequency, where α/β tune recency vs. popularity.  
4. Run eviction in a background thread to avoid blocking reads.

**3️⃣ Depth**  
- **Data structures:** Doubly linked list for LRU stack + hash map of keys → node; frequency table (hash ↦ counter).  
- **Complexity:** O(1) put/get, O(k) eviction where k is number evicted per operation.  
- **Scalability:** Segmentation allows parallelism; use lock‑free queues or sharded mutexes.  
- **Fault tolerance:** Replicate segments across nodes (consistent hashing + replication factor).

**4️⃣ Edge Cases**  
- *Burst traffic:* backpressure by temporarily rejecting writes.  
- *Hot keys:* frequency counter can skew; apply decay or sliding window to prevent cache thrashing.  
- *Memory fragmentation:* periodic compaction of segments.

**5️⃣ Optimize & Communicate**  
Explain trade‑offs: pure LRU is fast but misses popular items, pure LFU keeps hot data but may evict recently used useful keys. The hybrid score allows tunable policy via α/β. Present a simple experiment to validate hit rate improvements (e.g., 15% higher over LRU on a production workload). Highlight that the design scales linearly with segment count and is amenable to distributed deployment, meeting FAANG‑style performance expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
