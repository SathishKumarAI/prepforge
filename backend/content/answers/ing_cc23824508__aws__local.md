---
qid: ing_cc23824508__aws__local
question: 'Explain: Static Web Assets — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 539
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:02:31-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked to launch a global e‑commerce site that served static marketing pages for a seasonal campaign. The goal was 99.9 % availability and <200 ms latency in all regions while keeping the bill under $3k/month.

**Action (Design)**  
I chose **Amazon CloudFront** as the CDN, backed by **S3** buckets for origin storage. I enabled *Origin Access Identity* to restrict S3 access, set a 365‑day *Object Lock* policy for regulatory compliance, and used *Cache Behaviors* with path patterns (`/assets/*`, `/media/*`) to fine‑tune TTLs (10 min for JS/CSS, 1 day for images).  

For **security** I attached an **AWS WAF Web ACL** with rate limiting (2k req/min) and a *managed rule set* for OWASP top 10. To reduce costs, I leveraged **S3 Intelligent‑Tiering** and CloudFront’s *Price Class 100* to limit edge locations to North America + EU.

I added **AWS Lambda@Edge** to rewrite URLs for locale‑specific assets and perform A/B testing of CSS variants without redeploying the origin. Monitoring was set up with **CloudWatch Alarms** on `4xx`/`5xx` rates, automatically triggering a rollback via CodePipeline if thresholds were breached.

**Result**  
During the campaign we saw 1.2 M pageviews with <0.1 % error rate and an average latency of 120 ms globally. Costs stayed at $2.8k/month, 13 % below budget. The system was fully automated; any failure triggered alerts and rollback in under 5 min.

**Leadership Principles**  
- **Customer Obsession**: Delivered lightning‑fast, reliable content worldwide.  
- **Ownership & Dive Deep**: I architected the end‑to‑end flow, tuned cache policies, and debugged a rare edge‑latency spike that saved us $0.5k/month.

**Bar‑raiser takeaways**  
I demonstrated ownership by handling every layer (storage, delivery, security), dove deep into CloudFront caching rules, quantified impact with precise metrics, and learned from the initial misconfigured TTL that caused a 3 % latency bump—promptly corrected in the next deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
