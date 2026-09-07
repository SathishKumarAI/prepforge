---
qid: ing_d787c4e142__aws__local
question: 'Explain: Break down silos: one tool for both AI and general observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 392
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:46-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with unifying the disparate monitoring stack (Prometheus for metrics, OpenTelemetry for traces) and the AI‑powered anomaly detector that ran in a separate Lambda pipeline. The result was duplicated data ingestion, higher costs, and delayed incident response.

**Action**  
I proposed an **Observability‑AI Unified Platform** built on Amazon Managed Service for Prometheus + **Amazon SageMaker Endpoint**.  
1. Ingest all telemetry into a single Kinesis Data Streams stream.  
2. A Lambda function enriches records with metadata and pushes them to both: (a) the Prometheus remote write endpoint, and (b) an S3 bucket used as the training dataset for SageMaker.  
3. SageMaker hosts a **LightGBM** model that receives batched data every 5 min, scores anomalies, and writes alerts back to CloudWatch Events.  

I chose Kinesis for its low‑latency scaling, SageMaker for managed ML lifecycle, and Prometheus for fast metric queries—ensuring **high availability (multi‑AZ)** while keeping costs under \$2k/month versus the previous \$5k.

**Result**  
- Alert latency dropped from 15 min to <2 min.  
- False positives reduced by 35 % thanks to joint feature engineering.  
- Operational cost cut by 60 %.  

**Reflection**  
I owned the end‑to‑end pipeline, dove deep into telemetry semantics, and iterated on the model after a misclassified alert incident—learning that feature selection drives accuracy more than model size.

> **Leadership Principles:** *Ownership*, *Dive Deep*, *Customer Obsession* (the engineering team), *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
