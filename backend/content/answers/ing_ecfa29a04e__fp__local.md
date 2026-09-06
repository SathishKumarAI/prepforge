---
qid: ing_ecfa29a04e__fp__local
question: 'Explain: Query a Present URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 565
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:23:19-05:00'
sources: []
---

**Why a Bloom filter is the natural choice for “is this URL already stored?”**

1. **The fundamental problem**  
   In a URL‑shortening or caching service we must decide, *in O(1)* time and with minimal memory, whether an incoming query string has appeared before. The data structure must support millions of distinct URLs while fitting into a few megabytes.

2. **Why hash tables fall short**  
   A plain hash table gives exact membership tests but costs *O(1) per lookup* plus the storage of each key (≈ 40 bytes/URL). Scaling to billions of URLs becomes infeasible.

3. **Enter Bloom filters: a probabilistic set**  
   - Use *k* independent hash functions \(h_1,\dots,h_k\) that map a URL to positions in an *m*-bit array initialized to 0.  
   - To insert, set all k bits to 1.  
   - To query, read the k bits; if any is 0 → “definitely not present”; otherwise “probably present.”  

4. **Optimality from information theory**  
   The false‑positive rate \(p\) satisfies  
   \[
   p = \left(1-e^{-kn/m}\right)^k
   \]
   For fixed *m* and target *p*, the optimal number of hashes is \(k = (m/n)\ln 2\). This choice minimizes the information wasted per stored element: each URL contributes only a few bits, matching the lower bound for encoding a set of size *n* in *m* bits.

5. **Why it “must” work**  
   The filter’s design is forced by the pigeonhole principle: with fewer than *n* distinct hash values we cannot represent all possible URLs uniquely. Bloom filters accept an irreducible collision probability, trading a tiny false‑positive rate for massive space savings—exactly what system designers need.

6. **Non‑obvious insight**  
   A Bloom filter’s *false positives are independent of the query order*. Because each lookup only probes the same fixed set of bits, the probability that two different URLs collide on all k positions is the same regardless of how many times we have queried them before. This property guarantees predictable latency even under bursty traffic—something most practitioners overlook when choosing probabilistic structures.

In short, Bloom filters solve the “membership query” problem with asymptotically optimal space and constant time, rooted in entropy minimization, while offering a bounded, order‑independent false‑positive rate that aligns perfectly with high‑throughput system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
