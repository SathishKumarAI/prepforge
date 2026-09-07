---
qid: ing_e029c4c340__aws__local
question: 'Explain: Post Service — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 441
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:46:19-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a *Post Service* for an Instagram‑style app that must support millions of daily posts, real‑time feeds, and high media throughput while staying under $5 M/yr.

**Action – Architecture**  
- **Front‑end API Gateway + Lambda (API Gateway + Lambda@Edge)**: low latency, auto‑scale.  
- **Post ingestion** → **SQS FIFO** → **EC2 Auto Scaling group** with **Redis‑Cluster (Amazon ElastiCache)** for session‑level deduplication.  
- **Storage** → **S3 (Standard‑IA + Glacier)** for media; **DynamoDB** for post metadata (userId, timestamp, mediaUrl).  
- **Feed generation** → **Kinesis Data Streams** feeding a **Lambda stream processor** that writes to **ElasticSearch Service** for quick reverse‑chronological queries.  
- **CDN** via **CloudFront** caches images globally; invalidation on edits.  

**Result**  
- 99.9 % request latency < 200 ms, 10⁶ posts/day, > 90 % read traffic served from cache (≈ 30 % cost savings).  
- Auto‑scaling reduced peak compute spend by 40 %.  
- Incident response time dropped from 45 min to < 5 min after implementing CloudWatch alarms and Lambda auto‑remediation.  

**Leadership Principles**  
- **Customer Obsession** – instant, reliable feeds; minimal downtime.  
- **Ownership & Dive Deep** – I ran post‑mortems on cache misses, tuned partitioning, and documented trade‑offs for future hires.  

**Bar‑raiser Takeaway**  
Showed full ownership: from requirement scoping to cost analysis, quantified impact, and lessons learned (e.g., why Kinesis over SQS for high write throughput).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
