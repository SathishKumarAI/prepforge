---
qid: ing_5fb98a0b0f__aws__local
question: What Is A CDN? How Does It Work?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 416
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:02:32-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“A CDN—Content Delivery Network—is a globally distributed cache that stores copies of static assets (images, JS/CSS, ML inference models) close to end users, reducing latency and load on origin servers.”*

### Situation & Task  
At my previous role I led the rollout of a real‑time recommendation engine for an e‑commerce platform. Our inference model served 10 M requests/day from a single EC2 instance; latency spiked during flash sales, hurting conversion rates.

### Action  
I designed a **multi‑region CDN** using Amazon CloudFront + Lambda@Edge:

1. **Cache Strategy** – Cache the serialized model and inference results for 5 min, with cache‑bypass rules for authenticated users.  
2. **Edge Compute** – Use Lambda@Edge to run lightweight preprocessing (tokenization) before forwarding to the origin, cutting request size by 30%.  
3. **Origin Shield & S3** – Store the master model in S3; CloudFront pulls only on cache miss, ensuring a single source of truth.

I coordinated with DevOps to automate deployments via Terraform and monitored using CloudWatch Alarms (latency > 200 ms).

### Result  
*Latency dropped from 750 ms to **120 ms** (84% reduction).  
Error rate fell by 70%.  
Cost savings: CDN cache hit ratio rose to 95%, reducing EC2 traffic by 8× and cutting monthly spend from $15k to $3.5k.*  

### Reflection  
I owned the end‑to‑end solution, dove deep into CloudFront’s caching headers, and iterated on edge logic after a production failure that revealed stale model data—prompting automated cache invalidation. This experience reinforced my bias for action while ensuring high availability and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
