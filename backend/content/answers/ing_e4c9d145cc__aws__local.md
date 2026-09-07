---
qid: ing_e4c9d145cc__aws__local
question: 'Explain: How CDN Routing Works — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 428
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:55:17-05:00'
sources: []
---

**Situation / Task**  
At a media startup I was asked to cut end‑to‑end latency for video streams from 1 s (origin‑only) to <200 ms globally while keeping cost under $50k/month.

**Action – Technical Design**  
I architected an **Amazon CloudFront + Lambda@Edge** solution:  

| Step | AWS Service | Why |
|------|-------------|-----|
| Edge location routing | CloudFront CDN | Global edge cache, lowest latency |
| Dynamic content signing | AWS WAF & Cognito | Secure token‑based access |
| Real‑time origin failover | Route 53 health checks + ALB | 99.99 % availability |
| Cache invalidation policy | CloudFront API | 10‑minute TTL for live events |

I introduced **Cache Partitioning** (by user tier) and used **S3 Transfer Acceleration** for large assets, reducing transfer costs by ~30%. I also added a **CloudWatch anomaly detector** to auto‑scale origin instances.

**Result**  
- Latency dropped from 1 s → 180 ms (average global), meeting SLA.  
- Traffic served from edge increased 4×, cutting origin bandwidth cost from $35k → $22k/month (~37% savings).  
- Uptime improved to 99.995 % as measured by synthetic tests.

**Leadership Principles Reflected**  
- **Customer Obsession:** Built a low‑latency experience for global viewers.  
- **Ownership & Dive Deep:** Took end‑to‑end responsibility, tuned TTLs and health checks until metrics hit targets.  

**Bar‑raiser takeaway**  
Demonstrated ownership by owning the full stack, deep dive into CloudFront cache mechanics, quantified impact (latency & cost), and iteratively learned from early failures (cache miss spikes) to refine policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
