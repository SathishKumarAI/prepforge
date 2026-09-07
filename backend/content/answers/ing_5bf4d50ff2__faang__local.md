---
qid: ing_5bf4d50ff2__faang__local
question: 'Explain: Mapping a Key — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 408
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:17:03-05:00'
sources: []
---

**Clarify**

We’re asked how *consistent hashing* maps keys to nodes in a distributed system (e.g., cache or storage cluster).  
Assumptions:  
- Nodes can join/leave at any time.  
- We want minimal remapping of keys when topology changes.  
- The hash function is uniform and deterministic.

**Approach**

1. Hash the ring space (0–2³²‑1).  
2. For each node, create *virtual replicas* by hashing `(nodeID + replicaIndex)` → positions on the ring.  
3. To store/look up a key: hash the key to a point; the first node clockwise from that point owns the key.  
4. On node churn, only keys mapped between the removed/added node’s predecessor and itself move.

**Depth**

- *Complexity*:  
  - Insert/delete nodes: O(log N) if we keep replicas in a sorted list (e.g., balanced BST).  
  - Lookup: O(log N) to find successor.  
- *Trade‑offs*: More replicas → better load balance but higher memory and rehash cost.

**Edge Cases**

- Empty ring → error or special handling.  
- All nodes removed → no storage.  
- Duplicate hash values → resolve by linear probing or secondary hashing.  
- Very uneven key distribution → increase replica count or use weighted consistent hashing.

**Optimize & Communicate**

To improve lookup speed, maintain a skip‑list or array of sorted positions for O(1) average search. Explain that the “consistent” property comes from only reassigning keys in the affected interval, keeping most data stationary. Summarize: consistent hashing maps keys by placing nodes on a hash ring, using virtual replicas to balance load, and guarantees minimal key movement when topology changes—exactly what large‑scale distributed systems need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
