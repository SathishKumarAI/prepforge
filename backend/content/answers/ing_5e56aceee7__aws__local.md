---
qid: ing_5e56aceee7__aws__local
question: 'Explain: Hash Functions — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 435
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:59:06-05:00'
sources: []
---

**Situation & Task** – I led the redesign of our real‑time fraud detection pipeline for a global payments platform. The system had to check every transaction against a catalog of *1 billion* known bad accounts, but memory constraints on edge devices required a probabilistic lookup that never missed true positives while keeping false‑positive rates below 0.5 %.  

**Action – Technical & Design**  
- Chose a **Bloom filter** as the core data structure: space‑efficient, O(1) lookups.  
- Generated filters nightly in an **AWS Glue** job, hashing each bad account with *k = 7* independent hash functions (using Murmur3 + SHA‑256).  
- Serialized each filter to **S3** and cached the most recent one in a **Redis‑compatible ElastiCache cluster** for sub‑µs access.  
- Deployed an **AWS Lambda** layer that loads the filter on cold start, then serves lookups via API Gateway.  
- Employed **CloudWatch Alarms** to trigger re‑generation if false‑positive rate (measured against a validation set) exceeded 0.5 %.  

**Result** – The new system reduced memory usage from 16 GB to 200 MB per device, cut lookup latency by 70 % (from 10 ms to 3 ms), and maintained <0.4 % false positives in production—meeting the SLA for 99.9 % availability while saving $250k annually on compute costs.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Ensured transaction latency stayed below user‑expected thresholds.  
- **Ownership & Dive Deep** – Built and continuously tuned the Bloom filter pipeline, measuring every metric and iterating on hash functions until performance goals were met.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
