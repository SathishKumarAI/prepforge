---
qid: ing_9588d40ede__aws__local
question: 'Explain: Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 433
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:03:57-05:00'
sources: []
---

**Situation & Task** – While leading the media‑streaming product at my previous company, we saw a 70 % spike in traffic during live events and a 45 % increase in page load latency. I was tasked with designing a CDN that could deliver high‑resolution assets globally while keeping cost under $0.10/GB.

**Action (Technical)** –  
1. **Storage & Origin:** Store media in Amazon S3 with versioning; enable S3 Transfer Acceleration for low‑latency uploads.  
2. **Edge Delivery:** Deploy CloudFront as the CDN, configuring *Cache Behavior* to cache static assets for 24 h and dynamic API calls for 5 min. Use Lambda@Edge to rewrite URLs on the fly and add security headers.  
3. **Dynamic Scaling & Availability:** Enable CloudFront’s *Origin Shield* (regional caching) to reduce origin load, and set up cross‑region replication of S3 buckets for fault tolerance.  
4. **Cost Control:** Tag all resources; use CloudWatch metrics to trigger an AWS Budgets alarm when spend > $50k/month.  

**Result** – Latency dropped from 650 ms to 120 ms (80 % improvement), 99.999 % availability during peak events, and CDN costs fell by 35 % YoY while traffic grew 120 %.  

**Leadership Principles Highlighted** – **Customer Obsession** (delivering fast, reliable content) & **Ownership** (end‑to‑end cost & performance monitoring).  
Bar‑raisers focus on my *dive deep* into metrics, quantified impact, and post‑mortem learning from a prior outage that led to this resilient design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
