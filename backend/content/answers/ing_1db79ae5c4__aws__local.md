---
qid: ing_1db79ae5c4__aws__local
question: 'Explain: Tier 1: Run on ALL traces (code-based, free)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 561
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:33:43-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with building an *AI‑driven anomaly detector* for a SaaS platform that generated millions of event traces per day. The requirement was to run the model on **every trace (Tier 1)**, use only code‑based pipelines, and keep it free of charge.

**Action**  
I adopted a “serverless, observability‑first” design:

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Trace ingestion | **Amazon Kinesis Data Streams** | Handles >10 M records/​day with sub‑second latency. |
| Feature extraction & model inference | **AWS Lambda (Python)** + **SageMaker Runtime** | Zero‑cost per invocation; no provisioning overhead. |
| Storage of results | **Amazon S3** (partitioned by date) | Durable, cheap archival. |
| Query & alerting | **Athena + Amazon QuickSight** | SQL‑based analytics, no maintenance. |

I wrote a Lambda that pulls the trace from Kinesis, serializes it to JSON, calls the SageMaker endpoint, and writes the anomaly score back to S3. The whole pipeline is governed by CloudWatch Alarms (e.g., >5 % anomalies → SNS alert). Because every component is *code‑only*, we avoided any paid managed services beyond Lambda’s free tier.

**Result**  
The system processed 12 M traces/day with <30 ms per inference, achieving a **99.8 % throughput**. Cost remained under $0.02/​day (within the AWS Free Tier). We detected 1.4× more anomalies compared to the legacy batch model, reducing downstream ticket volume by **23 %**.

**Reflection (Bar‑raiser focus)**  
- *Ownership*: I led cross‑team syncs, documented the pipeline, and set up automated rollbacks.  
- *Dive Deep*: I profiled Lambda execution time, discovered a bottleneck in JSON parsing, and refactored to `orjson` for 4× speedup.  
- *Learned from Failure*: Early attempts hit Kinesis limits; I migrated to Enhanced Fan-Out after observing back‑pressure logs.

**Leadership Principles Anchored**  
- **Customer Obsession** – Faster, cheaper anomaly detection directly improved user experience.  
- **Ownership & Dive Deep** – Full lifecycle ownership and data‑driven tuning of the serverless stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
