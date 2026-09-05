---
qid: ing_d7bd89479f__star__local
question: 'Explain: 4.4 Media Storage — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 461
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:40:23-05:00'
sources: []
---

**Situation**  
When I joined the product team at a startup that was scaling from 10 k to 1 M daily active users, we had to design a media storage layer for a photo‑sharing app similar to Instagram. The existing system could only handle a few hundred uploads per second and stored all images in a single MySQL table, leading to slow query times and frequent timeouts.

**Task**  
I was tasked with architecting a scalable, cost‑effective media backend that could support 10 k uploads/sec, deliver images with <200 ms latency, and keep storage costs below $0.02 per GB/month while ensuring high availability and durability.

**Action**  
1. I broke the system into three layers: **Upload API**, **Processing Queue**, and **Storage Service**.  
2. For upload, I used a load‑balanced Nginx front end that streamed multipart uploads directly to an S3 bucket via presigned URLs, bypassing our servers.  
3. Each image triggers an SNS event that pushes a job to an SQS queue; Lambda functions process the images (resize, watermark) and store multiple variants in S3 with lifecycle policies.  
4. I added DynamoDB for metadata (image IDs, user IDs, timestamps) and configured it with a global secondary index on `user_id` for quick feed retrieval.  
5. To reduce costs, I enabled S3 Intelligent Tiering and set up cross‑region replication to a cheaper storage class after 30 days.  
6. Finally, I implemented CloudFront caching with signed URLs and edge‑optimized origins to serve images globally.

**Result**  
The new architecture handled 12 k uploads/sec with <150 ms response time for the feed, reduced S3 storage costs by 35% through tiering, and cut API latency from 1.2 s to 0.18 s. I learned that separating upload, processing, and serving layers not only simplifies scaling but also keeps cost under control while meeting strict performance SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
