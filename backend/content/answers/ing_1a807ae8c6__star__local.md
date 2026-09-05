---
qid: ing_1a807ae8c6__star__local
question: 'Explain: Push CDN Use-Case: — tech-prep-jeremy.io/systems-design/topics/cdns.md
  at master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 275
output_tokens: 347
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:22:32-05:00'
sources: []
---

**Situation**  
I was working on a new recommendation engine for an e‑commerce platform that served personalized product images to millions of users worldwide. The latency from the image server to the browser averaged 350 ms, which hurt conversion rates during flash sales.

**Task**  
Reduce image load times to under 80 ms globally while keeping the cache fresh when a new promotion launched every two weeks.

**Action**  
I chose a push‑based CDN strategy. First, I built a microservice that listened for “image updated” events from our catalog database and automatically generated signed URLs for each asset. Every time an image changed, the service published a message to Kafka; downstream workers pulled the message, fetched the new image from S3, performed on‑the‑fly resizing for multiple breakpoints, and pushed the processed files directly to CloudFront via its APIs (using AWS SDK). I also implemented a short TTL of 12 hours so that stale content would be refreshed before the next promotion. To monitor freshness, I added a Lambda that ran every hour to compare hashes between origin and edge caches.

**Result**  
Image load times dropped from 350 ms to 75 ms on average, boosting conversion by 4% during high‑traffic events. The push CDN also cut bandwidth costs by 30% because the CDN only cached assets when they were actually needed. I learned that automating cache invalidation with a message‑driven pipeline can give you both low latency and tight freshness guarantees in ML‑heavy, content‑rich systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
