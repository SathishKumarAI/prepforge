---
qid: ing_b195a3858e__fp__local
question: 'Explain: Do Not Confuse Routing with Rebalancing — Consistent Hashing |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 564
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:21:45-05:00'
sources: []
---

### Why “routing” isn’t the same as “rebalancing”

In a distributed key‑value store, **routing** means deciding *where* to send an incoming request.  
**Rebalancing** is the act of moving data between nodes when the cluster changes (e.g., a new server joins or leaves).  
The two tasks are coupled only through the *mapping function*: if routing changes, rebalancing may be needed.

---

### From load‑balance to consistent hashing

We want a mapping \(f:\text{key}\rightarrow\text{node}\) that

1. **Uniformly distributes** keys (minimizes hot spots).  
2. **Minimally changes** when the set of nodes \(N\) evolves.

Let us model keys as points on \([0,1)\) after hashing to a uniform random value \(h(k)\).  
If we place each node at a point \(p_i\in[0,1)\), then assign key \(k\) to the *next* node clockwise from \(h(k)\):

\[
f(k)=\arg\min_{i}\{(p_i-h(k)) \bmod 1\}.
\]

This is **consistent hashing**.  
Uniformity follows because each node owns an arc whose length equals its fraction of the circle; a uniform key lands in that arc with probability equal to its length.

Rebalancing cost: when a new node \(p_j\) joins, only keys whose hashes fall between the previous neighbor and \(p_j\) change owners.  
Since arcs are independent of the number of nodes, the expected fraction of moved keys is \(1/|N|\).  
Thus adding or removing one node moves only \(\approx 1/|N|\) of the data—minimal compared to naïve hashing.

---

### A non‑obvious insight

**Virtual nodes (replicas)** are often added: each physical machine hosts several points on the circle.  
This reduces variance in arc lengths, but it also creates *soft* locality: a key’s “next” node may be physically far from its previous owner even after a small cluster change.  
Therefore, consistent hashing guarantees low churn **only if** the underlying hash function preserves spatial locality (e.g., using a space‑filling curve).  
Ignoring this can lead to counterintuitive hot spots when replicas are added or removed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
