---
qid: ing_4c49063f9e__star__local
question: 'Explain: For Amazon Keyspaces, we''re going to be — AWS re:Invent 2021
  - Which NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 363
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:00:51-05:00'
sources: []
---

**Situation**  
In early 2023 I led a team building an IoT analytics platform that ingested millions of device events per day. Our existing Cassandra cluster on EC2 was hitting CPU limits and our DevOps team complained about the operational overhead of patching, scaling, and backup scripts.

**Task**  
I had to choose a managed NoSQL solution that could handle high write throughput (≈4 M ops/sec), provide strong consistency for real‑time dashboards, and reduce operational toil while keeping costs predictable.

**Action**  
After evaluating DynamoDB, Aurora Serverless with DocumentDB, and Amazon Keyspaces, I focused on Keyspaces because it is a native Cassandra API service that eliminates the need to manage nodes. I migrated the schema (wide‑row tables for device telemetry) and used Spark Structured Streaming to batch ingest via Kafka Connect into Kinesis Data Streams, then to Keyspaces using the Cassandra driver. To keep latency low I enabled per-table autoscaling with target utilization at 75 % and set TTLs on historical rows to automate data lifecycle. We also integrated CloudWatch metrics for read/write latency and used AWS Glue for schema discovery.

**Result**  
The platform scaled from 1 M ops/sec to 4.5 M ops/sec without any manual scaling events, and CPU utilization dropped by 60 %. Operational effort fell by ~70 % because we no longer maintained a cluster. The migration cost was roughly $12k/month versus an estimated $25k/month for the on‑prem Cassandra setup. I learned that choosing a managed service aligned with your existing skill set (Cassandra familiarity) can dramatically cut both time‑to‑value and operational risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
