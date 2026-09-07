---
qid: ing_a62a96a5f3__aws__local
question: 'Explain: >> Well, so, I don''t know how — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 426
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:42:42-05:00'
sources: []
---

**Situation & Task** – While leading a fraud‑prevention team at my previous company, we had to detect anomalous credit‑card transactions in real time. The goal was to reduce false positives by 30 % while keeping latency under 200 ms per request.

**Action** – I built an end‑to‑end pipeline on AWS:

1. **Data ingestion** – Kinesis Data Streams (shard 2) for 10 k TPS, backed by Lambda for schema validation.  
2. **Feature store** – DynamoDB + SageMaker Feature Store to keep a rolling window of user behaviour; updates are batched every minute via Glue jobs.  
3. **Model** – A two‑stage architecture:  
   *Stage 1* – Isolation Forest (SageMaker training) for global outliers, 10 % false positives.  
   *Stage 2* – Autoencoder in PyTorch on SageMaker Neo for local anomalies; batch inference via BatchTransform and real‑time scoring via SageMaker Endpoint (multi‑AZ).  
4. **Explainability** – SHAP values surfaced through QuickSight dashboards to ops, enabling rapid triage.  

I added a **canary deployment** with Lambda@Edge to route 5 % traffic to the new model, monitored via CloudWatch metrics. The system achieved a 32 % drop in false positives and cut fraud losses by $1.2 M annually while staying under a $15 k/month budget.

**Result** – Delivered results that directly improved customer trust (Customer Obsession) and took full ownership of the ML lifecycle, demonstrating deep technical knowledge and bias for action.

*Bar‑raiser focus*: Ownership of data quality, depth in model choice (Isolation Forest vs Autoencoder), quantified impact on fraud loss, and lessons from the first canary failure where we added a fallback rule engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
