---
qid: ing_b917718791__faang__local
question: 'Explain: Cache in Distributed Systems — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 449
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:53:22-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain *caching* as it applies to a distributed system—what it is, why we use it, and the key design trade‑offs.

**Approach**  
1. Define cache & its purpose (latency reduction, load off‑loading).  
2. List common cache types in a distributed context (client‑side, proxy, CDN, distributed in‑memory store).  
3. Discuss consistency models and eviction policies.  
4. Touch on failure handling and scaling.

**Depth**  

| Layer | What it does | Typical tech |
|-------|--------------|--------------|
| **Client cache** | Stores recently fetched data locally to avoid round trips. | Browser cache, mobile SDK cache |
| **Edge / CDN cache** | Caches content near users; reduces global latency. | CloudFront, Akamai |
| **Distributed in‑memory store** | Shared cache across nodes; supports read‑heavy workloads. | Redis Cluster, Memcached, DynamoDB Accelerator |

*Consistency*:  
- **Strong** – all reads see the latest write (rare in distributed caches).  
- **Eventual** – writes propagate asynchronously; trade‑off for speed.  

*Eviction*: LRU, LFU, TTL; choose based on access patterns.

*Failure handling*: Replication, read‑through fallback to DB, graceful degradation.

**Edge Cases**  
- Cache stampede when many clients miss simultaneously—use locking or “cache aside” with back‑off.  
- Stale data due to long TTLs causing incorrect business logic.  
- Memory pressure if eviction policy isn’t tuned.

**Optimize & Communicate**  
Explain that the right cache layer depends on latency requirements, data volatility, and consistency needs. Highlight that adding a distributed cache often gives 10–50× faster reads but introduces complexity in invalidation and monitoring. Conclude by noting that a well‑designed caching strategy is a cornerstone of scalable, low‑latency systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
