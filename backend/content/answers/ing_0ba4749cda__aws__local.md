---
qid: ing_0ba4749cda__aws__local
question: 'Explain: Register custom metrics — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 524
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:52:05-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a project to monitor the quality of an LLM‑based recommendation engine. The client required *real‑time* custom metrics (e.g., “Accuracy@10”, “Latency per inference”) that were not exposed by the model host. We had to ingest, store, and alert on these metrics at scale while keeping costs under $1k/month.

**Action**  
I designed a lightweight ingestion pipeline:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Ingest raw eval logs | **Amazon Kinesis Data Firehose** | Near‑real‑time streaming, auto‑buffering to S3. |
| Transform & aggregate | **AWS Lambda** (Python) + **AWS Glue** jobs | Serverless compute scales with volume; Glue writes to DynamoDB for low‑latency queries. |
| Store & query | **DynamoDB** (partitioned by model version) | 99.999% availability, sub‑ms reads for dashboards. |
| Visualize & alert | **Amazon CloudWatch Dashboards + Alarms** | Native metric ingestion via `PutMetricData`; cost‑effective alerts. |

Custom metrics were registered in CloudWatch using the SDK (`put_metric_data`), keyed by model ID and evaluation type. I also added a fallback to S3 for audit logs, ensuring durability.

**Result**  
- **Latency**: 0.8 s avg per metric push vs 5 s pre‑design.  
- **Cost**: $680/month (down 30% from the legacy system).  
- **Alerting accuracy**: 99.2% true positives, no false negatives on SLA breaches.

**Reflection**  
I took full ownership of the end‑to‑end flow, diving deep into Lambda memory tuning and DynamoDB provisioned throughput to avoid throttling—an example of *Ownership* and *Dive Deep*. The iterative A/B tests on metric granularity taught us that fewer, higher‑value metrics yield better decision latency. This design scales horizontally; adding a new model only requires a new partition key, aligning with *Invent & Simplify* and ensuring we stay ahead of future growth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
