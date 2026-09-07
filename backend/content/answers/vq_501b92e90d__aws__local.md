---
qid: vq_501b92e90d__aws__local
question: HOW DO YOU CHECK FOR DUPLICATE RECORDS IN A TABLE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 436
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:51:18-05:00'
sources: []
---

**Situation & Task**  
In a recent migration of our on‑prem customer database to **Amazon RDS Aurora PostgreSQL**, the data engineer asked me how I would detect duplicate rows before the ETL pipeline ran. The goal was to keep ingestion cost low while guaranteeing 99.9 % data quality.

**Action – Technical Design**  
1. **Define uniqueness**: Primary key `customer_id` + business key (`email`, `phone`).  
2. **Create a temporary staging table** with the same schema but no constraints.  
3. Use an **INSERT … SELECT** with `GROUP BY customer_id, email, phone HAVING COUNT(*) > 1`.  
4. Store duplicate sets in a dedicated **`duplicates_log`** table (partitioned by ingestion date).  
5. If duplicates exist, trigger a Lambda function that writes the rows to **S3** for manual review and automatically deletes them from staging.  
6. Finally, load only distinct rows into Aurora using `INSERT … ON CONFLICT DO NOTHING`.  

**Relevant AWS Services**  
- **Amazon RDS Aurora PostgreSQL** (high‑availability, read replicas).  
- **AWS Lambda** (serverless duplicate notifier).  
- **S3** for durable storage of problematic records.  
- **CloudWatch** and **SNS** for alerting.

**Result & Metrics**  
The pipeline processed 12 M rows in 8 minutes on a db.t4g.medium instance, with only 0.02 % duplicates flagged (≈2 400 rows). By off‑loading the duplicate check to a lightweight Lambda, we saved ~30 $ per month compared to running full scans on Aurora.  

**Reflection & Learning**  
I realized that pre‑validation in staging prevents costly rollbacks in production. Next time I’ll add a **data quality dashboard** in QuickSight so stakeholders see real‑time duplicate trends. This keeps the team *customer‑obsessed* (clean data for users) and demonstrates *ownership* and *bias for action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
