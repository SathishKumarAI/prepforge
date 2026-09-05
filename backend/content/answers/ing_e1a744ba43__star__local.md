---
qid: ing_e1a744ba43__star__local
question: 'Explain: Object Storage & CDN — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 317
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:00:07-05:00'
sources: []
---

**Situation** – In my senior project I was tasked with building a prototype of an image‑heavy social platform similar to Instagram, where users could upload millions of photos and videos that needed instant global access. The team had to decide how to store media efficiently and deliver it quickly worldwide.

**Task** – My goal was to design a scalable object storage layer and a CDN strategy that kept latency under 200 ms for 90 % of requests while keeping storage costs below $0.02/GB/month.

**Action** – I chose S3‑compatible object storage (MinIO) for durability, using multipart uploads and lifecycle policies to move infrequently accessed media to Glacier for cost savings. For the CDN, I integrated CloudFront with edge caching and signed URLs so that each user’s content was cached in the nearest edge location. I implemented a cache‑invalidation strategy triggered by user edits: a lightweight Lambda function updated metadata and purged stale objects from edge caches. To handle write amplification, I added a read‑through cache (Redis) for hot thumbnails.

**Result** – The prototype handled 500 k concurrent uploads with an average retrieval time of 180 ms globally. Storage costs dropped to $0.015/GB/month, and cache hit rates climbed to 92 %. I learned how object storage’s immutability and CDN’s edge caching complement each other for high‑throughput media services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
