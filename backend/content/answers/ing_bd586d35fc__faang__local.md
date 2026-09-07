---
qid: ing_bd586d35fc__faang__local
question: 'Explain: Add a URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 493
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:02:46-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to explain how a *Bloom filter* works and why it’s useful in large‑scale systems (e.g., URL deduplication). Assume we’re working with millions of URLs, limited memory, and can tolerate false positives but not false negatives.

**Approach**  
1. Define the data structure.  
2. Explain hashing and bit array mechanics.  
3. Discuss insertion & query operations.  
4. Highlight trade‑offs (size vs. false‑positive rate).  
5. Show a concrete system use case (e.g., caching, duplicate URL detection).

**Depth**  
A Bloom filter is a probabilistic set membership test. It consists of a bit array **B** of *m* bits initialized to 0 and *k* independent hash functions \(h_1 … h_k\).  

- **Insert URL u**: compute all hashes, set the corresponding bits in B to 1.  
- **Query u**: check if all those k bits are 1; if yes, report “probably present” (may be a false positive), else “definitely absent.”  

The false‑positive probability ≈ \((1 - e^{-kn/m})^k\). For given *m* and desired error ε, we choose \(k = (m/n)\ln 2\).  
Space is O(m) bits; operations are O(k) time. No deletions unless using a counting Bloom filter.

**Edge Cases**  
- Too few bits → high false‑positive rate.  
- Hash collisions or poor hash functions degrade accuracy.  
- Need to handle deletions (counting Bloom).  
- Very dynamic data sets may require periodic rebuilds.

**Optimize & Communicate**  
To reduce memory, use *compressed* or *scalable* Bloom filters that grow as the set grows. For URLs, a 1‑bit per hash is enough; we can pack bits into 64‑bit words and vectorize hash computations. Explain to interviewers: “We trade a tiny chance of misclassifying a new URL (false positive) for O(1) insertion/query and sub‑kilobyte memory footprint—ideal for CDN edge caches or link deduplication pipelines.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
