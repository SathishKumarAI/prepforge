---
qid: ing_d36e30e3ab__aws__local
question: How Hadoop works? — data-engineering/ApacheHadoop at main \u00b7 Anshul619/data-engineering
  \u00b7 GitHub
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 401
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:18:37-05:00'
sources: []
---

**Situation** – While leading a data‑engineering team at my last company, we had to migrate a legacy Hadoop pipeline that processed ~10 TB/day of clickstream logs into a more cost‑effective, highly available architecture on AWS.  
**Task** – I owned the end‑to‑end redesign: preserve 99.9% query latency (< 2 s for ad‑hoc analytics), cut infrastructure spend by 40%, and enable real‑time ingestion for downstream ML models.  
**Action** –  
1️⃣ **Architecture** – Replaced on‑prem HDFS with **Amazon EMR (Spark + Hadoop YARN)** for batch, and **Kinesis Data Firehose** to stream logs directly into **S3**.  
2️⃣ **Processing** – Spark jobs read from S3 using the **Parquet** format; we enabled **partition pruning** on `date` & `country`.  
3️⃣ **Cost & Scale** – Spot Instances (EMR) + Auto‑Scaling reduced EC2 spend by 35%; Kinesis Firehose auto‑scales to 5 k/s.  
4️⃣ **Reliability** – Multi‑AZ EMR clusters, S3 versioning, and Athena for ad‑hoc queries ensured 99.9% availability.  
5️⃣ **Monitoring** – CloudWatch + AWS X-Ray traced job metrics; alerts triggered on >10 % latency drift.  

**Result** – The new pipeline processed the same data volume with a 2× faster turnaround, cut operational costs from $12k/month to $7.4k/month, and enabled downstream ML teams to train models in near‑real time.  
*Leadership Principles*: **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
