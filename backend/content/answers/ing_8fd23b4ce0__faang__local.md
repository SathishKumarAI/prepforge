---
qid: ing_8fd23b4ce0__faang__local
question: 'Explain: Data Denormalization — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 473
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:18:50-05:00'
sources: []
---

**Clarify**  
We’re asked how to *denormalize* data in a database so it can scale horizontally or handle high‑write/read traffic. Key assumptions:  
- The system is read‑heavy with occasional writes (e.g., social feed).  
- We have multiple replicas and sharding support.  
- Consistency requirements are relaxed (eventual consistency acceptable).

**Approach**  
1. **Identify hot tables/joins** that dominate queries.  
2. **Flatten relationships**: embed child rows or pre‑join results into parent documents/tables.  
3. **Use a write‑through cache** to keep denormalized copies in sync.  
4. **Shard by a key (user_id, post_id)** and replicate across nodes.  
5. **Implement background jobs** for full recomputations when needed.

**Depth**  
Denormalization trades space for speed: each read hits a single row/table instead of a join, reducing latency from *O(n)* to *O(1)* per shard. We store derived columns (e.g., `post_count` in user table) and use triggers or CDC pipelines to propagate updates. Complexity: writes become *O(k)* where *k* is the number of denormalized copies; replication lag can be mitigated with asynchronous replication. Storage grows linearly with duplicates, but SSDs make this acceptable for read‑intensive workloads.

**Edge Cases**  
- **Stale data** if update propagation fails → detect via version stamps or use a “soft sync” window.  
- **Schema evolution**: adding a field requires updating all denormalized copies; use feature toggles.  
- **Hot shard**: uneven key distribution leads to bottlenecks; re‑hash or add a random prefix.

**Optimize & Communicate**  
Start with *read amplification* for the most frequent queries, monitor latency and hit ratios, then iterate. Explain trade‑offs clearly: “We’ll accept eventual consistency to achieve sub‑10 ms reads; writes incur extra cost but are bounded by our replication strategy.” This shows structured thinking, depth in design choices, and awareness of practical pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
