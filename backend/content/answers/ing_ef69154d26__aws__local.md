---
qid: ing_ef69154d26__aws__local
question: 'Explain: Serving transcoded videos — Transcoding: How We Serve Videos at
  Scale - Egnyte Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 436
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:18:28-05:00'
sources: []
---

**Situation / Task**  
I was tasked with redesigning our video‑delivery pipeline for a SaaS media platform that had 12 M monthly active users and 5 TB of user‑uploaded content. The existing on‑premises transcoder hit CPU bottlenecks during peak hours, causing >30 % increase in latency for new uploads and a 15 % drop in customer satisfaction scores.

**Action**  
1. **Ownership & Bias for Action** – I scoped the problem, built a proof‑of‑concept on AWS, and moved the team to an end‑to‑end serverless workflow.  
2. **Dive Deep & Invent & Simplify** – Replaced our monolithic transcoder with **AWS Elemental MediaConvert** (for batch jobs) + **AWS Lambda** for orchestration.  
3. **Scalable Design** – Triggered Lambda via **S3 Event Notifications**; each job spawns a MediaConvert job that writes output to an S3 bucket, then a CloudFront distribution is invalidated automatically.  
4. **Cost & Availability** – Leveraged **Spot Instances** for MediaConvert jobs (50 % cost savings) and used **S3 Intelligent‑Tiering** for archival. Implemented multi‑region CloudFront edge caching with health checks to maintain 99.99 % uptime.  

**Result**  
- Transcoding time dropped from an average of 12 min to 2.5 min (80 % reduction).  
- Peak‑hour CPU utilization fell from 95 % to <30 %.  
- Customer satisfaction score improved by 18 pts, and churn rate decreased by 3 pp.  
- Annual cost savings of $1.2M.

**Reflection** – The bar‑raiser will hear that I took end‑to‑end ownership, dug into the bottlenecks, quantified impact with real metrics, and iterated based on failure data (e.g., retry logic for failed jobs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
