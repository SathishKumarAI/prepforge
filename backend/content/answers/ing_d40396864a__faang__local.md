---
qid: ing_d40396864a__faang__local
question: 'Explain: Rebalancing and Resharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 437
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:53:22-05:00'
sources: []
---

**Clarify**  
You’re asking about *rebalancing* (redistributing data across shards) and *resharding* (changing the number of shards) in a sharded ML system—e.g., feature store or model registry. Confirm assumptions: we have horizontal partitioning by key, consistent hashing, eventual consistency, and need to keep query latency low.

**Approach**  
1. **Detect imbalance:** monitor shard size / throughput; set thresholds.  
2. **Plan movement:** compute source–target pairs minimizing cross‑traffic (e.g., using a weighted bipartite graph).  
3. **Execute migration:** use streaming copy with version tags, pause writes or route through both shards during transition.  
4. **Resharding:** when adding/removing shards, recompute hash ranges and move affected keys; update routing metadata atomically.

**Depth**  
- *Rebalancing* keeps each node’s load ≈ 1/N of total; complexity O(k log n) where k is number of moved keys, n shards.  
- *Resharding* requires updating the consistent‑hash ring (O(log n)) and propagating new mapping to all clients (gossip or config service).  
- Use write‑ahead logs so migrations are idempotent; maintain dual writes during overlap.  
- Cache stale ranges until all nodes have refreshed.

**Edge Cases**  
- Sudden hot spot: trigger micro‑resharding locally before global rebalance.  
- Network partitions: ensure migration aborts cleanly and no duplicate keys.  
- Schema changes: validate new shard mapping against versioned data models.

**Optimize & Communicate**  
Explain that rebalancing keeps latency predictable, while resharding enables horizontal scaling or fault tolerance. Emphasize trade‑offs: more shards → higher metadata overhead but lower per‑node load; frequent migrations → increased I/O cost but smoother performance. Conclude with a monitoring loop that auto‑triggers these operations based on SLA metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
