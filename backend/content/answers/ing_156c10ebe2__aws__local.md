---
qid: ing_156c10ebe2__aws__local
question: 'Explain: Data Model — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 474
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:13:32-05:00'
sources: []
---

**Situation (S)**  
I was preparing for a senior ML‑platform interview at Amazon where the interviewer asked me to outline how I would prepare a data model for an end‑to‑end recommendation engine.

**Task (T)**  
Show that I own the entire pipeline—from raw clickstream ingestion to feature store, training, and serving—while keeping latency < 50 ms and cost under $10k/month.

**Action (A)**  

| Step | AWS Service | Why |
|------|-------------|-----|
| Ingest real‑time logs | **Amazon Kinesis Data Streams** | Low‑latency, auto‑scaling. |
| Batch ETL & feature enrichment | **AWS Glue + Lake Formation** | Serverless, governance; 10× cheaper than EMR. |
| Feature store & versioning | **SageMaker Feature Store** | Single source of truth, 99.9 % availability. |
| Model training | **Amazon SageMaker Training Jobs (GPU instances)** | Parallelized across 8 p3.2xlarge → 4× faster than on‑prem GPU cluster. |
| Online inference | **SageMaker Endpoint + Lambda@Edge** | <20 ms latency, auto‑scaling; cost ≈ $0.05/1k invocations. |

I also set up **Amazon CloudWatch** dashboards to monitor cardinality drift and retraining triggers—ensuring *Bias for Action*.

**Result (R)**  
During the interview I demonstrated a fully serverless pipeline that processes 5 M events/day, stores 200 GB of features, trains a model in <2 h, and serves predictions with <30 ms latency—all while keeping monthly spend <$9k. The interviewer praised my *Customer Obsession* (end‑to‑end experience) and *Ownership* (complete cost/latency trade‑off).  

**Bar‑raiser cue:** I showed deep dive into each service, quantified impact, and a clear fallback plan if feature cardinality exceeded 1 M—illustrating learning from past failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
