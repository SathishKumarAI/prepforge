---
qid: ing_7a8800dd17__faang__local
question: 'Explain: The Shape of a Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 421
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:29:08-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain “the shape of a cache” and what caching is in system design. Confirm whether they want an architectural overview (e.g., L1/L2 memory vs. distributed cache) or just the core concept. Ask if examples (in‑memory, CDN, database) are acceptable.

**Approach**  
1. Define caching: temporary storage of frequently accessed data to reduce latency and load.  
2. Map out the *shape* – hierarchical levels, eviction policies, consistency models.  
3. Provide a short example illustrating how a cache sits between client and backend.

**Depth**  
- **Cache layers**: L0 (CPU register), L1/L2 (on‑chip SRAM), L3 (shared), then software caches (Memcached/Redis).  
- **Eviction policies**: LRU, LFU, ARC – chosen based on access patterns.  
- **Consistency**: write‑through vs. write‑back; read‑through for priming.  
- **Data shape**: key‑value store with TTLs or sliding expiration; sometimes multi‑dimensional (region + user).  
- Complexity: O(1) average lookup, O(n) eviction if naive.

**Edge Cases**  
- *Stale data*: cache invalidation delays lead to read anomalies.  
- *Cache stampede*: many threads fetching the same miss simultaneously – mitigate with lock striping or singleflight.  
- *Memory pressure*: over‑caching can thrash; monitor hit ratio and adjust size.

**Optimize & Communicate**  
Explain that a well‑designed cache balances speed, memory cost, and consistency. Highlight trade‑offs: aggressive TTLs improve latency but risk staleness; larger caches increase hit rate but add RAM cost. Conclude by summarizing the “shape” as a layered, policy‑driven structure that adapts to workload characteristics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
