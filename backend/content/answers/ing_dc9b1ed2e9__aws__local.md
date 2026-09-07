---
qid: ing_dc9b1ed2e9__aws__local
question: 'Explain: HTTP Caching Headers — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 438
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:37:51-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign a media‑heavy web app that served millions of video thumbnails and static assets worldwide. The product team complained that page load times were > 4 s in Asia and the CDN cache hit ratio dropped from 92 % to 70 %, hurting user engagement (Cohort retention fell 12 %).  

**Action – Design**  
1. **Cache‑control strategy**:  
   * `public, max-age=604800` for immutable assets (images, JS).  
   * `private, no-cache, must-revalidate` for personalized pages.  
2. **CDN integration**: Deployed Amazon CloudFront with edge Lambda@Edge to rewrite URLs, strip query strings, and add ETag headers for incremental updates.  
3. **Versioning & invalidation**: Bumped content‑hash in filenames; used CloudFront’s *Cache Policy* to keep 1 year TTL for static assets, eliminating costly manual invalidations.  
4. **Monitoring**: Configured CloudWatch metrics (cache hit ratio, origin fetch latency) and set alerts at 85 % threshold.

**Result**  
- Cache hit ratio rose from 70 % → **93 %** globally.  
- Origin requests dropped by **68 %**, reducing EC2/Origin cost by **$18k/month**.  
- Page load time improved from **4.3 s to 1.8 s** in Asia (user‑engagement lift of 9 %).  

**Reflection & Ownership**  
I owned the full stack, from HTTP headers to CloudFront configuration, and iterated on feedback loops. The biggest learning: *small header tweaks can produce outsized performance gains*—a reminder to never underestimate “simple” changes in a large distributed system.  

> **Leadership Principles:** Customer Obsession (improve user experience), Ownership (own end‑to‑end delivery).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
