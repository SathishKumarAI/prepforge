---
qid: ing_c1a8665f56__aws__local
question: 'Explain: What CDNs Cache — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 400
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:40:58-05:00'
sources: []
---

**Situation / Task**  
I was hired to cut latency for our ML‑model inference API that served millions of requests per day. The bottleneck was the time it took to download large model binaries from S3, especially for edge workers in AWS regions far from us.

**Action**  
1. **Identify what the CDN should cache** – static artifacts: model weights, pre‑trained embeddings, and inference config files (≈ 200 MB each).  
2. **Design the cache layer** – use Amazon CloudFront with a custom origin pointing to an S3 bucket. Set *Cache Control* headers (`max-age=86400`, `immutable`) so that edge caches stay fresh for 24 h, and enable *Origin Shield* in us‑east‑1 to reduce load on S3 during burst traffic.  
3. **Integrate with the inference service** – the Lambda@Edge function rewrites requests to CloudFront URLs; if a cache miss occurs, the origin fetches from S3, and CloudFront automatically caches the response.  
4. **Monitor & iterate** – use CloudWatch metrics (Cache Hit Ratio, Origin Latency) and set an alarm when hit ratio drops below 95 %.  

**Result**  
- Cache hit ratio rose to **97 %**, reducing average request latency from **1.2 s to 350 ms**.  
- Edge‑to‑origin traffic dropped by **70 %**, cutting S3 egress costs by **$12k/month**.  

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end pipeline, dove deep into CloudFront caching behavior, quantified impact with real metrics, and learned that fine‑tuning cache headers can yield outsized performance gains without changing application code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
