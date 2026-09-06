---
qid: ing_76b7ebaf59__fp__local
question: 'Explain: Replication with Consistent Hashing — Consistent Hashing | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 440
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:16:44-05:00'
sources: []
---

### Why we need *replication* and *consistent hashing*

In a distributed key‑value store the **primary** goal is to keep every key accessible while tolerating node failures.  
If we simply hash keys into N buckets, removing one node forces us to rehash almost all keys—an O(N) reshuffle that stalls traffic.  

Consistent hashing solves this by mapping both nodes and keys onto a 1‑D ring (0–2ⁿ−1).  
A key is stored on the first node clockwise from its hash value.  
When a node joins or leaves, only the keys that fall in its *arc* change hands; all other keys remain untouched.  
Thus we achieve **O(1) rebalancing**—a direct consequence of the ring’s cyclic geometry.

### Replication as “virtual nodes” on the ring

To guarantee availability and load balance, each physical node is represented by *k* virtual nodes (replicas) spread uniformly around the ring.  
A key is written to its primary node and then to the next k‑1 successors.  
The deeper principle here is **redundancy as a probabilistic buffer**: with k replicas, the probability that all of them fail simultaneously drops exponentially (≈pᵏ for failure rate p).  

### One non‑obvious insight

Because replicas are placed *successor* to the primary, they tend to be on nodes that are geographically or topologically close in the hash space.  
This proximity often aligns with network locality: traffic for a key usually hits two nearby servers, reducing cross‑data‑center hops and improving latency—an effect that isn’t obvious when you think of replication purely as “more copies”.

In short, consistent hashing turns the expensive *redistribute* problem into a local, O(1) one; adding replicas on the ring gives fault tolerance while preserving locality, all grounded in simple geometry and probability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
