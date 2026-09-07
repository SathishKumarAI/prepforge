---
qid: ing_dfb8d03399__aws__local
question: 'Explain: So, we''re really interested in, say we — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 418
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:45:31-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with building an *Anomaly Detection* platform for a streaming‑video service that handled 10 M daily sessions. The goal was to surface outliers (e.g., sudden latency spikes or content‑delivery failures) in real time, provide explainability for ops, and reduce incident response time by 30 %.

**Action – Design & Technical Choices**  
1. **Data ingestion** – Kinesis Data Streams → Lambda → Amazon S3 (raw logs).  
2. **Feature extraction** – Glue jobs compute per‑session metrics (latency, buffer ratio, error rate) and store in Redshift.  
3. **Modeling** –  
   * **Isolation Forest** for unsupervised detection (scales to millions of rows, O(n log n)).  
   * **Explainable AI**: SHAP values computed per anomaly; results pushed to an Elasticsearch index for UI dashboards.  
4. **Real‑time scoring** – SageMaker Neo model deployed on AWS Inferentia endpoints (latency < 5 ms).  
5. **Alerting** – SNS + CloudWatch alarms trigger PagerDuty tickets when the anomaly score exceeds a dynamic threshold (mean+3σ).

**Result**  
- Detected ~4,500 anomalies in the first month, of which 93 % were confirmed incidents.  
- Incident‑response time dropped from 45 min to 15 min (+67 %).  
- Cost: $2k/month for inference vs. $8k/month if we ran batch jobs on EC2.

**Reflection & Learning**  
I owned the end‑to‑end pipeline, iterated on feature engineering after a false‑positive spike, and leveraged cross‑team feedback to simplify the SHAP visualizer (now 30 % faster). This experience reinforced *Ownership*, *Dive Deep*, and *Bias for Action*—key Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
