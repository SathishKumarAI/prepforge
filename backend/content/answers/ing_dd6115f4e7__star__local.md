---
qid: ing_dd6115f4e7__star__local
question: 'Explain: Tracking Performance — Amazon S3 + Amazon CloudFront: A Match
  Made in the Cloud | Networking & Content Delivery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 337
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:50:53-05:00'
sources: []
---

**Situation** – At my previous role, we launched a new video‑on‑demand feature that streamed user‑generated content stored in Amazon S3. After launch, our analytics showed a steady drop in playback quality after the first 30 minutes, and latency spikes during peak traffic.

**Task** – I was tasked with diagnosing the bottleneck and ensuring consistent low‑latency delivery across all regions while keeping costs under budget.

**Action** – First, I instrumented CloudWatch metrics on S3 transfer acceleration and set up a custom Lambda@Edge function to log cache hit ratios per edge location. Using Amazon Kinesis Data Streams, we ingested real‑time latency data from the CDN. With Grafana dashboards, I visualized trends and identified that our objects were not being cached effectively due to long TTLs on dynamic metadata. I reconfigured CloudFront behaviors: set a 1‑hour TTL for static assets, enabled query string forwarding only for signed URLs, and added S3 object versioning to force cache invalidation on updates. Finally, I automated the deployment of these settings via Terraform.

**Result** – Cache hit ratio jumped from 68 % to 92 %, reducing average latency by 35 ms per request and cutting our outbound data transfer costs by ~18 %. The project also earned us a “Performance Excellence” badge in our internal quarterly review. I learned how fine‑tuning CloudFront cache policies can dramatically improve user experience while controlling AWS spend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
