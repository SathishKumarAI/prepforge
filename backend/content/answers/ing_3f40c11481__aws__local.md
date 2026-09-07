---
qid: ing_3f40c11481__aws__local
question: 'Explain: There are two general approaches when it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 420
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:48:46-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“When building an ML solution, there are two general approaches: **model‑centric** versus **data‑centric**.”*  

**Situation** – I led a fraud‑detection project for a payment gateway where latency < 10 ms and false positives < 0.5 %.  
**Task** – Decide whether to invest in feature engineering (data‑centric) or in advanced algorithms (model‑centric).  
**Action** –  

1. **Model‑centric**: Trained XGBoost, LightGBM, and a 12‑layer neural net on the same 5 M transaction log. Evaluated AUC, precision@k, and inference time using SageMaker endpoints.  
2. **Data‑centric**: Built a feature pipeline in Glue/Databricks that aggregated user behavior, device fingerprints, and network anomalies; then fed these into a simple logistic regression.

I benchmarked both pipelines on a 1 M holdout set. The data‑centric route achieved **AUC 0.93 vs. 0.88** for the best model‑centric run while cutting inference cost by **35 %** (SageMaker real‑time endpoints → batch transform).  

**Result** – I chose the data‑centric approach, deployed it in production on a serverless Glue + SageMaker Batch Transform, and reduced fraud losses by **$1.2M annually** (15 % YoY drop).  

**Leadership Principles** – *Customer Obsession* (minimize false alarms), *Dive Deep* (feature vs. algorithm trade‑offs), *Ownership* (end‑to‑end pipeline), *Bias for Action* (quick A/B test).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
