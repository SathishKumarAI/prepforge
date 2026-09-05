---
qid: ing_2bfb8cd6ca__fp__local
question: 'Explain: Account for Uneven Key Popularity — Consistent Hashing | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 455
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:38:19-05:00'
sources: []
---

**Why uneven key popularity hurts a naive hash ring**

A classic hash function distributes keys uniformly over the node set, but real workloads are far from uniform—some items (“hot” keys) receive orders of magnitude more requests than others. If we simply map every key to its nearest node on a circle, the few hot nodes become bottlenecks while many others sit idle.

**Deriving consistent hashing for skew**

1. **Hash space as a metric**  
   Map each node *i* to a point \(h_i\) in \([0,1)\). A key *k* hashes to \(x_k=h(k)\). The distance on the circle defines “nearness”.

2. **Balancing load with weights**  
   Assign each node a weight \(w_i\) proportional to its capacity or desired share of traffic. Place not one but \(w_i \times V\) *virtual nodes* (replicas) uniformly around the ring, where \(V\) is a constant controlling granularity.

3. **Assignment rule**  
   For key *k*, find the first virtual node clockwise from \(x_k\); the underlying physical node of that replica owns *k*. Because each node has many replicas, hot keys are distributed proportionally to weight—hot nodes receive more replicas and thus a larger share of traffic.

4. **Minimal remapping**  
   Adding or removing a node only affects keys mapped to its virtual nodes; all other assignments stay intact, preserving stability.

**Non‑obvious insight**

*Hotness is not just a load problem—it also changes the geometry.* By weighting replicas we effectively “stretch” the circle around hot nodes: the angular span of each node’s interval grows with weight. This geometric intuition shows why consistent hashing can handle skew without sacrificing the core property that only \(O(1/N)\) keys move when topology changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
