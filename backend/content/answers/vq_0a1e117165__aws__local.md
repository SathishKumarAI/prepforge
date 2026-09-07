---
qid: vq_0a1e117165__aws__local
question: What is the difference between SQL vs NoSQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 434
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:38:01-05:00'
sources: []
---

**Situation & Task (Leadership – Customer Obsession, Ownership)**  
At my previous company we were migrating a legacy data lake to an analytics platform on AWS. The product team needed real‑time dashboards for sales while also preserving historical OLAP workloads. I owned the decision: choose between relational and non‑relational stores.

**Action (Dive Deep & Bias for Action)**  
I compared **Amazon RDS / Aurora PostgreSQL** (SQL) vs **Amazon DynamoDB** (NoSQL).  
*Schema*: SQL offered ACID guarantees and powerful joins—critical for complex sales reports. NoSQL provided flexible, high‑write throughput needed for event streams.  
*Scalability*: Aurora auto‑scales read replicas; DynamoDB scales horizontally with provisioned or on‑demand capacity.  
*Cost & Availability*: With Aurora I projected $12k/month and 99.999% availability via Multi-AZ. DynamoDB would cost ~$8k/month for the same throughput but lacked native joins, requiring expensive ETL (AWS Glue).  

I proposed a **hybrid architecture**:  
- **DynamoDB** for ingestion of clickstream data (10 M writes/day) → Lambda triggers → Kinesis Firehose → S3.  
- **Aurora Serverless v2** for analytical queries (≈1k concurrent reads/second).  
This split kept latency <200 ms for dashboards while staying within the $20k/month budget.

**Result (Deliver Results)**  
Post‑migration, dashboard query time dropped from 12 s to 0.8 s (15× faster), and we saved 25% on infrastructure costs in Q2. The product team reported a 30% increase in sales rep efficiency due to real‑time insights.

**Learning**  
The key takeaway: **don’t force one paradigm onto all workloads**—use the right tool for the job, validate with metrics, and iterate quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
