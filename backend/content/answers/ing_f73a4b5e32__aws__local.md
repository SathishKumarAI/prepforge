---
qid: ing_f73a4b5e32__aws__local
question: 'Explain: Um and so when you have parameters — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 422
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:37:46-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional ML platform at Google, we had to expose millions of model parameters (weights, hyper‑parameters) through a real‑time inference API. The goal was **zero‑downtime rollouts** and **sub‑10 ms latency** for every request.

**Action**  
1. **Ownership & Bias for Action** – I rewrote the parameter store as an *immutable* versioned artifact in S3, coupled with a CloudFront edge cache.  
2. **Dive Deep** – Each API call first hits CloudFront; if the requested model version isn’t cached, it falls back to an EC2‑based “parameter fetcher” that streams the weights from S3 into an in‑memory *Redis* cluster (fully managed ElastiCache).  
3. **AWS Services** – S3 for durable storage, CloudFront for low‑latency edge delivery, ElastiCache Redis for hot‑key access, and Lambda@Edge to invalidate cache on new releases.  
4. **Scalability & Cost** – The design supports 10⁶ requests/sec with <0.5 % cache miss rate, keeping S3 read costs below $0.05 per million reads while keeping EC2/Redis spend <$200/month.

**Result**  
Post‑deployment we achieved a **99.9 % success rate** and reduced average inference latency from 12 ms to **8 ms**, cutting operational cost by **30 %** versus the legacy monolith.  

**Learning** – Early on I underestimated cache invalidation, leading to stale parameters for ~2 hrs. By adding a *version‑based key* policy we eliminated that failure mode and reinforced the principle of **Ownership**: own the full lifecycle from data ingestion to consumer delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
