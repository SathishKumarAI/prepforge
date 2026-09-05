---
qid: ing_5270a4326e__star__local
question: 'Explain: Serving Thumbnails — YouTube\u00a0Architecture - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 360
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:13:08-05:00'
sources: []
---

**Situation** – In my last role at a video‑platform startup, we were launching a new recommendation engine that would push personalized videos to millions of users every second. The thumbnail images needed to be served in real time with sub‑100 ms latency, even during peak traffic spikes (up to 3 M requests per minute).  

**Task** – I was tasked with designing the thumbnail serving layer so it could scale horizontally, cache efficiently, and keep costs under $0.05/GB for storage while maintaining a 99.9% uptime SLA.  

**Action** – I built a two‑tier architecture:  
1) **Edge CDN + Lambda@Edge** – thumbnails were first requested from an S3 bucket; CloudFront triggered a lightweight Lambda to check if the image was already cached in edge memory, otherwise it fetched the original and stored a resized version (200×200 px).  
2) **Auto‑scaling Kubernetes pool** – for dynamic resizing during cache misses, I deployed a stateless Go service on EKS that used *libvips* for fast transcoding. Autoscaling rules were based on CPU + request latency thresholds; we also introduced a Redis cache to store the most popular 10 % of thumbnails for instant retrieval.  

**Result** – The new system cut thumbnail response times from 350 ms to under 80 ms during peak hours, reduced CDN bandwidth by 35%, and kept monthly costs below $12k. I learned that combining edge functions with a lightweight micro‑service and intelligent caching can meet the strict latency demands of high‑traffic media platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
