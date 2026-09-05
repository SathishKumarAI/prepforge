---
qid: ing_2c8d507ddc__fp__local
question: 'Explain: Keep Membership Consistent Enough — Consistent Hashing | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 384
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:39:10-05:00'
sources: []
---

**Why we need “membership‑consistent” routing**

When a distributed ML pipeline stores feature vectors or model checkpoints, the data must be routed to *N* storage nodes.  
If a node joins or leaves, naïve hashing (e.g., `hash(key) % N`) forces almost every key to move, causing massive I/O churn and stale cache entries.  
The fundamental problem is: *re‑balance the load while keeping as few keys affected as possible.*

**Consistent Hashing from first principles**

1. **Map both nodes and keys onto a circle** – each gets a hash in \([0,2^{k})\).  
2. **Assign a key to its clockwise successor node**.  
3. **When membership changes**, only the keys that fall between the removed/added node’s predecessor and itself move.

This follows directly from the *probability* that a random key lands in an interval of size \(1/N\); by keeping intervals contiguous on the ring, a single change affects only one such interval, not all of them.  
The algorithm is essentially a greedy load‑balancing strategy: each node absorbs exactly its “slice” of the hash space, guaranteeing *O(1)* key migration per event.

**Non‑obvious insight**

Adding **virtual replicas** (multiple positions for a single physical node) turns the ring into a weighted graph.  
This subtle tweak balances hot spots without changing the core invariant: each key still follows the same clockwise rule.  
Thus, consistent hashing is not just a clever trick—it’s an *optimization* that minimizes state churn while preserving uniform load distribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
