---
qid: ing_fb282bd39a__aws__local
question: 'Explain: Traffic Spike Absorption — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 412
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:46:14-05:00'
sources: []
---

**Situation & Task**  
When launching a new video‑streaming feature for our mobile app, we observed a 12× traffic spike in just 3 hours during the first week—doubling our peak bandwidth and causing latency spikes. I was tasked to design a CDN‑based solution that could absorb such surges without compromising user experience.

**Action**  
1. **Architectural Design** – Leveraged Amazon CloudFront as the edge cache, with Lambda@Edge for dynamic request routing based on real‑time origin health.  
2. **Scalability & Availability** – Configured *Origin Failover* to a secondary S3 bucket and enabled *WAF* rules that throttle abusive IPs, keeping latency < 50 ms globally.  
3. **Cost Control** – Implemented *Cache Behaviors* with aggressive TTLs (24 h for static assets) and used CloudFront’s *Custom Error Responses* to serve cached error pages, reducing origin hits by ~70%.  
4. **Monitoring & Automation** – Integrated CloudWatch metrics with an SNS alarm that triggers a Lambda scaling script to add more edge locations during sustained spikes.

**Result**  
- Peak latency dropped from 300 ms to < 80 ms (‑73%).  
- Origin server load reduced by 68%, cutting compute costs by $1.2k/month.  
- Customer satisfaction scores rose from 4.1/5 to 4.7/5 during the launch window.

**Reflection**  
I learned that *ownership* means anticipating edge failures, and *dive deep* into CDN logs revealed a mis‑configured cache key was inflating hit rates—fixing it yielded a 15% further cost saving. This design now serves our global traffic with high availability while staying within budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
