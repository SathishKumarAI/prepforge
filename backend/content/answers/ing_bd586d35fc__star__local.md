---
qid: ing_bd586d35fc__star__local
question: 'Explain: Add a URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 342
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:49:40-05:00'
sources: []
---

**Situation** – In my last role I was tasked with scaling the click‑through analytics pipeline for a social media platform that processed over 5 million ad impressions per hour. Our deduplication step was hitting memory limits; we were using a hash set to track seen URLs, which grew too large and caused GC pauses.

**Task** – I needed to reduce memory usage by at least 70% while maintaining a false‑positive rate below 0.5 % so that duplicate clicks didn’t inflate revenue metrics.

**Action** – I designed a Bloom filter module in Go:  
1. Chose a 10 million bit array and 4 hash functions (Murmur3, Jenkins, FNV, CityHash) to balance space vs error rate.  
2. Integrated it into the ingestion microservice as a pre‑filter; URLs that passed were then stored in Redis with an expiry of 24 h.  
3. Wrote unit tests to benchmark false positives against our historical data and tuned `m` and `k`.  
4. Added a fallback path that logs suspicious hits for later analysis.

**Result** – Memory consumption dropped from ~2 GB to 400 MB, eliminating GC spikes and improving throughput by 30 %. The false‑positive rate stayed at 0.3 %, keeping revenue attribution accurate. I learned how to quantify trade‑offs between space, speed, and accuracy in real‑time systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
