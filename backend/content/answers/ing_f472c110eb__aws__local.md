---
qid: ing_f472c110eb__aws__local
question: 'Explain: Introduction — Hld System Designs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 448
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:29:27-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the launch of a real‑time fraud detection platform for a payment gateway that handled 1 M transactions per day. The goal was to replace an ad‑hoc rule engine with a scalable ML pipeline, reducing false positives by at least 30% while keeping latency < 200 ms.

**Action – Technical Design**  
* **Data ingestion** – Kinesis Data Streams feed raw events to Lambda for lightweight preprocessing (tokenization, feature engineering).  
* **Feature store** – DynamoDB + S3 for historical features; AWS Glue catalogs them.  
* **Model training** – SageMaker Pipelines orchestrate nightly batch training on a 4 GPU instance fleet, using XGBoost with hyper‑parameter tuning via SageMaker Experiments.  
* **Serving** – The best model is deployed to SageMaker Neo edge containers behind an Application Load Balancer; the inference latency stays under 120 ms.  
* **Monitoring & retraining** – CloudWatch metrics trigger a Lambda that starts a new training job if AUC drops below 0.92 or drift exceeds 5%.  

**Result**  
Within three months we cut false positives from 12% to 7.4%, saving ~$2.1 M annually in chargeback costs. The system handled peak spikes of 3× traffic with 99.9% availability, and cost per inference dropped 18%.

**Leadership Principles**  
* **Customer Obsession** – focused on reducing user friction from false alarms.  
* **Ownership & Dive Deep** – architected end‑to‑end pipeline, continuously monitored drift, and iterated quickly.

**Bar‑raiser cues**  
I demonstrated full ownership (from ingestion to retraining), dove deep into latency trade‑offs (choosing Neo over SageMaker real‑time endpoints), quantified impact (exact savings), and learned from an initial 30 ms lag by adding a pre‑warm cache.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
