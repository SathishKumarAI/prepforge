---
qid: ing_35947d7105__star__local
question: 'Explain: False Positives — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 369
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:15:27-05:00'
sources: []
---

**Situation:** At my previous startup we built a real‑time ad fraud detection pipeline that processed ~2 M clicks per minute. Our fraud engine flagged suspicious users by checking their device IDs against a blacklist stored in a Bloom filter for speed.

**Task:** The engineering team noticed the system was generating an alarming number of false positives—legitimate users were being blocked, hurting revenue and user experience. We had to reduce the FP rate while keeping lookup latency under 2 ms and memory usage below 200 MB.

**Action:** I first profiled the Bloom filter parameters: size, hash functions, and the expected false‑positive probability. Using the standard formula \(m = -\frac{n \ln p}{(\ln 2)^2}\), I recalculated a smaller bit array (from 512 M to 256 M bits) and increased the number of hash functions from 3 to 5, which lowered the theoretical FP rate from 1.4% to 0.4%. Next, I introduced a two‑tiered filter: a lightweight Bloom filter for hot IPs and a heavier probabilistic data structure (Cuckoo filter) for cold entries. Finally, I added an anomaly score threshold that allowed borderline cases to be re‑checked by the downstream fraud model before blocking.

**Result:** The false‑positive rate dropped from 1.4% to 0.35%, freeing ~3 k legitimate impressions per minute and boosting revenue by roughly $12K/month. Memory usage stayed under 190 MB, and lookup latency remained <1.8 ms. I learned that careful parameter tuning and a hybrid filter strategy can dramatically improve accuracy without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
