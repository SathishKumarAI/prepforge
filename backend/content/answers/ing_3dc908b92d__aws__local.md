---
qid: ing_3dc908b92d__aws__local
question: 'Explain: Reads (Redirects) — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 451
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:31-05:00'
sources: []
---

**Situation & Task**  
I led a two‑month sprint to build a high‑traffic URL shortener for a client that expected 50 M read requests/day. The goal was zero‑downtime redirects, 99.999% availability, and cost under $5k/month.

**Action**  
*Architecture*:  
- **API Gateway + Lambda (Edge)** for write (create) and read endpoints – eliminates server maintenance.  
- **DynamoDB** (partition key = short_id) stores `original_url`, TTL, hit‑count.  
- **CloudFront** caches the 301 response; invalidations only on update.  
- **S3 + CloudWatch Logs** for analytics.  

*Scalability*: Auto‑scaling Lambda handles bursty traffic; DynamoDB’s provisioned capacity (200 WCU/RCU) plus auto‑scale keeps latency <10 ms.  

*Reliability*: Multi‑AZ writes with conditional put guarantees idempotency; CloudFront edge caches reduce origin load, giving 99.999% SLA.  

*Cost*: Roughly $2k/month: Lambda (~$1k), DynamoDB (~$600), CloudFront (~$300).  

**Result**  
- Served 60 M reads/day with <5 ms avg latency and 100 % uptime during a 4‑week spike.  
- Reduced per‑request cost by 30 % compared to a monolithic EC2 solution.  

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end system, dove deep into DynamoDB’s throttling behavior, and quantified every trade‑off. The failure mode—TTL expiration before analytics sync—was caught in load testing; we added an SNS retry path, learning to guard against eventual consistency gaps. This aligns with **Ownership** (take responsibility) and **Dive Deep** (understand underlying systems).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
