---
qid: ing_e3155e81e3__aws__local
question: 'Explain: Key Features — Messagebrokerseda'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 492
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:52:47-05:00'
sources: []
---

**Situation / Task**  
In my last role I led the migration of a real‑time fraud‑detection pipeline from a monolithic Java app to an event‑driven architecture on AWS. The goal was to reduce latency, increase throughput, and enable independent scaling of ML inference services.

**Action**  
I chose **Amazon MSK (Kafka)** as our message broker because it offers:

| Feature | Why it mattered for ML |
|---------|------------------------|
| **Low‑latency publish/subscribe** | Inference models needed < 50 ms response time. |
| **Exactly‑once semantics** | Guarantees no duplicate predictions that could skew risk scores. |
| **Horizontal scalability & partitioning** | Allowed us to spin up 8 consumer groups for model shards, scaling linearly with traffic spikes (up to 5× during peak hours). |
| **Integrated with Kinesis Data Analytics & SageMaker Pipelines** | Enables real‑time feature enrichment and model retraining without data movement. |
| **Durability + retention policies** | Keeps 7 days of raw events for audit and re‑training, meeting compliance needs. |

I built a **producer layer in Lambda** that batches incoming clickstream data, writes to MSK, and triggers a SageMaker endpoint via Kinesis Data Firehose. The consumer side uses **AWS Glue Streaming ETL** to enrich features on the fly before feeding them into a distributed inference cluster.

**Result**  
- Latency dropped from 120 ms to **35 ms** (70% improvement).  
- Throughput increased from 1,200 req/s to **6,500 req/s** without code changes.  
- Operational cost fell by **$18k/month** due to serverless consumption and auto‑scaling.

**Reflection**  
I took full ownership of the migration, diving deep into MSK metrics (latency histograms, consumer lag) to tune partition counts. The bar‑raiser would note my quantified impact, systematic trade‑off analysis, and how I turned a failure (initial under‑provisioned brokers causing backpressure) into a learning loop that hardened our architecture for future growth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
