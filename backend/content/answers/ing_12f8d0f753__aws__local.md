---
qid: ing_12f8d0f753__aws__local
question: 'Explain: Draw Data Flow — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 594
total_tokens: 827
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:08:35-05:00'
sources: []
---

**Situation & Task**  
In a recent project I was asked to design a production‑grade ML pipeline that ingests streaming sensor data, trains models on nightly batches, and serves predictions in real time for 200 k daily users. My goal was to build a system that is *highly available*, *cost‑effective*, and *easy to maintain* while meeting the SLA of < 50 ms inference latency.

**Action – Data Flow Design**

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| **Ingest** | Kinesis Data Streams → Lambda (pre‑processing) | Low‑latency, auto‑scaling ingestion; Lambda removes the need to manage servers. |
| **Batch Store** | S3 Glacier Deep Archive + S3 Standard-IA | Cost‑effective long‑term storage for raw data; quick retrieval for training via Athena. |
| **Feature Store** | DynamoDB (global tables) | 10 µs read latency, built‑in replication across regions for high availability. |
| **Training** | SageMaker Pipelines + EMR Spark | Automates ETL, hyperparameter tuning; EMR scales to 200 TB data with spot instances to cut cost by 30%. |
| **Model Registry** | SageMaker Model Registry | Central metadata store; enables rollback and A/B testing. |
| **Inference** | SageMaker Endpoint (Multi‑model) + CloudFront edge cache | Multi‑model endpoint reduces per‑model hosting costs; edge caching cuts latency to < 50 ms for 80 % of requests. |

**Result**  
- Reduced monthly infra spend from $120k to $72k (40 % savings).  
- Achieved 99.999% uptime during a two‑month production run.  
- Latency dropped from 120 ms to 45 ms, meeting SLA and improving user satisfaction by 15 % (measured via NPS).

**Reflection & Learning**  
I initially underestimated the need for a *feature store*; early tests caused cold‑start delays that broke our SLA. Adding DynamoDB as a feature cache resolved this. This iteration taught me to **Dive Deep** into every latency hotspot and to apply the **Ownership** principle by proactively refactoring components before they hit production.

---

> **Bar‑raiser cues**  
> *Ownership:* I took full responsibility for the end‑to‑end pipeline, from ingestion to deployment.  
> *Dive Deep:* Identified bottlenecks in feature retrieval and resolved them with a dedicated cache layer.  
> *Quantified Impact:* Delivered measurable cost savings and SLA compliance.  
> *Learning from Failure:* Adjusted architecture after early latency spikes, demonstrating adaptability and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
