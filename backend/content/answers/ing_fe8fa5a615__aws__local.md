---
qid: ing_fe8fa5a615__aws__local
question: 'Explain: Computer networking — Technical interviewing | Microsoft Careers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 557
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:53:31-05:00'
sources: []
---

**Situation** – While leading a cross‑functional ML pipeline at my previous company, we were asked by the product team to **replace our on‑prem Spark cluster** with a cloud‑native solution that could handle *100 GB/day* of streaming data from IoT devices and still serve predictions in < 200 ms.  

**Task** – Design an end‑to‑end architecture that (1) ingests, (2) stores, (3) trains, and (4) serves models with minimal latency, while staying under a $30K/yr budget.  

**Action** –  
* **Ingest**: Used **Amazon Kinesis Data Streams** for real‑time ingestion; burst traffic capped at 5 MB/s, auto‑scaling via *shard auto‑rebalancing*.  
* **Store**: Persisted raw data in **S3 (Glacier Deep Archive for cold logs)** and feature tables in **Amazon DynamoDB** with provisioned throughput of 10 kRCU/ICU to keep read latency < 5 ms.  
* **Train**: Deployed **Amazon SageMaker** notebooks on *ml.m5.large* instances; leveraged **SageMaker Pipelines** for CI/CD, and used **Spot Instances** (cost ↓ 70%) for large‑batch jobs.  
* **Serve**: Exposed models via **Amazon API Gateway + Lambda** with *Provisioned Concurrency* to guarantee < 200 ms response times.  
* **Observability**: Integrated **CloudWatch Metrics/Alarms** and **X-Ray** for end‑to‑end latency tracing; automated rollback on SLA breach.

**Result** – Reduced total cost by **48%**, cut prediction latency from 1.2 s to 180 ms, and increased daily data throughput from 50 GB to 120 GB without downtime.  

*Leadership Principles*:  
- **Customer Obsession**: Delivered a faster, cheaper solution that directly improved user experience.  
- **Ownership** & **Dive Deep**: Hand‑rolled the full stack, continuously profiled performance, and iterated based on data.

*Bar‑raiser takeaways*: ownership is evident through end‑to‑end responsibility; depth shown by selecting appropriate AWS services and tuning for cost/latency trade‑offs; quantified impact (cost & latency numbers); learning from failure – early pilot exposed a DynamoDB hot‑key issue, leading to redesign with partition keys.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
