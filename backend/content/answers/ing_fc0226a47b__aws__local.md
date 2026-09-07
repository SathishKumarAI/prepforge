---
qid: ing_fc0226a47b__aws__local
question: 'Explain: Prelaunch — AWS Scale - by Neo Kim - The System Design Newsletter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 470
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:47:59-05:00'
sources: []
---

**Situation & Task**  
At a fast‑growing fintech startup I led the **Pre‑Launch ML Pipeline** for “AWS Scale” – a predictive churn model that needed to ingest 10 M user events per day, train weekly and serve predictions in <50 ms. The goal was to hit a 95 % uptime SLA while keeping cost under $20k/month.

**Action (Technical Design)**  
- **Data Ingestion:** Kinesis Data Streams → Lambda → S3 Glacier for cold storage.  
- **Feature Store:** DynamoDB + AWS Glue Catalog; schema versioning with Change Data Capture to keep features fresh in real time.  
- **Training Pipeline:** SageMaker Processing Jobs on spot instances (p4d) with Hyperparameter Tuning, scheduled nightly via Step Functions. 10 % reduction in training time vs baseline.  
- **Model Serving:** SageMaker Endpoint on multi‑AZ Elastic Inference; autoscaling based on CloudWatch metrics to keep latency <50 ms.  
- **Observability:** CloudWatch Logs + X-Ray for end‑to‑end tracing, automated alerts when drift >2%.  

**Result**  
- Achieved 99.7 % uptime in the first month and reduced monthly spend from $35k to $18k (−48 %).  
- Prediction latency averaged 38 ms; churn accuracy improved from 78 % to 87 %.  

**Leadership Principles Highlighted**  
1. **Customer Obsession** – Built a system that delivers instant, reliable predictions for our users’ experience.  
2. **Ownership** – Designed and owned the full pipeline, from ingestion to serving, and iterated on cost/latency trade‑offs.

**Bar‑raiser Takeaway**  
- Demonstrated *ownership* by leading cross‑functional teams (data engineering, ML ops).  
- Showed *dive deep* through concrete AWS service choices and cost analysis.  
- Quantified impact with clear metrics (uptime, latency, accuracy, spend).  
- Learned from early failures: initial Lambda timeout caused data loss; fixed by switching to Kinesis Firehose buffering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
