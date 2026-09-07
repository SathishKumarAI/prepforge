---
qid: ing_96c2a34ee0__aws__local
question: 'Explain: Because the Indians are still sending a — System Design: Content
  Delivery Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 420
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:06:57-05:00'
sources: []
---

**Situation & Task**  
At my previous role we were asked to replace a legacy “Indian‑centric” data pipeline that delivered personalized content to ~2 M daily users in India. The existing system had 30 % latency spikes during peak hours and cost $1.5 M/yr.

**Action**  
I architected a **CDN‑based solution** using *Amazon CloudFront*, *S3* (origin), *Lambda@Edge* for edge‑processing, and *AWS Global Accelerator* to route traffic over the fastest AWS backbone.  
- **Data‑driven design**: I set up CloudWatch metrics (RTT, error rate) and used Amazon Kinesis Data Firehose to stream logs into Redshift for real‑time analytics.  
- **Scalability & Availability**: Leveraged CloudFront’s edge caching to reduce origin hits by 85 %, ensuring 99.999% SLA across all regions.  
- **Cost**: Reduced bandwidth and compute spend by 60 % ($900k/yr) while increasing cache hit ratio from 45 % to 92 %.  

**Result**  
Latency dropped from 800 ms (average) to 250 ms; user engagement rose 18 % in the first month. The solution was deployed within 6 weeks, meeting a tight product deadline.

> **Leadership Principles Anchored:** *Customer Obsession* – delivering faster content; *Ownership* – owning the full end‑to‑end pipeline; *Dive Deep* – using metrics to iterate; *Bias for Action* – rapid deployment.  

**Bar‑raiser Takeaway**  
I demonstrated ownership by driving a cross‑functional team, deep technical dives into edge caching trade‑offs, quantified impact (latency & cost savings), and learned from early cache miss analysis to refine the model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
