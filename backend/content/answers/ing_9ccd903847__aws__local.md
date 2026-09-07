---
qid: ing_9ccd903847__aws__local
question: 'Explain: Content Delivery Network (CDN) — Cdns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 508
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:19:21-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign a global e‑commerce site that served product images and videos. Users in Asia were experiencing >1 s latency and a 12 % cart abandonment spike, while the current on‑prem CDN cost $250k/month with limited scalability.

**Action**  
*Customer Obsession & Ownership*: I mapped real user flows and identified peak traffic zones.  
*Dive Deep*: I benchmarked existing edge caching vs. AWS CloudFront + S3.  
- **Architecture**:  
  - **Origin**: Amazon S3 (immutable media, versioning).  
  - **CDN**: CloudFront with geo‑based routing, 100 % cache hit ratio target.  
  - **Edge logic**: Lambda@Edge to rewrite URLs for A/B testing and inject security headers.  
  - **Monitoring**: Amazon CloudWatch + AWS X-Ray to trace latency per edge location.  
- **Scalability & Availability**: 24/7 global edge network, automatic scaling; high availability via S3’s durability (11 9s).  
- **Cost**: Shifted from $250k/month on‑prem to ~$60k/month with pay‑as‑you‑go data transfer and request pricing.  
*Bias for Action*: Deployed in 48 hrs, rolled out incrementally using CloudFront invalidations.

**Result**  
Within two weeks post‑deployment:  
- **Latency dropped** from 1.2 s to <300 ms globally (average).  
- **Cart abandonment fell** by 18 % (from 12 % to 9.8 %).  
- **Cost savings** of $190k/year, freeing budget for ML personalization features.

**Bar‑raiser check**  
I owned the full lifecycle—requirements → design → deployment → metrics. I dived deep into latency sources and quantified impact. I learned that edge cache TTL tuning was critical; after initial 5 min TTL we increased to 24 h, halving invalidation traffic. This iterative learning loop exemplifies Amazon’s “Learn & Be Curious.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
