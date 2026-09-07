---
qid: ing_3ded362c61__faang__local
question: 'Explain: Write-Through — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 489
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:08:04-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise overview of *write‑through caching* and how it fits into broader cache strategies in system design.  
Assumptions: (1) the cache sits between clients and a persistent store, (2) write latency matters, (3) data consistency is critical.

**Approach**  
1. Define write‑through.  
2. Contrast with write‑back and write‑around.  
3. Discuss typical use‑cases & trade‑offs.  
4. Highlight operational knobs (eviction, replication).  

**Depth**  

| Strategy | Write Path | Read Path | Consistency | Typical Use |
|----------|------------|-----------|-------------|-------------|
| **Write‑Through** | On every write: update cache *and* backend atomically. | Cache hit → fast; miss → fetch from backend, populate cache. | Strong consistency (cache always mirrors store). | Hot‑data, audit logs, transactional systems. |
| **Write‑Back** | Write only to cache; dirty block flushed later. | Same as write‑through. | Potential staleness until flush. | High‑write workloads where latency is priority. |
| **Write‑Around** | Writes go directly to backend; cache updated on read miss. | Same. | Cache may serve stale data if not refreshed. | Rare writes, large datasets. |

*Complexity*: write‑through adds ~O(1) overhead per write (two I/O ops).  
*Trade‑offs*: lower latency for reads vs higher write cost and potential bottleneck on backend.

**Edge Cases**  
- **High write volume**: backend becomes a hotspot → consider sharding or async replication.  
- **Cache eviction**: must ensure evicted items are already persisted (true in write‑through).  
- **Partial failures**: if backend write fails, cache rollback is required to maintain consistency.

**Optimize & Communicate**  
- Use *write‑through* when correctness trumps raw throughput; pair with *LRU/ARC* eviction and *async replication* for scale.  
- Explain that choosing the strategy is a balance between latency, consistency, and system complexity—exactly what interviewers look for in a FAANG answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
