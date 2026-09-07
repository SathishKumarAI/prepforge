---
qid: ing_a3cc51b166__aws__local
question: 'Explain: AP (Availability and Partition Tolerance)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 471
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:37:40-05:00'
sources: []
---

**Answer – Availability & Partition Tolerance (AP)**  

*Situation*: At my previous role I led a real‑time fraud detection pipeline that served 4 M users/day. A sudden network partition caused the streaming job to stall, dropping alerts and eroding customer trust.  
*Task*: Restore uninterrupted service while preserving data integrity across AZs within 30 minutes.  
*Action*:  
1. **Re‑architected** the ingestion layer as a *Kinesis Data Streams* shard cluster with *cross‑region replication* (using Kinesis Firehose to S3).  
2. Implemented a *stateless Lambda* microservice that consumes records, writes idempotently to DynamoDB (global tables) and forwards alerts via SNS.  
3. Added **SQS FIFO queues** as a buffer during partitions; the Lambda retries with exponential back‑off, guaranteeing at‑least‑once delivery without double‑counting.  
4. Enabled *DynamoDB auto‑scaling* and *on‑demand capacity* for burst traffic, keeping latency < 200 ms.  

*Result*: After deployment, system uptime rose from **99.92%** to **>99.999%** over the next quarter; partition‑induced alert loss dropped from 7.3% to <0.1%. Cost impact was a modest +12% due to DynamoDB global tables, but ROI exceeded 200% within six months through avoided fraud losses (~$4 M).  

**Leadership Principles Highlighted**  
- **Customer Obsession** – ensured continuous fraud protection for users.  
- **Ownership & Dive Deep** – I owned the failure root cause, dissected logs (CloudWatch), and engineered a fault‑tolerant solution.  

**Bar‑raiser takeaways**:  
- Demonstrated *quantified impact* (uptime & cost).  
- Showed *deep technical dive* (AWS service choices, trade‑offs).  
- Learned from failure: introduced idempotent writes to prevent data duplication during retries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
