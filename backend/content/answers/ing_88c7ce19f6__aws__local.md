---
qid: ing_88c7ce19f6__aws__local
question: 'Explain: Scaling to Count Billions — From Zero to 50 Million Uploads per
  Day: Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 440
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:33:41-05:00'
sources: []
---

**Situation & Task (S)**  
I was the lead on a project to lift Canva’s media ingestion from ~0 to **50 M uploads/day** for our global design platform. The goal: keep latency under 200 ms while scaling horizontally without breaking cost or reliability.

**Action (A)**  
1. **Owned the end‑to‑end pipeline** – split uploads into “fast” and “throttled” queues using SQS FIFO + DLQ, then used Kinesis Data Streams for real‑time analytics.  
2. **Designed a stateless microservice on ECS Fargate** that pulls from SQS, validates metadata, writes to DynamoDB (global secondary index) and triggers an S3 event to trigger Lambda image processing.  
3. **Implemented auto‑scaling policies**: CloudWatch alarms on queue depth + CPU → Fargate task scaling; Kinesis shards were auto‑rebalanced via the Data Streams API.  
4. **Cost control** – leveraged Spot Instances for batch workers, reserved capacity for steady traffic, and used S3 Intelligent Tiering to reduce storage spend by 35 %.  

**Result (R)**  
- Achieved 50 M uploads/day with <200 ms latency in 6 weeks, a 500 % throughput increase.  
- Reduced cost per upload from $0.15 to $0.08 (30 % savings).  
- SLA uptime rose from 99.5 % to >99.95 %.  

**Leadership Principles Highlighted**  
*Customer Obsession*: Designed for end‑user speed and reliability.  
*Ownership & Dive Deep*: Handled every layer, from SQS to Lambda, and tuned each metric.  

**Bar‑raiser notes** – The interviewers will look for clear ownership, depth of technical detail (AWS services chosen, scaling logic), quantified impact, and lessons learned (e.g., how we handled a shard split failure).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
