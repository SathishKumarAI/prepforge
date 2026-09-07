---
qid: ing_69bed7621f__aws__local
question: 'Explain: Channel Processors — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 401
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:23:10-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a feature to notify users when their video transcoding job finished. The goal was to build a *Channel Processor* that could handle 10 M jobs/day, deliver messages within 2 s of completion, and scale automatically.

**Action (Design)**  
1. **Event source** – Each job writes a status record to **DynamoDB Streams**; the stream triggers an **AWS Lambda** processor.  
2. **Processing** – The Lambda pulls the user’s channel config from **Parameter Store**, formats a payload, and pushes it to **Amazon SNS** topics per channel type (email, SMS, push).  
3. **Reliability** – SNS delivers to **SQS FIFO queues** for downstream services that persist logs in **RDS Aurora Serverless**.  
4. **Observability** – Metrics go to **CloudWatch**, alarms trigger a fallback Lambda that writes to an S3 “dead‑letter” bucket.

**Result**  
- Reduced notification latency from 8 s to <2 s (30% improvement).  
- Cost dropped by 40 % vs the previous monolithic Java service because of serverless pay‑per‑invocation.  
- 99.9% uptime over a 6‑month period, with automated retries for transient failures.

**Leadership Principles**  
*Customer Obsession* – Delivered instant alerts that improved user trust.  
*Ownership & Dive Deep* – I architected end‑to‑end flow, tuned Lambda concurrency, and performed root‑cause analysis on edge cases.  

**Bar‑raiser takeaway**  
I quantified latency reduction, cost savings, and SLA compliance, demonstrating deep technical ownership while learning to balance throughput with eventual consistency in SNS/SQS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
