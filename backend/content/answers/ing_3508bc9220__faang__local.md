---
qid: ing_3508bc9220__faang__local
question: 'Explain: Comparison — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 514
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:47:25-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise comparison of common caching strategies (in‑memory, distributed, write‑through vs write‑back, read‑through vs cache‑aside) and how they trade off consistency, latency, and complexity in a system design context. I’ll assume we’re dealing with high‑traffic web services that need sub‑millisecond reads and eventual data durability.

**Approach**  
1. List the primary strategies.  
2. For each, state its consistency model, write path, read path, and typical use case.  
3. Highlight cost/complexity trade‑offs (e.g., memory usage vs sync overhead).  

**Depth**  
| Strategy | Consistency | Write Path | Read Path | Typical Use |
|----------|-------------|------------|-----------|--------------|
| **Cache‑Aside** | Eventually consistent | App writes DB, updates cache on read miss | Cache hit → fast; miss → DB lookup + cache populate | Simple, low overhead |
| **Read‑Through** | Consistent if proxy refreshes on invalidation | Proxy reads from DB, populates cache | Cache always hits after first load | Good for immutable data |
| **Write‑Through** | Strongly consistent | App writes to cache then DB synchronously | Same as read‑through | Low latency writes, high durability |
| **Write‑Back (Lazy)** | Eventually consistent | App writes only to cache; flushes batch | Fast reads | High write throughput, risk of data loss on crash |
| **Distributed Cache (e.g., Redis Cluster)** | Configurable (strong vs eventual) | Requires partitioning & replication logic | Low latency globally | Scale‑out, high availability |

**Edge Cases**  
- Cache miss storms → throttle or use request coalescing.  
- Invalidation under heavy writes → use version tags or TTL.  
- Write‑back loss on node failure → implement WAL or async replication.

**Optimize & Communicate**  
Start with a **cache‑aside** pattern for read‑heavy services to keep the system simple. If write latency becomes critical, switch to **write‑through** and add a **distributed cache** layer for horizontal scaling. Emphasize that each strategy trades off consistency vs performance; choosing depends on SLA requirements and data volatility. Conclude by noting that monitoring metrics (hit rate, eviction count) guide iterative tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
