---
qid: ing_b195a3858e__faang__local
question: 'Explain: Do Not Confuse Routing with Rebalancing — Consistent Hashing |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 404
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:36:51-05:00'
sources: []
---

**Clarify**  
The interviewee asks why “routing” (choosing a node for a request) is distinct from “rebalance” (moving data when topology changes). I’ll confirm that we’re talking about consistent hashing in distributed caches/Databases, and that the goal is to keep lookup O(1) while minimizing data movement.

**Approach**  
1. Explain consistent hashing mechanics: hash keys → ring; assign virtual nodes per physical node.  
2. Show how routing works: a key hashes to the next clockwise virtual node.  
3. Contrast with rebalancing: when a node joins/leaves, only the keys that map to its neighbors move.

**Depth**  
*Routing*: deterministic, no coordination needed—lookup cost ≈ 1 hash + O(log N) to find successor.  
*Rebalance*: triggered by topology changes; each affected key is transferred once, not all keys. The amount of data moved is bounded by `1/number_of_nodes`.  
Explain that routing can be performed even while rebalancing occurs concurrently; the ring’s view may lag slightly, but stale reads are acceptable in many designs.

**Edge Cases**  
- Hot spots: a virtual node with too many keys → add more replicas.  
- Node churn: rapid joins/leaves cause temporary imbalance; use “virtual nodes” to smooth it.  
- Consistency: eventual vs strong—rebalance must be atomic if strong consistency is required.

**Optimize & Communicate**  
Highlight that conflating routing and rebalancing leads to unnecessary data movement, higher latency, and complexity in failure handling. By decoupling them we keep routing cheap (O(1)) and rebalance minimal (≈ 1/N of data). Conclude with a quick note on monitoring metrics (key distribution skew, transfer volume) to validate the design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
