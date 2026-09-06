---
qid: ing_b620a5f884__fp__local
question: 'Explain: Hashing: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 429
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:31:21-05:00'
sources: []
---

**Hashing – the “perfect‑hash” design problem**

At its core, hashing solves a *combinatorial load‑balancing* question:  
given \(n\) keys and a table of size \(m\), how can we map each key to an index so that
(1) collisions are rare, (2) the mapping is fast, and (3) the distribution is *uniform*?  

The first principle is **information‑theoretic efficiency**.  
A hash function \(h: K \rightarrow [0,m-1]\) must compress arbitrary key data into a short
code while preserving enough entropy that two distinct keys rarely collide.  
If we treat the key space as a random variable, the optimal \(h\) is one that maximizes
the *Shannon entropy* of the output distribution—exactly what universal hash families approximate.

From a geometric standpoint, hashing turns a high‑dimensional data point into a single coordinate on a 1‑D lattice.  
The “deep” insight: *good hashing is equivalent to a random projection that preserves distances in expectation*.  
This explains why linear congruential functions (e.g., \(h(k)=((Ak+B)\bmod P)\bmod m\)) work well: they perform a pseudorandom rotation of the key space before truncation.

A non‑obvious nuance is that **collision resolution strategy shapes the hash function’s requirements**.  
With *open addressing*, we need the probe sequence to be a permutation of all table slots; hence, using a second independent hash for step size (double hashing) guarantees this without extra memory.  
In contrast, *separate chaining* tolerates arbitrary collision patterns but incurs extra pointer overhead.

Thus, hashing is not just “pick an index”; it’s an optimization problem balancing entropy, geometry, and the chosen resolution policy to achieve average‑case \(O(1)\) lookup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
