---
qid: ing_74bece8445__aws__local
question: 'Explain: or like alternatively you can implement your'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 505
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:58-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my previous role I was asked to build a fraud‑detection model for an e‑commerce platform that processed ~4 M transactions/day. The business needed near‑real‑time scoring with <1 % false positives, while keeping infrastructure costs under $200k/yr.

**Action (Dive Deep + Ownership)**  
I scoped two viable architectures:

| Architecture | Key AWS services | Scalability | Availability | Cost |
|--------------|------------------|-------------|--------------|------|
| **Batch‑based** | S3 → Glue ETL → SageMaker Batch Transform → DynamoDB | 1 hour batch, ~10 k TPS | Multi‑AZ S3 & SageMaker | ~$120k/yr |
| **Real‑time streaming** | Kinesis Data Streams → Lambda → SageMaker Real‑Time Endpoint (TensorFlow) → SNS | <5 ms latency, 100 k TPS | Auto‑scaling endpoint, multi‑AZ | ~$180k/yr |

I chose the **real‑time pipeline** because customer experience demanded instant feedback. I implemented:

1. **Kinesis Data Streams** for ingestion with a 30‑second retention window.
2. **Lambda** to enrich events (user profile from DynamoDB) and push to SageMaker endpoint.
3. **SageMaker Real‑Time Endpoint** hosted on `ml.m5.xlarge` instances, auto‑scaling between 1–4 nodes based on CPU utilization (>70% triggers scale).
4. **SNS** for alerts when fraud probability >0.8.

The model achieved **99.2 % precision** and **94.7 % recall**, reducing fraudulent losses by **$3.6M annually** (vs $5.9M pre‑deployment). I also set up CloudWatch dashboards to monitor latency, error rates, and cost.

**Result & Learning (Deliver Results)**  
The deployment cut costs by 15 % while improving fraud detection ROI by 60 %. Post‑mortem revealed that the initial Lambda timeout caused a 2 % drop in accuracy; I adjusted the function to use async invocation, restoring performance. This exercise reinforced my belief that **ownership + data‑driven decisions** drive scalable, customer‑centric solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
