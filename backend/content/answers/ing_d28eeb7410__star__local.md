---
qid: ing_d28eeb7410__star__local
question: 'Explain: Securing Your Content — Amazon S3 + Amazon CloudFront: A Match
  Made in the Cloud | Networking & Content Delivery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 352
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:30:32-05:00'
sources: []
---

**Situation**  
At my last role, our marketing team needed to serve a new interactive infographic across the globe. The file was 15 MB and we expected 200k daily hits during the launch week. A security breach would mean exposing proprietary data and losing brand trust.

**Task**  
I had to design a delivery pipeline that (1) protected the content from unauthorized access, (2) provided low latency worldwide, and (3) kept costs under $5 K for the month.

**Action**  
I stored the infographic in an S3 bucket with *block public access* enabled and applied a bucket policy granting read permission only to CloudFront. I created a signed URL distribution in CloudFront, enabling *Origin Access Identity* so that only CloudFront could fetch from S3. To enforce HTTPS everywhere, I attached an ACM certificate and set the viewer protocol policy to “Redirect HTTP to HTTPS.” For fine‑grained access, I used CloudFront Functions to inject custom headers that validated a JWT token before forwarding requests. Finally, I enabled *WAF* rules to block known bad IP ranges and logged all access via S3 event notifications.

**Result**  
The launch went live without any unauthorized downloads; we logged 215k hits with an average latency of 110 ms globally. CloudFront’s caching cut the S3 request cost by 78%, keeping monthly spend at $4,200. I learned how to combine IAM, signed URLs, and edge computing to create a secure, scalable content delivery system that meets strict compliance needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
