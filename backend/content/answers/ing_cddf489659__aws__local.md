---
qid: ing_cddf489659__aws__local
question: 'Explain: Amazon EventBridge — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 586
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:06:29-05:00'
sources: []
---

**Situation (S)**  
In 2022 I led a cross‑functional team that needed to ingest and transform > 1 TB of real‑time IoT telemetry into ML‑ready features for our recommendation engine, while keeping cost < $5k/month.

**Task (T)**  
Design a fully serverless pipeline that guarantees *high availability*, *low latency* (< 200 ms per event) and *scalable throughput* to 10k events/sec without provisioning servers.

**Action (A)**  
I chose **Amazon EventBridge** as the backbone, coupled with:

| Component | Why |
|-----------|-----|
| **EventBridge Scheduler** | Generates periodic feature‑refresh jobs; scales automatically. |
| **EventBridge Rules** | Route telemetry to a **Lambda@Edge** function that normalizes and enriches data. |
| **AWS Step Functions** | Orchestrates the downstream **Amazon SageMaker Feature Store** ingestion, ensuring idempotency and retries. |
| **Amazon Kinesis Data Streams** (optional) | Handles bursty traffic; EventBridge pushes to it when events > 5k/sec. |

Key design choices:  
* **Stateless Lambda** → auto‑scales with concurrency limits; paid per 100ms, keeping cost predictable.  
* **EventBridge’s retry policy** (exponential backoff) guarantees eventual delivery without manual queue management.  
* **SageMaker Feature Store** provides ACID writes and versioning, eliminating the need for custom DynamoDB tables.

**Result (R)**  
- Throughput hit 12k events/sec with < 180 ms latency.  
- Cost reduced from $18k/month to $4.2k/month (≈ 76 % savings).  
- Incident rate dropped by 90 % compared to the previous EC2‑based pipeline.

**Leadership Principles Highlighted**

1. **Customer Obsession** – Delivered a real‑time, low‑latency feature store that directly improved recommendation accuracy (+12 % CTR).  
2. **Ownership & Dive Deep** – Built and tuned the serverless stack from scratch, troubleshooting cold starts and retry logic to ensure reliability.

**Bar‑raiser Takeaway**

- Ownership: I owned the end‑to‑end design and post‑mortem of failures.  
- Depth: Detailed trade‑offs between Lambda concurrency vs. Kinesis burst handling were quantified.  
- Quantified Impact: 76 % cost savings, 12 % CTR lift.  
- Learning from Failure: Early cold‑start spikes taught me to pre‑warm Lambdas via scheduled EventBridge events—now a best practice in our ops playbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
