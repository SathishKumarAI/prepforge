---
qid: ing_0f8622850c__aws__local
question: 'Explain: What a CDN Does — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 394
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:00:31-05:00'
sources: []
---

**What a CDN does – Amazon‑style answer**

*Leadership Principles:* **Customer Obsession** (speed & reliability for the end user) and **Ownership** (owning the entire delivery path).

**Situation / Task**  
At my last role I was asked to cut page load times for a global e‑commerce site that saw 10 M monthly visitors. The latency on non‑US regions was >400 ms, hurting conversion by ~12 %.  

**Action**  
I designed an edge‑first CDN using **Amazon CloudFront** + **AWS Global Accelerator**.  
* **Cache strategy:** Edge caching with a TTL of 24 h for static assets and dynamic API responses with a *stale-while-revalidate* policy to keep fresh data.  
* **Origin:** Multi‑AZ S3 buckets + an Auto Scaling EC2 fleet behind ALB, backed by RDS Aurora Serverless (auto‑scaling DB).  
* **Security:** OAI for CloudFront → private S3, signed URLs for premium content, WAF with rate limits.  
* **Monitoring:** CloudWatch metrics & Lambda@Edge to rewrite URLs and inject cache headers.

**Result**  
- 80 % of traffic served from edge locations; latency dropped to <50 ms globally.  
- Conversion increased by 18 %, revenue up $1.2 M/month.  
- Cost reduced by 30 % (S3 + CloudFront vs on‑prem CDN).  

**Bar‑raiser focus** – I demonstrated ownership of end‑to‑end performance, dove deep into cache hit ratios and cost models, quantified the impact, and learned that early A/B testing of TTLs prevents over‑caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
