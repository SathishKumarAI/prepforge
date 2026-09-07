---
qid: ing_926631a393__aws__local
question: 'Explain: Detection flow — Smart alerts in ThirdEye, LinkedIn\u2019s real-time
  monitoring platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 411
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:57:02-05:00'
sources: []
---

**Situation / Task**  
I was hired as a Senior ML Engineer at LinkedIn to build *Smart Alerts* for ThirdEye, the company’s real‑time monitoring platform that surfaces anomalies in production telemetry before they affect users. The goal was to reduce alert noise by 70 % while keeping detection latency under 5 s.

**Action (Design & Execution)**  
- **Data pipeline:** Ingested ~10 GB of metrics per minute via Kafka → Lambda → Amazon Kinesis Data Streams.  
- **Feature extraction:** Trained a sliding‑window LSTM autoencoder on historical data to learn normal behavior; anomalies scored by reconstruction error.  
- **Model deployment:** Wrapped the model in an AWS SageMaker endpoint, autoscaled with CloudWatch alarms (≥200 RPS).  
- **Alert logic:** Thresholds were adaptive per metric using Bayesian Online Change Point Detection, reducing false positives by 80 %.  
- **Observability:** Integrated Prometheus metrics and Grafana dashboards; every alert triggers a Slack webhook.  

**Result**  
Within three months:  
- Alert volume dropped from 12k/day to 3.6k/day (70 % reduction).  
- Mean detection latency stayed at 4.2 s, meeting SLA.  
- Cost of inference fell by 45 % thanks to spot‑instance usage and batch scoring during off‑peak hours.

**Reflection (Bar‑raiser Lens)**  
I owned the end‑to‑end system, diving deep into data drift and model retraining pipelines. Quantified impact was clear in metrics, and when a false negative slipped through, I instituted a post‑mortem loop that improved threshold tuning by 15 %. This aligns with *Ownership* (taking full responsibility) and *Dive Deep* (understanding every layer of the stack).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
