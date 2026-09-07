---
qid: ing_7c00fc52ef__aws__local
question: 'Explain: Compare Cache — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 449
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:05:45-05:00'
sources: []
---

**Situation & Task**  
At Uber I was responsible for the real‑time trip status API that served *over 40 M reads/sec* to millions of riders and drivers worldwide. The data lived in a relational database (PostgreSQL) on EC2, but latency spikes hit our SLA.

**Action – Design & Implementation**  
I built an **integrated cache layer** using **Amazon ElastiCache‑Redis** as the primary hot store and **S3 + Lambda** for cold persistence.  
1. *Read path*: API queries Redis first; on miss a Lambda fetches from RDS, updates Redis (write‑through), and returns the result.  
2. *Write path*: Updates go to both RDS and Redis via an event‑driven pipeline (SNS → SQS → Lambda).  
3. *Cache invalidation*: TTL of 5 s for high‑velocity data; larger TTL for static fields.  
4. *Scalability & Availability*: Multi‑AZ Redis clusters, read replicas, and auto‑scaling on CloudWatch metrics.  
5. *Cost trade‑offs*: We reduced RDS query volume by **95 %**, cutting compute costs by $12k/month while keeping cache size < 200 GB.

**Result**  
Latency dropped from 350 ms to **<50 ms** for 99.9 % of requests, and the system sustained peak loads without outages.  

**Leadership Principles Reflected**  
- *Customer Obsession*: Delivering sub‑50 ms responses directly improves rider experience.  
- *Ownership & Dive Deep*: I owned the end‑to‑end flow, profiled every microsecond, and iterated on TTLs and invalidation logic until we hit SLA targets.  

Bar‑raisers will note my data‑driven impact, deep technical dive into caching trade‑offs, and ownership of both design and post‑launch monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
