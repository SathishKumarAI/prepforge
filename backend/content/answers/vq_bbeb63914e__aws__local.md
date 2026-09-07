---
qid: vq_bbeb63914e__aws__local
question: can we able to do datasets in python?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 456
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:11:36-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** At my previous role I was asked by the product team to expose a new 10‑TB customer clickstream dataset to data scientists via a reusable API so they could build recommendation models.

> **Task:** Build an end‑to‑end pipeline that ingests raw logs, transforms them into clean Parquet, and serves them on demand with low latency and high concurrency—all in Python.

> **Action:**  
> * Ingest → **Amazon Kinesis Data Firehose** streams 5 M events/sec to **S3** (10 TB).  
> * Transform → A scheduled **AWS Glue** job runs a PySpark script that normalizes, deduplicates, and writes Parquet partitions by day.  
> * Serve → I deployed an **Amazon API Gateway + Lambda Authorizer** backed by a **Lambda@Edge** function that queries the S3 location using **AWS SDK for Python (boto3)** and returns a signed URL.  
> * Monitoring → CloudWatch metrics and AWS X‑Ray traced every request; alerts on 5xx or >200 ms latency.

> **Result:** The pipeline processed 10 TB in under 30 minutes, cut data scientist prep time from 2 days to 4 hours (80% faster), and the API handled 1,000 concurrent requests with <100 ms latency. Costs were $0.03 per query vs an estimated $5 if we had built a custom ETL on EC2.

**Dive Deep & Learn**

I debugged a sudden spike in failed Lambda invocations by inspecting CloudWatch logs; discovered that the boto3 client was hitting the S3 `429 Too Many Requests` limit due to burst traffic. I mitigated this with exponential back‑off and increased the Firehose buffer size, reducing failures from 12% to <0.1%.

*Bar‑raiser cues:* Ownership of end‑to‑end flow, depth in AWS service choices, quantified speed & cost impact, and proactive learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
