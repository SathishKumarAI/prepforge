---
qid: ing_5e56aceee7__star__local
question: 'Explain: Hash Functions — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 354
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:36:49-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with scaling the real‑time ad attribution engine. The upstream click stream contained billions of events per day, and we needed to guarantee that each unique user saw a particular creative no more than once in a rolling 24‑hour window.

**Task:**  
Design an efficient deduplication layer that could run at >10 k events/sec with sub‑millisecond latency, while keeping memory usage below 2 GB on the edge servers.

**Action:**  
I proposed a Bloom filter per creative. Using a 1‑bit array of size 8 M and four independent hash functions (FNV‑1a + Murmur3 variants), we achieved a false positive rate <0.01%. I implemented the filter in Rust, leveraging SIMD to hash batches of user IDs in parallel. To handle the sliding window, each day’s Bloom filter was stored in an LRU cache; once 24 h elapsed we swapped it out and flushed the old bit array to disk as a compressed bitmap. We added a lightweight counter per bucket to support approximate cardinality queries for monitoring.

**Result:**  
The system processed 12 k events/sec with <1.2 ms average latency, using only 1.8 GB RAM. False positives were measured at 0.009% in production, keeping the user experience intact. I learned that careful choice of hash functions and bit‑array sizing can turn a theoretical construct into a production‑grade deduplication engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
