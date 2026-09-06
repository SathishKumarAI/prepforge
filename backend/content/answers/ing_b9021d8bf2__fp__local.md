---
qid: ing_b9021d8bf2__fp__local
question: 'Explain: Summary — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 347
total_tokens: 518
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:37:17-05:00'
sources: []
---

**Consistent hashing – why it exists and how it works**

Suppose a distributed key‑value store has *N* nodes that each hold a contiguous segment of the key space \([0,1)\).  
When a new node joins or an existing one leaves, we would like to reassign only a small fraction of keys so that the system remains stable.  
The fundamental problem is *load balancing with minimal churn*.  

Consistent hashing solves this by mapping both keys and nodes onto the same circle (the “hash ring”) using a uniform hash function \(h(\cdot)\).  
A key hashes to a point on the ring; it is stored on the first node encountered clockwise.  
When a node joins, only the keys that fall between its predecessor and itself need migration—at most \(\frac{1}{N+1}\) of the total.  
Similarly, when a node leaves, its successor absorbs its range, again affecting only \(\frac{1}{N-1}\).  

This construction is essentially a *minimax* solution to the load‑balancing problem: each key goes to the nearest available node in one direction, guaranteeing that no key moves more than necessary.  
The deeper insight often missed is that consistent hashing is an instance of **circular convolution** in probability space; the uniform hash function ensures that expected loads are exactly equal, and variance shrinks as \(\mathcal{O}(1/\sqrt{N})\).  
Thus, consistent hashing turns a combinatorial redistribution problem into a simple geometric one with provably minimal churn.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
