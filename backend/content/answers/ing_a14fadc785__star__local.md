---
qid: ing_a14fadc785__star__local
question: 'Explain: Sizing a Bloom Filter — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 397
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:55:27-05:00'
sources: []
---

**Situation:** In a recent fraud‑detection project at my previous company, we had to maintain a real‑time blacklist of over 10 million merchant IDs that should be instantly flagged as high risk across our payment gateway. The system had to keep memory usage under 1 GB while ensuring less than 0.5 % false positives.

**Task:** Design and size an in‑memory Bloom filter that would hold all 10 million IDs, fit within the memory budget, and meet the required error rate.

**Action:** I first calculated the optimal number of bits (m) using  
\( m = -\frac{n \ln p}{(\ln 2)^2} \), where \( n = 10^7 \) and \( p = 0.005 \). This gave me roughly 95 million bits (~11.4 MB). I then derived the optimal hash count (k) with  
\( k = \frac{m}{n}\ln 2 \), yielding about 6 hashes. Implementing this in Go, I used Murmur3 and a split‑mix64 mix to generate the six hash indices efficiently. I benchmarked insertions and lookups on a sample dataset, confirming that memory consumption stayed at ~12 MB and lookup latency was under 1 µs.

**Result:** The Bloom filter met our constraints—memory use stayed well below 1 GB, false positives were measured at 0.48%, and we cut blacklist query time by 70% compared to a hash table lookup. I learned how the mathematical trade‑off between size, hash count, and error rate directly translates into real‑world performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
