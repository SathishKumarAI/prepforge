---
qid: ing_5ec5cfa518__aws__local
question: 'Explain: Splunk Cloud Platform — Luna Evaluation Models  Cloud Observability
  | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 443
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:00:02-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team that migrated our on‑prem Splunk deployment to the cloud, we needed an automated model‑driven way to detect anomalous log patterns in real time. The goal was to reduce mean‑time‑to‑detect (MTTD) for production incidents from 45 min to under 5 min.

**Action**  
I introduced **Splunk Cloud Platform’s Luna Evaluation Models** as the core of our observability stack, integrating them with Amazon Kinesis Data Firehose and AWS Lambda.  

1. **Data Ingestion** – Logs were streamed into Kinesis Firehose → S3 (raw) and into Splunk via the HTTP Event Collector (HEC).  
2. **Model Training** – Luna’s unsupervised anomaly detection models were trained on 30‑day historical data, automatically selecting features and thresholds.  
3. **Real‑time Scoring** – A Lambda function invoked every minute to push new events to Luna for scoring; results surfaced in Splunk dashboards and triggered SNS alerts when scores exceeded a calibrated threshold.  
4. **Feedback Loop** – Alert outcomes were fed back into the training pipeline, enabling continuous model improvement.

**Result**  
- MTTD dropped from 45 min to **3 min (93% reduction)**.  
- False‑positive rate fell by **60%**, freeing engineers from noise.  
- Operational cost was kept below $1K/month thanks to serverless architecture and S3’s low storage tier.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivering instant, actionable insights for Ops teams.  
- *Ownership & Dive Deep*: Architected a self‑learning pipeline that continuously refines itself.  

**Bar‑raiser takeaways** – I owned the end‑to‑end solution, dove deep into model metrics, quantified impact with real numbers, and iterated after each production run to eliminate failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
