---
qid: ing_3db4c5a226__think__local
question: 'Explain: Cache Consistency — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 454
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:50:23-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Ask whether “cache consistency” refers to data‑level coherence (e.g., multiple cache copies of the same key) or system‑design concerns (latency, fault tolerance).  
- Assume a distributed cache (Redis/Memcached) in a web‑service stack.  

**2️⃣ Mental model / framework**  
- Treat caching as a *write‑through* vs *write‑back* decision tree.  
- Map the consistency problem to the classic *CAP theorem*: consistency, availability, partition tolerance.  

**3️⃣ Step‑by‑step reasoning**  
1. **What is caching?**: Temporarily store frequently accessed data in fast memory to reduce latency and load on back‑end stores.  
2. **Why consistency matters**: If a cache copy diverges from the source of truth, read‑after‑write anomalies or stale reads appear.  
3. **Consistency strategies**:  
   - *Cache‑aside* (lazy invalidation): application reads/writes bypass the cache; on write, evict relevant keys.  
   - *Write‑through*: every write goes to both DB and cache atomically.  
   - *Time‑to‑live (TTL)*: let data expire automatically, trading freshness for simplicity.  
4. **Choosing a strategy**: evaluate read/write ratios, acceptable staleness, and infrastructure constraints.  

**4️⃣ Common traps**  
- Assuming TTL alone guarantees consistency; it only limits staleness window.  
- Forgetting cache‑eviction order in multi‑node setups leads to “cache stampede”.  
- Over‑optimizing for speed at the cost of eventual consistency when business logic requires strong guarantees.  

**5️⃣ Sanity check & verbalization**  
- Re‑state the trade‑off: *“We can keep reads fast by caching, but we must decide how to keep those cached copies in sync with the source.”*  
- Verify against real metrics (cache hit rate, latency, consistency SLA). If numbers don’t align, revisit the chosen strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
