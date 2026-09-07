---
qid: ing_59f144ae0b__faang__local
question: 'Explain: Consistency Across Nodes — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 516
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:12:44-05:00'
sources: []
---

**Consistency Across Nodes – What Is Caching?**

---

### **Clarify**
We’re asked to explain *caching* in the context of ensuring data consistency across multiple nodes in a distributed system.  
Assumptions:  
- A write‑through or write‑back cache is used.  
- The system tolerates eventual consistency (common in large‑scale services).  
- We care about read latency and load reduction.

### **Approach**
1. Define caching and its purpose.  
2. Explain how a cache sits between clients and the persistent store.  
3. Show how consistency is maintained when updates occur.  
4. Highlight trade‑offs (latency vs freshness).

### **Depth**
- **What it is**: A temporary, in‑memory storage of frequently accessed data to reduce read latency and backend load.  
- **Cache layers**: Client‑side, edge CDN, application server, distributed cache (e.g., Redis).  
- **Consistency model**:
  - *Write‑through*: every write updates the cache and DB atomically; guarantees strong consistency at the cost of higher latency.  
  - *Write‑back*: writes go to cache first, then asynchronously flushed to DB; lower latency but risk of stale reads if a node fails before flush.  
- **Invalidation**: Use TTLs, publish/subscribe events, or versioning (e.g., MVCC) so that when the source updates, all caches receive a “stale” signal and refresh.  
- **Complexity**: O(1) read/write for cache; O(log n) or O(1) for DB depending on data store.

### **Edge Cases**
- Cache miss → fallback to DB (slow path).  
- Simultaneous updates → race conditions; solve with atomic compare‑and‑swap or distributed locks.  
- Node failure before write‑back flush → potential data loss; mitigate with persistence of dirty writes.

### **Optimize & Communicate**
- Use *cache‑aside* patterns for read‑heavy workloads.  
- Employ a *content‑delivery network* for geographic consistency.  
- Narrate: “By decoupling reads from the database and carefully coordinating write propagation, we achieve low latency while preserving eventual consistency across nodes.”  

This concise, structured explanation hits the 160–240 word range while covering key FAANG interview concepts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
