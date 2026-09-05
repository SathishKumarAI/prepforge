---
qid: ing_dc9b1ed2e9__star__local
question: 'Explain: HTTP Caching Headers — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 376
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:49:07-05:00'
sources: []
---

**Situation:** In my last role at a media startup, we launched a global video platform that was hitting 8 M daily page views. The first week after launch, our origin servers were throttling under heavy traffic, and the latency for users in Asia rose to 350 ms.

**Task:** I had to design a CDN‑based caching strategy that would reduce load on the origin, bring down global latency below 100 ms, and support dynamic personalization (e.g., user‑specific thumbnails) without breaking SEO or violating GDPR.

**Action:** I selected Cloudflare as our CDN provider and configured several HTTP cache headers:  
- **Cache-Control: public, max-age=86400, stale-while-revalidate=3600** for static assets;  
- **ETag & Last‑Modified** on user‑profile images so conditional GETs avoided full downloads.  
For personalized content I used **Vary: Cookie** with a short **max-age=300**, and implemented a signed JWT in the `Cache-Key` header to let Cloudflare cache per‑user variations securely. I set up edge functions to rewrite URLs for GDPR compliance, stripping PII before caching. Finally, I monitored cache hit ratios via CDN analytics.

**Result:** Within two weeks, origin request rates dropped by 65 %, global average latency fell from 350 ms to 90 ms, and the CDN hit ratio climbed to 92 %. The project also reduced our monthly bandwidth cost by ~$15k. This experience taught me how precise header tuning can balance freshness, privacy, and performance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
