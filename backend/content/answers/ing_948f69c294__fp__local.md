---
qid: ing_948f69c294__fp__local
question: 'Explain: Removing a Node — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 429
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:21:13-05:00'
sources: []
---

**Why removal must keep the system balanced**

A distributed key‑value store that uses *consistent hashing* maps every object ID \(k\) to a point on a unit circle by a hash function \(h(k)\in[0,1)\).  
The ring is partitioned by nodes; each node owns the arc from its predecessor’s hash to its own.  

If we remove node \(N\) at position \(p_N\), all keys that hashed between its predecessor \(P\) and \(p_N\) must be reassigned.  
Mathematically, the probability a random key falls in this interval is exactly \(\frac{p_N-P}{1}\).  
Thus removal changes only the ownership of that fraction of keys; the rest of the ring remains untouched.  

**Why we use virtual replicas**

Without replicas, a node at a sparse spot would own a huge arc, causing hot spots.  
By giving each physical node \(R\) “virtual” positions \(\{h(N,r)\}_{r=1}^R\), the expected load per replica is \(\frac{1}{NR}\).  
When removing one replica, only its tiny arc (≈\(1/(NR)\)) of keys moves.  
Hence removal is *log‑scale* in the number of nodes: \(O(1)\) reassignment on average.

**Non‑obvious insight**

Consistent hashing is essentially a **probabilistic load balancing problem** solved by mapping to a one‑dimensional torus.  
The key trick is that *removing a node does not affect the hash function for existing keys*.  
This guarantees *stability*: the system never needs to recompute hashes, only reassign ownership of a contiguous segment.  
Thus the consistency property emerges from the geometry of the ring and the independence of the hash function—an elegant union of probability theory and spatial partitioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
