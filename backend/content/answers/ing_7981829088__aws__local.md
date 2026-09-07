---
qid: ing_7981829088__aws__local
question: 'Explain: Summary — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 431
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:59:41-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *Situation*: Our client needed a real‑time recommendation engine that could ingest streaming click data and output personalized product suggestions within 200 ms.  
> *Task*: Build a fault‑tolerant, low‑latency pipeline that scales to millions of events per second while keeping costs under $0.02/1k requests.  
> *Action*:  
> 1. **Ingest** – Amazon Kinesis Data Streams (shard count auto‑scaling) → 10 MB/s throughput.  
> 2. **Processing** – Lambda@Edge functions for feature extraction; use SageMaker Neo to compile the model for inference on AWS Inferentia, reducing latency from 1 s to <200 ms.  
> 3. **Model Serving** – Amazon SageMaker Endpoint (multi‑model) behind an Application Load Balancer with health checks; autoscale based on CPU utilization.  
> 4. **Storage & Metadata** – DynamoDB for feature cache, S3 for training data, and CloudWatch for monitoring.  
> 5. **Reliability** – Deploy across two AZs; enable Kinesis Data Firehose to backup to S3 in case of stream failure.  
> *Result*: Achieved 99.9 % SLA on latency, reduced inference cost by 35 %, and increased conversion rate by 12 %. The system handled a 4× traffic spike during Black Friday without manual intervention.

**What the Bar‑Raiser Looks For**

- Demonstrated **ownership** of end‑to‑end flow and cost control.  
- Deep dive into latency trade‑offs (Lambda vs. EC2, Inferentia vs. CPU).  
- Quantified impact on business metrics (conversion rate).  
- Reflection on failure: after a brief outage, we added a Kinesis retry policy, reducing missed events by 98 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
