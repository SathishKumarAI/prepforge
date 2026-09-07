---
qid: ing_4df8409bb0__faang__local
question: 'Explain: Co-located Cache — What is Distributed Caching? - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 538
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:45:58-05:00'
sources: []
---

**Co‑located Cache – Distributed Caching (Ashish Pratap Singh)**  

---

### 1️⃣ Clarify  
We’re asked to explain *distributed caching*—a way to store data across multiple nodes so that read/write operations bypass a slow backend (DB, API). Key assumptions:  
- **Latency‑sensitive** reads are the bottleneck.  
- Data is *read‑heavy*, write‑light, and can tolerate eventual consistency.  
- The cache should scale horizontally and survive node failures.

### 2️⃣ Approach  
1. **Identify data that benefits from caching** (session tokens, user profiles).  
2. **Choose a distribution strategy**: consistent hashing, rendezvous hashing, or modulo‑based sharding.  
3. **Implement replication** for fault tolerance—e.g., each key stored on *n* replicas.  
4. **Co‑locate cache nodes with application servers** to reduce network hops.  
5. **Set eviction policies** (LRU, LFU) and TTLs that match access patterns.

### 3️⃣ Depth  
- **Consistent hashing** keeps most keys unmoved when adding/removing nodes, minimizing data reshuffling.  
- **Replication factor of 3** gives *stronger* read consistency while keeping write latency low.  
- **Co‑location** means cache servers run on the same rack/VM as application instances, lowering inter‑datacenter traffic and improving throughput (often >10×).  
- **Cache-aside pattern**: app first checks local cache; on miss it fetches from DB, updates cache, then returns.  
- **Complexity**: O(1) average lookup, O(log N) for rebalancing when nodes change.

### 4️⃣ Edge Cases  
- **Node failure** → stale data if replication not checked. Test with simulated outages.  
- **Cache stampede** on hot keys—use locking or request coalescing.  
- **TTL mismatch**: too short causes DB thrashing; too long leads to stale reads.

### 5️⃣ Optimize & Communicate  
- Add *read‑through* capability for auto‑loading misses.  
- Use *geographically distributed* caches (e.g., CloudFront) if global latency matters.  
- Explain trade‑offs: higher replication → lower availability, but better consistency.  

**Result:** A robust, horizontally scalable cache that dramatically reduces read latency while gracefully handling node churn and ensuring data freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
