---
qid: ing_ee5bfae228__aws__local
question: 'Explain: Less Origin Load — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 347
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:16:57-05:00'
sources: []
---

**Situation & Task**  
At my previous role we ran a global e‑commerce site that shipped product images from an on‑prem origin server to millions of customers. Each image request hit the origin, causing latency spikes during flash sales and driving up bandwidth costs.

**Action**  
I owned the redesign:  
1. **Deploy an S3 bucket** as immutable storage for all image assets (Ownership).  
2. **Front it with Amazon CloudFront** (CDN) to cache content at edge locations worldwide (Customer Obsession).  
3. Configured **Cache‑Control headers** (`max-age=31536000`) and a Lambda@Edge function that rewrites URLs to serve the latest version without extra origin hits (Invent & Simplify).  
4. Enabled **Origin Shield** for an additional caching layer, reducing S3 request costs by ~70%.  
5. Monitored with CloudWatch and set up a cost‑alert on data transfer.

**Result**  
- Latency dropped from 350 ms to <80 ms (average) during peak traffic.  
- Origin hit rate fell from 30 % to <1 %, cutting bandwidth costs by **$12k/month**.  
- User satisfaction scores improved by 18 pts, directly correlating with conversion lift.

**Bar‑raiser signals**  
- Clear ownership of the end‑to‑end solution.  
- Dive deep into AWS pricing models and cache eviction policies.  
- Quantified impact on performance & cost.  
- Learned from initial misconfigurations (e.g., missing `Cache-Control`), iterating quickly—Bias for Action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
