---
qid: ing_ce1fdbb07e__star__local
question: 'Explain: Bloom Filters vs Related Structures — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 396
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:21:31-05:00'
sources: []
---

**Situation**  
At my previous company we built a real‑time ad‑delivery platform that had to serve millions of banner requests per second while keeping latency under 5 ms. Our cache layer was hit by duplicate user IDs and caused unnecessary database lookups, driving our read latency up from 3 ms to 6 ms during peak traffic.

**Task**  
I needed a lightweight deduplication mechanism that could quickly tell us whether a user ID had already been processed for the current ad batch, without adding significant overhead or risking false negatives.

**Action**  
I evaluated several probabilistic structures: Bloom filters, Count‑Min Sketches, and Cuckoo filters. I chose a standard Bloom filter because it offers constant‑time membership checks with a tunable false‑positive rate. Using Go’s `github.com/willf/bloom`, I allocated a 1 MiB filter (≈8 million bits) per ad campaign, set to a 0.1% false‑positive probability, and hashed each user ID with three independent 64‑bit hash functions (FNV-1a + Murmur3 + xxHash). I stored the filter in Redis as a binary blob for fast retrieval across microservices.

**Result**  
The Bloom filter reduced duplicate database queries by ~70%, cutting read latency from 6 ms to 3.5 ms under load. The false‑positive rate was negligible (0.09% observed), and memory usage stayed well below our 10 MiB per‑campaign budget. I learned that selecting the right probabilistic data structure hinges on whether you need exact counts (Count‑Min) or just membership, and that careful tuning of size and hash count keeps performance gains real without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
