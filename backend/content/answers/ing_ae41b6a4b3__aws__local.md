---
qid: ing_ae41b6a4b3__aws__local
question: 'Explain: F8: Cost-tracking failure across teacher and student'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 463
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:59:40-05:00'
sources: []
---

**Situation (S)** – While building a classroom‑analytics platform for an ed‑tech startup, the product team launched a “Cost‑Tracker” that was supposed to report real‑time spending per teacher and student. Within two weeks of launch we discovered that 35 % of teachers were seeing inflated costs while students saw zero or negative values, causing a spike in support tickets (≈ 4,000 calls/day).

**Task (T)** – Own the defect, restore accurate cost data, and design a system that scales to 1 M users with sub‑second latency.

**Action (A)**  
- **Dive Deep**: Analyzed logs and discovered that our Lambda function used a shared in‑memory cache (`AWS::DynamoDB::Table`), leading to stale reads when concurrent writes occurred.  
- **Bias for Action & Ownership**: Immediately rolled back the failing version, rewrote the cost aggregation as an idempotent **Kinesis Data Streams** pipeline → **Lambda** → **DynamoDB (partitioned by teacher ID)** with conditional writes (`Optimistic Locking`).  
- Added a **CloudWatch Alarms** dashboard to flag outlier aggregates (> 2× expected variance).  
- Implemented **AWS Step Functions** to orchestrate retries and dead‑letter queues, ensuring no data loss.  
- Used **Amazon S3 Glacier Deep Archive** for historical cost snapshots, reducing storage costs by 40 % vs the previous RDS approach.

**Result (R)** – Within 48 h of deployment:  
1. Cost accuracy restored to 99.9 %.  
2. Support tickets dropped from 4,000/day to < 200/day.  
3. Operational cost reduced by $12K/month due to more efficient storage and compute usage.

**Learning** – Validated the importance of *Customer Obsession* (quickly fixing user‑impacting bugs) and *Invent & Simplify* (replacing monolithic cache with a stream‑driven architecture). This cycle reinforced our monitoring culture and improved deployment velocity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
