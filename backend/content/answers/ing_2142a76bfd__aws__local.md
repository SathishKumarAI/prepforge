---
qid: ing_2142a76bfd__aws__local
question: 'Explain: Streaming Traffic — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 399
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:27-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team at a music‑streaming startup that needed to support **1 M concurrent users** with sub‑second latency while keeping infrastructure costs under $2 M/yr. The goal was to build a scalable, fault‑tolerant streaming pipeline for personalized playlists.

**Action – Design & AWS Services**  
- **Ingestion:** Users hit an API Gateway → Lambda (stateless) that publishes events to **Amazon Kinesis Data Streams** (shard per 1 M users).  
- **Processing:** A fleet of **EC2 Spot Instances** behind an Auto Scaling Group consumes the stream via a **Kinesis Client Library**. Each instance runs a containerized recommendation engine written in PyTorch, storing intermediate results in **ElastiCache‑Redis** for low‑latency lookups.  
- **Storage & Delivery:** Final MP3s are stored in **S3 Glacier Deep Archive** (cost‑effective) and streamed via **CloudFront** with signed URLs to enforce DRM.  
- **Observability:** All metrics flow into **Amazon CloudWatch**; alarms trigger Lambda auto‑scaling or failover logic.

**Result**  
- Achieved 99.8 % request success at <120 ms average latency during peak load.  
- Cut operational spend by 35 % through Spot Instances and Glacier tiering, staying well below the $2 M budget.  

**Learning & Ownership**  
I instituted a “blameless post‑mortem” cadence; after an outage caused by a shard key collision I redesigned the sharding strategy (hash on user ID + country) to eliminate contention. This reinforced **Ownership** and **Dive Deep**, ensuring that each failure drove measurable process improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
