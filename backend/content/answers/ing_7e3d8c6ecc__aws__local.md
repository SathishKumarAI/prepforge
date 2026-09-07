---
qid: ing_7e3d8c6ecc__aws__local
question: 'Explain: Concept drift vs. Data drift — What is concept drift in ML, and
  how to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 419
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:10:46-05:00'
sources: []
---

**Concept Drift – the “hidden data shift” that kills model performance**

*Situation & Task:*  
I was leading a fraud‑prediction service for a retail bank (10 M users). After 90 days of deployment, latency stayed <30 ms but accuracy dropped from 92 % to 78 %. The team suspected concept drift – the underlying relationship between features and labels had changed.

*Action:*  
1. **Detect** – Set up an *ML Model Monitor* on SageMaker Pipelines that streamed predictions and true labels into a Kinesis Data Firehose, then used Amazon Athena to run a sliding‑window Kolmogorov–Smirnov test on feature distributions every 24 h.  
2. **Diagnose** – Cross‑checked with a *Data Drift Dashboard* (CloudWatch metrics + QuickSight) and found the “transaction amount” distribution shifted by Δ=0.35 (p<0.01).  
3. **Mitigate** – Re‑trained the model weekly using an incremental learning algorithm (XGBoost), deployed via SageMaker Endpoint with blue/green routing, and added a fallback rule engine in Lambda to handle edge cases.

*Result:*  
Accuracy rebounded to 91 % within 7 days; false‑positive rate fell from 12 % to 5 %, saving ~€200k/month in unnecessary holds. Monitoring cost was <$50/month versus $1,200/month for a manual audit.  

**Leadership Principles:** *Customer Obsession* – restoring trust in fraud alerts; *Ownership* – I championed the end‑to‑end pipeline; *Dive Deep* – statistical tests and cost trade‑offs drove decisions.  

Bar‑raiser cues: clear ownership, deep dive into metrics, quantifiable impact, learning loop (weekly retraining) that prevented future drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
