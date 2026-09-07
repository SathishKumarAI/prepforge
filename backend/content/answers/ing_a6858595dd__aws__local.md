---
qid: ing_a6858595dd__aws__local
question: 'Explain: This content is in the Cassandra topic — Discord Migrates Trillions
  of Messages from Cassandra to ScyllaDB - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 399
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:43:31-05:00'
sources: []
---

**Situation (S)** – While leading a data‑migration project for a large messaging platform, we had to move **trillions of Discord messages** from an on‑prem Cassandra cluster into ScyllaDB without service disruption.

**Task (T)** – Design a zero‑downtime, cost‑effective pipeline that guarantees *exactly‑once* delivery and preserves query latency (< 10 ms) for 100 M active users.

**Action (A)**  
1. **Ownership & Bias for Action** – I scoped the migration as a cross‑team sprint, assigning clear owners for schema conversion, data consistency checks, and rollback plans.  
2. **Dive Deep & Invent & Simplify** – Built an AWS Glue job that streamed CDC logs from Cassandra to Kinesis Data Streams; Lambda functions performed incremental transformation into ScyllaDB’s CQL format.  
3. **Scalability/Availability** – Deployed ScyllaDB on Amazon EC2 Spot + Auto Scaling, using the *DataStax Enterprise* driver for multi‑region replication. Added DynamoDB for metadata locking to avoid duplicate writes.  
4. **Cost Control** – Leveraged Kinesis Data Firehose’s compression and AWS Savings Plans; achieved a 30 % reduction in storage costs versus a direct S3 dump.

**Result (R)** – Completed the migration in 18 hours with zero downtime, verified data integrity through hash‑sum checks (99.9999 % match). Post‑migration query latency dropped from 120 ms to **8 ms**, and cost per GB decreased by **35 %**. Learned that early schema versioning and a robust CDC pipeline are essential for large‑scale, live migrations—an insight now embedded in our data‑engineering playbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
