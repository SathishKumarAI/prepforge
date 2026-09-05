---
qid: ing_74fb093ed3__star__local
question: 'Explain: ⭐ Amazon S3 + Amazon CloudFront: A Match Made in the Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 343
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:28:40-05:00'
sources: []
---

**Situation** – In my last role I was tasked with deploying a recommendation engine that served real‑time content to over 50 k users per minute. The model outputs were stored as 1 GB Parquet files in an S3 bucket, and our latency SLA required sub‑200 ms fetch times for any user request.

**Task** – I had to reduce the data retrieval time from S3’s standard read latency while keeping cost predictable, all without changing the underlying storage format or adding a caching layer on EC2.

**Action** – I configured CloudFront as a CDN fronting the S3 bucket, using origin access identity (OAI) for secure access. I set an 80 % cache hit ratio by enabling query string forwarding only for the model version parameter and added a Lambda@Edge function to rewrite URLs into signed paths that expire after 24 h. I also tuned CloudFront’s minimum TTL to 3600 s, which aligned with our model retraining cadence. Finally, I monitored metrics in CloudWatch and adjusted the cache policy to balance freshness versus hit rate.

**Result** – Latency dropped from an average of 1.2 s on S3 to 110 ms via CloudFront, achieving a 90 % reduction. Cost per GB transferred fell by ~35 %, and we met our SLA with room for scaling. I learned how CDN edge caching can be leveraged as a lightweight, cost‑effective layer for ML artifact delivery in the cloud.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
