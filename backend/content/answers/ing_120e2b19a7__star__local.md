---
qid: ing_120e2b19a7__star__local
question: 'Explain: Limitations — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 364
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:04:46-05:00'
sources: []
---

**Situation:**  
In a high‑traffic recommendation engine at my previous company we had to serve real‑time ad eligibility checks for over 15 million users per day. The team relied on a Bloom filter in Redis to quickly reject users who had already seen an ad, aiming to cut down database lookups.

**Task:**  
I was asked to evaluate the Bloom filter’s effectiveness and identify any hidden pitfalls that could affect precision or scalability under peak load.

**Action:**  
I ran a series of stress tests simulating 1 million insertions per second while varying the false‑positive rate (FPR) from 0.01% up to 5%. I measured memory consumption, CPU overhead for hash functions, and impact on downstream cache misses. I discovered that at an FPR below 1%, we needed a 512 MB bitmap—exceeding our Redis instance limits—and the hash calculations added a 2 ms latency spike during traffic surges. Additionally, I noted that Bloom filters cannot delete entries, causing stale data to accumulate and artificially inflate false positives over time.

**Result:**  
I proposed switching to a Counting Bloom filter with periodic compaction, which reduced memory usage by ~30% and maintained the same FPR while allowing deletions. After deployment, ad‑eligibility latency dropped from 25 ms to 12 ms, and our cache hit ratio improved by 8%. I learned that understanding the trade‑offs—memory vs. false positives vs. mutability—is critical when integrating probabilistic data structures into a production system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
