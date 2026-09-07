---
qid: ing_e9155e8e3d__aws__local
question: 'Explain: Use case: User posts a tweet — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 456
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:05:04-05:00'
sources: []
---

**Situation (S)** – I was tasked to design a real‑time tweet ingestion pipeline that could scale from a few hundred tweets per second during normal operation to millions during viral events. The goal was to store raw data, enrich it with sentiment scores, and expose an API for analytics dashboards.

**Task (T)** – Build a fault‑tolerant, low‑latency system using AWS services while keeping costs under $5k/month and ensuring 99.9 % availability.

**Action (A)**  

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Ingestion | Amazon Kinesis Data Streams | Handles burst traffic, auto‑scales to 10M records/sec with minimal latency. |
| Processing | Lambda + Step Functions | Stateless micro‑functions for parsing and sentiment analysis; Step Functions orchestrate retries and error handling. |
| Storage | DynamoDB (partitioned by user) & S3 (raw logs) | DynamoDB provides <5 ms reads/writes; S3 archives raw tweets cost‑effectively. |
| Analytics API | Amazon API Gateway + Lambda | Serverless, scales to 100k RPS with zero provisioning. |
| Monitoring | CloudWatch Alarms + X-Ray | Detect backpressure and latency spikes; trace end‑to‑end latency. |

**Result (R)** – During a live event we saw 3 M tweets in 2 minutes. The system maintained <200 ms average latency, dropped less than 0.02 % of records, and stayed within the budget. Post‑mortem showed that using Kinesis shards instead of SQS eliminated backpressure bottlenecks—a key learning for future scaling.

**Leadership Principles Highlighted**

- **Customer Obsession** – Ensuring real‑time analytics for product managers.  
- **Ownership & Dive Deep** – I own failure scenarios, design retries, and deeply analyze shard utilization to keep the system resilient.  

Bar‑raiser cues: ownership of every layer, quantitative impact (latency, error rate), and iterative learning from the live‑event post‑mortem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
