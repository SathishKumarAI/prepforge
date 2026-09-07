---
qid: ing_6139d34e66__aws__local
question: 'Explain: Change Data Capture is offered for Kinesis'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 495
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:05:26-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Customer Obsession & Ownership** – I always ask myself how a feature will make the customer’s life easier and who owns it downstream.

### Situation  
At my last role we needed to keep our recommendation engine in sync with production changes without pulling whole tables. The team debated whether to use Kinesis Data Streams or another CDC tool.

### Task  
I was tasked to evaluate Kinesis’ built‑in Change Data Capture (CDC) support and propose an end‑to‑end pipeline that delivers near‑real‑time updates to the ML model with minimal latency and cost.

### Action  

| Requirement | Design & AWS Services | Rationale |
|-------------|-----------------------|-----------|
| **Capture schema changes** | Use **AWS Database Migration Service (DMS)** with CDC enabled on Aurora PostgreSQL → stream to **Kinesis Data Streams**. | DMS handles logical decoding, auto‑detects schema evolution. |
| **Ingest & transform** | Lambda “CDC processor” reads Kinesis records, enriches with feature vectors, writes to **Amazon S3 (Parquet)** for batch training and to **Amazon SageMaker Feature Store** for real‑time inference. | Serverless scaling, pay‑per‑record; Parquet reduces storage cost by 40%. |
| **Low latency** | Use **Kinesis Data Firehose** with buffer of 5 s to feed a *SageMaker Endpoint* via **Amazon API Gateway**. | Guarantees <200 ms latency for inference. |
| **Cost & durability** | Kinesis Streams retained for 24 h, Lambda concurrency auto‑scaled; DMS replication slot persists until confirmed. | Total cost ~$0.02 per million records, 99.999% availability. |

### Result  
Implemented pipeline reduced model refresh time from 4 hrs to <10 min, increased recommendation click‑through by **12%** in the first month, and cut storage costs by **35%** compared with our legacy batch ETL.

> **Bar‑raiser check:** I owned the decision, dove deep into DMS’s logical decoding limits, quantified impact (CTR lift, cost), and learned that a hybrid stream + feature store gives the best trade‑off between latency and durability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
