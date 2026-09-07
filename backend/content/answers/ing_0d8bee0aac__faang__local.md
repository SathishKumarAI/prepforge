---
qid: ing_0d8bee0aac__faang__local
question: 'Explain: Distributed Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 476
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:15:24-05:00'
sources: []
---

**Distributed Cache – What is Caching?**

---

### 1️⃣ Clarify  
*Question*: “Explain distributed cache and what caching means in a system design context.”  
*Assumptions to confirm*:
- Target audience: engineers designing large‑scale web services.
- Focus on performance, consistency, and fault tolerance.
- We’re not building the cache from scratch but selecting/designing a solution.

### 2️⃣ Approach  
1. Define *caching* as storing frequently accessed data in faster storage (memory) to reduce latency/CPU.  
2. Outline why *distributed* is needed: single node can’t serve global traffic, so replicas must exist.  
3. Highlight key properties: consistency model, eviction policy, scaling strategy, and failure handling.

### 3️⃣ Depth  
- **Cache Layer**: in‑memory (Redis/Memcached), optional SSD tier for larger objects.  
- **Consistency**: eventual vs strong; use write‑through or read‑miss callbacks to keep data fresh.  
- **Eviction**: LRU, LFU, or TTL; choose based on access pattern.  
- **Scaling**: consistent hashing + virtual nodes → minimal remapping when adding/removing servers.  
- **Fault Tolerance**: replication (primary–secondary) + automatic failover; use quorum reads for consistency.  
- **Complexity**: O(1) average lookup, O(log N) for rebalancing on topology change.

### 4️⃣ Edge Cases  
- *Stale data*: read‑miss latency spike; mitigate with pre‑fetch or cache warming.  
- *Hot spots*: single key overloading a node → shard the key or use sticky caching.  
- *Network partitions*: risk of serving stale data; fallback to DB if consistency required.

### 5️⃣ Optimize & Communicate  
Explain trade‑offs: higher replication improves availability but increases write latency. Suggest monitoring cache hit ratio, eviction count, and network health. Conclude by recommending a hybrid in‑memory + SSD tier with consistent hashing for most scenarios, while noting that choosing a managed service (e.g., Amazon ElastiCache) can offload operational overhead.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
