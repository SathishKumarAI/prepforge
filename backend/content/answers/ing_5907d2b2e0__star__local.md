---
qid: ing_5907d2b2e0__star__local
question: 'Explain: Summary — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 357
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:25:39-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time fraud detection pipeline for a payment gateway that processed over 50 k transactions per second. The existing blacklist lookup used a Redis set; at peak load it caused cache misses and latency spikes, pushing our SLA from 10 ms to 200 ms.

**Task** – I needed a fast, memory‑efficient way to pre‑filter almost all non‑fraudulent requests before hitting the heavier scoring engine, while keeping false positives below 1%.

**Action** – I designed a Bloom filter layer in Go. Using HyperLogLog for cardinality estimation, I sized the bit array to 10 M bits and chose two independent hash functions (FNV-1a + Murmur3) to achieve <0.8% false positive rate given our traffic volume. The filter was populated from nightly batch loads of known bad account IDs and updated in real time via a Kafka consumer that applied add/delete operations atomically with a lightweight write‑back cache. I also built an eviction policy based on LRU timestamps to keep the filter fresh for accounts flagged only once per day.

**Result** – The Bloom filter reduced expensive database lookups by 92%, cutting average latency from 200 ms to 12 ms and keeping our SLA intact. Memory usage dropped from 1.2 GB in Redis to just 1.25 MB, freeing resources for other services. I learned how probabilistic data structures can dramatically improve system throughput when combined with careful sizing and update strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
