---
qid: ing_09a13916b5__star__local
question: 'Explain: And if it is then go and — System Design: Content Delivery Networks
  (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 386
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:48:14-05:00'
sources: []
---

**Situation**  
At my previous company we launched a global e‑commerce platform that suddenly saw a 300 % spike in traffic during a flash sale. Page load times dropped from 1.2 s to over 5 s, and our CDN was not configured to handle the surge.

**Task**  
I needed to redesign the content delivery network so it could cache static assets globally, reduce latency for all regions, and keep cost under the $200k budget while ensuring zero downtime during the rollout.

**Action**  
First, I mapped out user geography with a real‑time analytics dashboard (Google Analytics + Cloudflare Ray ID). Then I set up an edge‑centric architecture:  
1. Deployed immutable CDN objects via S3+CloudFront with versioned cache keys.  
2. Implemented geo‑sharding by creating multiple origin points in US, EU, APAC and configured CloudFront’s “Origin Shield” to avoid repeated origin hits.  
3. Added a Lambda@Edge function that inspected the `Accept-Encoding` header and served compressed assets only when supported, reducing payloads by ~40 %.  
4. Set TTLs dynamically based on content volatility: 24 h for product images, 1 h for promotional banners.  
5. Monitored cache hit ratios in real time with Datadog; adjusted TTLs until we hit a >90 % hit rate.

**Result**  
Post‑deployment, average page load fell to 0.8 s globally, and the CDN’s cost stayed $180k. Traffic handled 1.5 million concurrent requests during the sale without errors. I learned that fine‑tuning cache policies and leveraging edge functions can dramatically improve performance while keeping budgets tight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
