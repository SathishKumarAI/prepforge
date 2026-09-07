---
qid: ing_bdac2ad837__faang__local
question: 'Explain: The Thundering Herd — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 455
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:03:38-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of *caching* in the context of mitigating a “thundering herd” problem—when many clients simultaneously request data that isn’t in memory, causing excessive database load. I’ll assume we’re discussing read‑heavy services and typical key‑value cache systems.

**Approach**  
1. Define caching: an intermediary layer storing frequently accessed data in fast storage (RAM).  
2. Explain the thundering herd scenario.  
3. Show how a cache breaks that pattern by serving repeated requests locally.  
4. Mention cache coherence strategies (write‑through, write‑back).  

**Depth**  
Caching stores key–value pairs with an eviction policy (LRU, LFU). When a client asks for `key`, the service first checks the in‑memory store; hit → immediate response. Miss → fetch from DB, return to client **and** populate cache. Thus only the first request triggers a costly DB round‑trip; subsequent requests hit the cache, eliminating the herd effect. Cache invalidation (TTL or explicit refresh) ensures stale data is refreshed before all clients read it again.

*Complexity*: O(1) average lookup in a hash table; O(n log n) for eviction if using balanced trees. Trade‑offs: memory cost vs. latency reduction; consistency concerns with distributed caches.

**Edge Cases**  
- Cache stampede on a cold key after TTL expiry—use locking or “single flight” patterns to allow only one fetch.  
- Partitioning across nodes can cause uneven load; consistent hashing helps.  
- Write‑heavy workloads may require write‑through to keep cache and DB in sync.

**Optimize & Communicate**  
To scale, use a distributed cache (Redis Cluster) with read replicas and rate limiting. I’d explain that adding a *cache-aside* layer turns the thundering herd into a single “hot spot” fetch per key, drastically reducing database load while keeping latency low. This succinctly demonstrates structured thinking, technical depth, and awareness of real‑world pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
