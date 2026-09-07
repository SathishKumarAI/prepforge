---
qid: ing_f216b7beb5__aws__local
question: 'Explain: Operational Challenges — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 393
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:24:24-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a team that had to ingest streaming sensor data into an ML pipeline for anomaly detection. The upstream database changed schema every 6 months, and we needed near‑real‑time updates without downtime.

**Action**  
I designed a CDC solution using **Amazon DMS + Kinesis Data Streams**.  
1. **DMS** captures row changes from the source RDS (MySQL) and writes them to an S3 landing zone in Avro format.  
2. A **Kinesis Data Firehose** streams those records directly into **Amazon OpenSearch** for quick search and a **Glue job** that transforms them into Parquet for batch ML training.  
3. For schema evolution I enabled DMS’s *“table mapping with JSON”* feature and built a Lambda that auto‑updates the Glue catalog when new columns appear.

I chose this stack because it is fully managed (low ops), scales automatically, and costs $0.01 per GB of data moved—well below our budget of \$5k/month. Availability was 99.99% by deploying DMS across two AZs and using Kinesis’ retry logic.

**Result**  
Within 3 weeks the pipeline handled a 120 % increase in throughput, reduced lag from 30 min to <2 min, and cut ops hours by 70%. The anomaly model’s precision improved by 12 pp due to fresher data.  

**Reflection**  
I owned every component, dove deep into DMS limits, learned that schema drift can silently break downstream jobs, and iterated quickly—embodying **Ownership**, **Dive Deep**, and **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
