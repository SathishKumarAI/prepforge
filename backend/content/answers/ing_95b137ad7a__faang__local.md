---
qid: ing_95b137ad7a__faang__local
question: 'Explain: The Cost of Hitting the Database — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 553
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:32:07-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain *what caching is* and why it matters when a system repeatedly hits a database.  Confirm that they want an architectural view (not just code), the trade‑offs of cache placement, consistency guarantees, and typical use cases in large‑scale services.

---

### Approach
1. **Define the problem** – latency & load on the DB from read‑heavy traffic.  
2. **Introduce caching** – a fast, often in‑memory layer that stores hot data.  
3. **Show the architecture** – client → cache (Redis/Memcached) → DB.  
4. **Discuss consistency models** – eventual vs strong, write‑through/writes‑back.  
5. **Talk metrics & trade‑offs** – hit ratio, memory cost, staleness, eviction policies.

---

### Depth
- **What is caching?** An intermediary storage that keeps a copy of frequently accessed data in faster media (RAM).  
- **Why it matters:**  
  - *Latency*: DB queries take ms–s; cache hits are μs.  
  - *Throughput*: Reduces DB connections, freeing capacity for writes or complex joins.  
  - *Cost*: Less database licensing/compute.  
- **Typical patterns**:  
  - *Read‑through* – fetch from DB on miss and populate cache automatically.  
  - *Write‑back* – update cache first, later sync to DB (writes‑behind).  
  - *Cache‑aside* – application explicitly checks the cache before querying DB.  
- **Consistency**: Use TTLs for eventual consistency; or publish/subscribe invalidation for strong consistency.  
- **Eviction policies**: LRU, LFU, FIFO; choose based on workload skew.  

---

### Edge Cases
- *Cache stampede*: many concurrent misses → DB overload. Mitigate with request coalescing or distributed locks.  
- *Stale data*: Long TTLs cause users to see outdated values. Use cache‑invalidations on writes.  
- *Memory pressure*: Over‑caching can swap or evict useful items; monitor hit ratios.

---

### Optimize & Communicate
Explain how you would **measure** hit ratio, latency distribution, and cost per request. Discuss adding a second tier (e.g., CDN for static content) or using a hybrid cache + database approach.  
Wrap up by summarizing: caching turns *O(1)* DB hits into *O(1)* memory lookups, drastically improving scalability while introducing consistency challenges that must be engineered carefully.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
