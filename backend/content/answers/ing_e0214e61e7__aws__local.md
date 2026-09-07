---
qid: ing_e0214e61e7__aws__local
question: 'Explain: Traffic — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 513
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:46:19-05:00'
sources: []
---

**Situation (S)**  
At my last role I was tasked to build a real‑time traffic analytics platform for a city’s 2 M daily riders. The goal: deliver live congestion scores and historical heatmaps with <5 s latency, while keeping the bill under $10k/month.

**Task (T)**  
Design a scalable, highly available system that ingests GPS pings, computes per‑segment traffic speed, and exposes dashboards for city planners.

**Action (A)**  

| Step | AWS Service | Rationale |
|------|-------------|-----------|
| 1. Ingest | **Amazon Kinesis Data Streams** (shard = 10) | Handles >200k events/s with low latency; auto‑scales. |
| 2. Transform | **AWS Lambda** + **Kinesis Data Analytics** | Serverless compute, zero ops. Analytics job aggregates speeds per 100m segment every 30 s. |
| 3. Store | **DynamoDB (Global Tables)** for real‑time scores; **S3 Glacier Deep Archive** for raw logs. | DynamoDB offers <10 ms writes/reads; Global Tables give multi‑AZ availability. |
| 4. Query & Visualize | **Amazon Athena** on S3 + **QuickSight** dashboards. | Pay per query, no provisioning. |
| 5. Orchestration | **AWS Step Functions** for failure retries and dead‑letter queues. | Ensures data integrity. |

**Result (R)**  
- Latency <4 s from ingest to dashboard; 99.9% availability across two AZs.  
- Cost: $8,600/month (Kinesis + Lambda + DynamoDB).  
- City planners now receive congestion alerts in real time and can download historical heatmaps with a single query.

**Reflection**  
I owned the entire pipeline—tuned shard count, added exponential back‑off on Lambda retries, and set up CloudWatch dashboards. The “dive deep” came from analyzing 10 TB of raw GPS data to determine optimal segment granularity (100 m). A failure in early version caused a 30 % latency spike; I learned to instrument Kinesis metrics and added an auto‑scale policy, turning the issue into a feature that now preempts congestion before it hits traffic lights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
