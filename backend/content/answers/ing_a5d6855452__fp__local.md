---
qid: ing_a5d6855452__fp__local
question: 'Explain: Collision Resolution Strategies — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 466
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:58:21-05:00'
sources: []
---

**Collision Resolution for a URL‑Shortener**

A shortener maps an *original* URL \(U\) to a fixed‑length key \(K\).  
The fundamental problem is that the mapping space \(|\mathcal{K}|\) (e.g., 62⁶ ≈ 56 billion) is finite, while the universe of URLs is unbounded. Thus two distinct URLs can generate the same key—**a collision**.  
To keep the service reliable we must guarantee that every lookup returns the correct long URL, which implies a *bijective* mapping between stored keys and URLs.

The standard solution is **open addressing with double hashing** (or separate chaining).  

1. **Primary hash \(h_1(U)\)** selects an initial bucket.  
2. If occupied by a different key, compute a *step size* from a second hash \(h_2(U)\) that is coprime to the table size.  
3. Probe \((h_1 + i\cdot h_2) \bmod |\mathcal{K}|\) for \(i=0,1,\dots\) until an empty slot or a matching key is found.

Why this works:  
- The step size guarantees traversal of the entire table (since it’s coprime).  
- The two hashes are derived from the same input, so the pair \((h_1,h_2)\) uniquely identifies a probing sequence—no two distinct URLs can follow the exact same infinite probe path.  
- Load factor < 0.7 keeps expected probes \(O(1)\), preserving latency.

**Non‑obvious insight:**  
Because the step size depends on the key, *different keys may share the same primary bucket but still never collide in the probing sequence*. This property lets us use a single hash table (no auxiliary collision map) while keeping retrieval deterministic. In practice it means we can shrink the alphabet or length of \(K\) without sacrificing correctness, simply by tuning the load factor and hash functions—an elegant blend of combinatorics and probability that many designers overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
