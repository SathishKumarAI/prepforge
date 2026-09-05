---
qid: ing_8c587d9922__star__local
question: 'Explain: Databricks System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 390
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:13:26-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a real‑time fraud detection pipeline for a credit card processor. The data lake was on Azure Data Lake Storage, and we needed to ingest millions of transactions per day, train models nightly, and serve predictions with <50 ms latency.

**Task:**  
Design an end‑to‑end Databricks architecture that could handle high ingestion rates, provide reproducible ML training, and expose a low‑latency inference API while keeping costs under $5k/month.

**Action:**  
I chose the Delta Lake format for ACID writes and time‑travel. For streaming I set up Structured Streaming jobs on a 4 node Spark cluster (auto‑scaling disabled to cap cost) that write to Delta tables with merge‑conflict resolution. For training, I created a separate “ML” pool using Databricks Runtime ML 13.0, leveraging PySpark + Spark MLlib for feature engineering and XGBoost for model fitting; checkpoints were stored in Azure Blob for fault tolerance. Model artifacts were versioned in MLflow, automatically registered to the staging registry. Finally, I deployed a lightweight “Model Serving” cluster (2 workers) that pulls the latest stage from MLflow, wraps the model with Flask, and exposes an HTTPS endpoint behind Azure API Management.

**Result:**  
The pipeline processed 8 M records/day with <10 s batch latency; nightly training took ~15 min. Inference latency dropped to 35 ms, meeting SLA. Monthly spend stayed at $4.2k. I learned the importance of Delta Lake for reliable ingestion, MLflow for reproducible model lifecycle, and separating compute pools to control cost while maintaining performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
