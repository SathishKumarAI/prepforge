---
qid: ing_be03abaf01__faang__local
question: 'Explain: MySQL Sharding at Pinterest — Tech-Stacks-Live-Apps/Pinterest/Readme.md
  at main \u00b7 Anshul619/Tech-Stacks-Live-Apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 540
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:04:25-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of how Pinterest uses MySQL sharding in its live‑app stack, focusing on the architecture, goals (scale, latency, fault isolation), and key trade‑offs.

**Approach**  
1. Outline Pinterest’s data model & traffic patterns.  
2. Explain why horizontal sharding is chosen over replication or a NoSQL store.  
3. Describe the shard allocation strategy (range vs hash, consistent hashing).  
4. Cover routing logic (client‑side vs proxy), failover, and rebalancing.  
5. Touch on monitoring & tooling.

**Depth**  
Pinterest shards billions of rows across ~200 MySQL nodes. Each user’s pins are partitioned by `user_id` using a hash function that maps to a shard group; this keeps related data collocated for read‑heavy “home feed” queries while distributing write load. A lightweight proxy layer (e.g., **MySQL Proxy** or custom **ShardRouter**) intercepts every query, looks up the target shard via a fast in‑memory mapping table, and forwards it—keeping application code shard‑agnostic.

For hot shards, Pinterest runs “hot‑shard replicas” to absorb traffic spikes. Rebalancing is automated: when a shard’s size exceeds a threshold, data is split into two new shards; routing metadata is atomically updated via ZooKeeper/ZK‑like service so no downtime occurs. MySQL replication provides durability; the primary remains local to the shard for fast writes, while secondary replicas serve read traffic.

**Edge Cases**  
- **Shard failure**: failover to a hot‑shard replica or promote a standby.  
- **Skewed user activity**: “super‑active” users can trigger additional replicas.  
- **Schema changes**: apply migrations per shard in parallel, with rollback hooks.  

Testing includes synthetic load for split/merge, failure injection for failover paths, and data consistency checks across replicas.

**Optimize & Communicate**  
Potential improvements: move hot reads to a read‑optimized cache (e.g., Memcached), adopt semi‑structured storage for infrequently accessed metadata, or experiment with vectorized query execution in MySQL 8.0. In an interview, I’d summarize the architecture in a diagram, quantify throughput gains (~10× per shard) and latency reductions (<50 ms average), and highlight how sharding aligns with Pinterest’s goal of serving millions of users with minimal downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
