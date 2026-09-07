---
qid: ing_6833e74c91__aws__local
question: 'Explain: Summary — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 428
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:20:08-05:00'
sources: []
---

**Situation & Task**  
When I joined the data‑engineering team at a fintech startup, we had to ingest 1 TB of transactional logs per day into an ML model that predicts fraud risk in real time. The legacy batch pipeline introduced 12‑hour latency—unacceptable for our product.

**Action (Design)**  
I led a *Change Data Capture* (CDC) solution using **AWS DMS** to stream PostgreSQL changes directly into **Amazon Kinesis Data Streams**. From there, a **Lambda** function transforms the JSON records and pushes them to **Amazon S3 Glacier Deep Archive** for cost‑effective long‑term storage while simultaneously feeding **Amazon SageMaker Endpoint** via **Kinesis Analytics** for live inference.  
Key trade‑offs:  
- *Scalability*: Kinesis shards auto‑scale with traffic; Lambda concurrency limits ensure cost control.  
- *Availability*: Multi‑AZ DMS replication and Kinesis data retention (24 h) guarantee no loss during outages.  
- *Cost*: 1 TB/day to S3 ~ $20/month, Glacier Deep Archive ~ $2/month; Lambda invocations <$0.50k/month.

**Result**  
Latency dropped from 12 hrs to under **30 seconds**, improving fraud detection accuracy by **18 %** (AUC). We saved ~$15k annually on storage and reduced operational toil by 40 %.  

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered near‑real‑time insights that protect users.  
- *Ownership & Dive Deep*: Built the end‑to‑end CDC pipeline, monitored metrics, and iterated on failure modes.  

Bar‑raisers will note my clear ownership of metrics, deep dive into AWS service trade‑offs, and learning from a failed initial attempt that used Kafka (high operational overhead).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
