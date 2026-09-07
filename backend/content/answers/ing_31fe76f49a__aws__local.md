---
qid: ing_31fe76f49a__aws__local
question: 'Explain: Cache Keys — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 387
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:17:59-05:00'
sources: []
---

**Situation / Task**  
While leading a mobile‑app team at a fintech startup, we noticed that user‑specific pricing pages were loading 2–3 × slower during peak hours. The CDN cache was invalidating too aggressively because our cache keys contained dynamic query strings (e.g., `?userId=123`). I owned the performance spike and drove a redesign of our cache‑key strategy.

**Action**  
1. **Dive Deep & Ownership** – I profiled CDN logs, identified that 60 % of hits were stale due to user‑specific keys.  
2. **Design** – Implemented *cache‑key segregation*:  
   - Static assets (`/assets/*`) → key: `cdn/static/<hash>` (immutable).  
   - Pricing pages → key: `cdn/pricing/<productId>`.  
   User context is passed via signed cookies so the CDN can still enforce per‑user auth without bloating keys.  
3. **AWS Services** – Amazon CloudFront + Lambda@Edge to rewrite URLs on edge, and DynamoDB for quick product‑price lookups.  
4. **Bias for Action** – Deployed a blue/green CloudFront distribution; rolled out in 12 h with zero downtime.

**Result**  
- Cache hit ratio rose from 35 % to 78 %.  
- Page load time dropped by **73 % (from 2.1 s to 0.6 s)**, improving NPS by +5 points.  
- Cost per request fell 40 %, saving ~$12k/month on CloudFront data transfer.

**Learnings** – A disciplined cache‑key schema can unlock massive performance gains; always validate with real traffic metrics before scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
