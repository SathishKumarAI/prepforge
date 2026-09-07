---
qid: ing_5907d2b2e0__faang__local
question: 'Explain: Summary — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 487
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:10:36-05:00'
sources: []
---

**Bloom Filters – System‑Design Overview**

| Step | What I’d say |
|------|--------------|
| **Clarify** | *Problem:* We need a probabilistic data structure that answers “has this element ever been inserted?” with sub‑1 % false positives, constant time, minimal memory.  Assume we can afford a small false‑positive rate (e.g., 0.1%) and the set size is known or bounded. |
| **Approach** | • Pick optimal bit array size *m* and hash count *k* using formulas: <br> `m = -(n ln p)/(ln²2)` , `k = (m/n) ln 2`. <br>• Store bits in a compact bitmap; use *k* independent hash functions or double hashing. <br>• Insert by setting the *k* bits, query by checking them. |
| **Depth** | • Time: O(k)=O(1). <br>• Space: `m` bits ≈ 10 bits per element for 0.1% FP. <br>• False‑positive probability: `p = (1 – e^{-kn/m})^k`. <br>• Trade‑off: More *k* → faster but more memory; fewer *k* → higher FP. |
| **Edge Cases** | • Growing beyond expected size inflates FP; need rehash or resizable Bloom filter. <br>• Deletion isn’t supported; use counting Bloom for that. <br>• Hash collisions in a small table lead to over‑inflated bits. |
| **Optimize & Communicate** | • Use MurmurHash2/3 for speed and low collision. <br>• Store bitmap in CPU cache lines to reduce latency. <br>• If we need deletions, switch to counting Bloom (4‑bit counters) at cost of 4× memory. <br>Explain that Bloom filters are perfect for cache‑friendly “may‑be” checks before hitting a slow backend. |

*Result:* A succinct, constant‑time membership test with tunable false‑positive rate and predictable space usage—exactly what large systems (e.g., URL filtering, caching) need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
