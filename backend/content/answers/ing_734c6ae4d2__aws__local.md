---
qid: ing_734c6ae4d2__aws__local
question: 'Explain: CDN Providers — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 416
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:46:25-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign a global media platform that streamed video and static assets to millions of users worldwide. The existing CDN solution caused latency spikes during peak traffic and the cost model was opaque. I needed a low‑latency, highly available, and cost‑efficient architecture.

**Action**  
- **Owned** the end‑to‑end flow: source → origin S3 + CloudFront → edge cache → viewer.  
- Leveraged **AWS CloudFront** as the CDN, integrated with **S3** for immutable assets and **Lambda@Edge** to rewrite URLs and enforce GDPR consent.  
- Implemented **origin failover** to a secondary S3 bucket behind an **Application Load Balancer** for dynamic content.  
- Employed **WAF** rules at CloudFront for DDoS protection, and used **Amazon Kinesis Data Streams** + **Glue** to log cache hit/miss metrics in real time.  
- Tuned **cache‑control headers** to maximize 95 % hit ratio, reducing origin requests by ~70 %.  
- Introduced a **cost‑optimization loop**: automated CloudWatch alarms trigger a script that swaps cheaper edge locations during low traffic windows.

**Result**  
- Latency dropped from 350 ms (edge) to 120 ms globally.  
- Cache hit ratio increased from 80 % to 95 %, cutting origin bandwidth by **$12k/month**.  
- Uptime improved to 99.999 % with automated failover, eliminating the previous 15‑minute outage.  

**Reflection**  
I *dive deep* into CloudFront logs, learned that stale cache headers were the root cause of high origin traffic, and iterated quickly—demonstrating bias for action and ownership while delivering measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
