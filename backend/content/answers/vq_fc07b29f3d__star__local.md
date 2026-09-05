---
qid: vq_fc07b29f3d__star__local
question: What are the types of Triggers?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 387
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:28:04-05:00'
sources: []
---

**Situation** – In my last role I was responsible for keeping the data lake in sync with our transactional database while ensuring auditability for regulatory compliance. The existing ETL pipeline lagged by 48 hours, so we needed a near‑real‑time solution.

**Task** – Build a trigger‑based ingestion system that captured changes instantly, propagated them to downstream analytics services, and logged every modification for audit purposes, all within our Snowflake environment.

**Action** – I set up three types of triggers:  
1. **DML triggers** in the source PostgreSQL database (INSERT/UPDATE/DELETE) that wrote change records into a CDC table.  
2. A **time‑based trigger** in Airflow to run every 5 minutes, pulling only new rows from the CDC table and loading them into Snowflake via a Kafka Connect sink.  
3. An **event‑driven trigger** using AWS Lambda and SNS that fired on every CDC record, updating a “last_modified” column in Snowflake and sending an audit message to SQS for compliance logging. I also used dbt models to transform the raw events into dimension tables.

**Result** – The new pipeline reduced data latency from 48 hours to under 10 minutes, improved SLA adherence by 95%, and cut manual audit effort by 70%. I learned how each trigger type serves a distinct purpose—real‑time change capture, scheduled batch safety nets, and event notifications—and how orchestrating them can deliver both speed and compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
