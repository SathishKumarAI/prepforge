---
qid: ing_948f69c294__faang__local
question: 'Explain: Removing a Node — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 447
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:29:40-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how *removing a node* works in consistent hashing—i.e., when a server leaves or fails, how the key‑to‑node mapping changes and what guarantees remain.

Assumptions:  
- We use virtual replicas (tokens) per physical node.  
- Hash ring is uniformly distributed.  
- All nodes know the full token list.

**Approach**  
1. Identify the tokens that belong to the departing node.  
2. For each token, find its predecessor on the ring.  
3. Re‑assign all keys that map to the removed token to the next live token (its successor).  

Because only the interval between a node’s predecessor and itself is affected, the rest of the ring stays unchanged.

**Depth**  
When a node leaves, each key that hashes into its segment moves to the *next* alive node. Since tokens are evenly spaced, about `1/N` of keys (where N = total nodes) shift—sub‑linear churn. Complexity: O(#tokens_removed × log M), where M is number of live nodes (binary search on token list). The system guarantees that no key changes mapping except those in the affected interval; data consistency is preserved by re‑replicating to the new owner.

**Edge Cases**  
- Removing a node with many virtual replicas: more keys shift, but still only its own intervals.  
- Simultaneous failures: if multiple nodes leave, cascading shifts may occur—handle atomically or via a gossip protocol.  
- Empty ring (last node removed): system must pause operations until a new node joins.

**Optimize & Communicate**  
To reduce churn, use *consistent hashing with virtual nodes* and *pre‑replicate data* to successors. For large clusters, batch rebalancing and use a lightweight coordinator (e.g., ZooKeeper) to propagate token changes. Explain that the algorithm keeps most keys stable, scales logarithmically, and is fault‑tolerant—key points interviewers look for in a system design answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
