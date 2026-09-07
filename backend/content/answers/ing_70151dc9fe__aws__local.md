---
qid: ing_70151dc9fe__aws__local
question: 'Explain: Dropbox system design | Google drive system design | System design
  file share and upload'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 468
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:38:35-05:00'
sources: []
---

**Situation & Task (S)**  
I was asked to design a cloud‑based file‑sharing service similar to Dropbox/Google Drive that could support millions of users uploading and sharing 100 GB files per day while keeping latency under 200 ms for read requests.

**Action (A)**  
1. **Storage layer** – Use Amazon S3 for durability and cost efficiency; enable multipart upload for large files and S3 Transfer Acceleration for global uploads.  
2. **Metadata service** – Deploy DynamoDB with a composite key `(userId, filePath)` to keep metadata (size, ETag, ACL) in <5 ms.  
3. **API gateway & compute** – Front‑end via Amazon API Gateway + Lambda (or Fargate for heavy logic) to enforce IAM‑based access and rate‑limit uploads.  
4. **Sync engine** – Run a Kinesis Data Stream that feeds into an EC2 autoscaling group running a Spark job to recompute shared links and permissions, ensuring eventual consistency.  
5. **Caching & CDN** – Use CloudFront with edge caching for public shares; Edge Lambda@Edge to validate tokens on the fly.

**Result (R)**  
- 99.9 % request latency <200 ms, 10× throughput compared to legacy system.  
- Storage cost reduced by 35 % using S3 Intelligent‑Tiering and lifecycle policies.  
- Zero data loss after a simulated outage: DynamoDB global tables recovered in under 30 s.

**Leadership Principles Highlighted**  
*Customer Obsession*: Built a user‑centric API with granular permissions.  
*Ownership & Dive Deep*: Handled failure scenarios, tuned Kinesis back‑pressure, and iterated on the cache invalidation strategy.  

**Bar‑raiser Takeaway** – Demonstrated ownership by anticipating edge cases (large uploads, shared link expiration), quantified impact through real metrics, and learned from a failed caching rollout that required redesigning the key strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
