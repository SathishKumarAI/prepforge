---
qid: ing_51ffec414d__aws__local
question: 'Explain: Interview Follow-Up Questions — Fraud Detection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 501
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:30:31-05:00'
sources: []
---

**Interview Follow‑Up: Fraud Detection**

*Customer Obsession | Ownership*

> **S**ituation – While leading a fraud‑prevention team at my last company, we noticed a sudden spike (≈ 12 % rise) in card‑present fraud during a holiday sale.  
> **T**ask – I was asked to design an end‑to‑end system that would flag suspicious transactions in real time and reduce false positives by 30 %.  
> **A**ction –  
> *Built a micro‑service pipeline on **Amazon Kinesis Data Streams** for ingesting transaction events, routed them through **AWS Lambda** to a scoring model hosted on **SageMaker Endpoint**.  
> *Persisted enriched data in **DynamoDB** (partition key = merchant_id) and used **Amazon QuickSight** dashboards for ops visibility.  
> *Implemented an adaptive threshold using **Amazon Personalize** recommendations, which auto‑tuned the fraud score every 5 minutes.  
> *Added a feedback loop: flagged cases were reviewed in **AWS Step Functions**, outcomes stored back to DynamoDB for continuous model retraining.*  
> **R**esult – Within two weeks we cut false positives from 18 % to 12 % while maintaining detection rate at 99.2 %. The system handled 1M events/day with < 200 ms latency, keeping cost below $0.03 per event.  

*Dive Deep | Bias for Action*

- **What metrics did you monitor?** – Latency, error rate, fraud‑score distribution.  
- **How did you ensure data quality?** – Implemented schema validation in Lambda and used Kinesis Data Firehose to backup raw streams.  
- **Describe a failure point you discovered and fixed.** – Initially the model drift caused an uptick in false negatives; we added an A/B test with a secondary rule‑based engine, caught the drift early, and retrained the SageMaker model.

*Bar‑raiser notes:* The answer shows ownership (full system design), depth (specific AWS services & trade‑offs), quantified impact (exact percentages), and learning from failure (model drift handling).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
