---
qid: ing_e13d6bda87__faang__local
question: 'Explain: Conflict resolution — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 518
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:22:57-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *conflict resolution* in the context of **data replication**—the ways distributed systems keep copies of data consistent, how conflicts arise, and when each strategy is appropriate.

**Approach**  
1. Define conflict & why it occurs (concurrent writes).  
2. Enumerate common resolution strategies: last‑write wins, version vectors, application‑level merges, operational transforms, CRDTs.  
3. Give a concrete example for each.  
4. Map use cases to strategy strengths.

**Depth**  

| Strategy | Mechanism | Example | Typical Use Case |
|---|---|---|---|
| **Last‑Write Wins (LWW)** | Timestamp or Lamport clock; newer write overwrites older. | Two mobile clients update a user profile; the one with the later timestamp prevails. | Simple key‑value stores, cache invalidation where stale data is acceptable. |
| **Vector Clocks / Version Vectors** | Each replica tracks per-node counters; conflicts detected when vectors are incomparable. | Distributed file system: two nodes modify same file → both versions stored, user resolves. | Collaborative editing, distributed databases needing causal history. |
| **Application‑Level Merge (Custom Resolvers)** | Domain logic decides how to combine conflicting records (e.g., merge lists). | Shopping cart merges items from offline device and online session. | E‑commerce carts, CRM systems where business rules dictate merge semantics. |
| **Operational Transform / CRDTs** | Operations are commutative/transformable; replicas converge automatically. | Real‑time collaborative text editor (Google Docs). | Live document editing, shared whiteboards. |

**Edge Cases**  
- Clock skew in LWW can favor stale writes → mitigate with monotonic clocks or hybrid logical clocks.  
- Vector clocks grow with node count; pruning or sharding needed for large clusters.  
- CRDTs may increase payload size (e.g., G-Counter).  
- Custom merges risk orphaned data if logic fails.

**Optimize & Communicate**  
Explain trade‑offs: LWW is O(1) but loses data, whereas CRDTs guarantee convergence at the cost of bandwidth and complexity. Emphasize that choosing a strategy hinges on consistency requirements, latency tolerance, and operational overhead. Conclude by recommending profiling workloads to pick the right conflict‑resolution model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
