---
qid: ing_32466b8725__star__local
question: 'Explain: The day-to-day: An FDE''s four-stage loop'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 394
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:09:08-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we were tasked with delivering real‑time fraud detection for credit card transactions. The product was on a tight quarterly release schedule and any lag in data processing could mean missed revenue.

**Task:** I needed to design an end‑to‑end ML pipeline that could ingest millions of events per day, preprocess them, train a model, and serve predictions with sub‑second latency—all while keeping the system maintainable.

**Action:**  
1. **Data ingestion:** Built a Kafka stream that captured raw logs and wrote them into a time‑partitioned Delta Lake on Databricks for durability.  
2. **Feature engineering & cleaning:** Wrote Spark jobs (PySpark) to aggregate user behavior, flag outliers, and generate feature vectors, storing results in an Hudi table so we could version features.  
3. **Model training & evaluation:** Leveraged MLflow to orchestrate nightly batch training on a GPU cluster, using XGBoost with hyperparameter sweeps; evaluated against AUC‑PR curves and drift metrics.  
4. **Serving & monitoring:** Deployed the model via SageMaker endpoints behind an API Gateway, and set up Prometheus alerts for latency and prediction drift.

**Result:** The pipeline processed 3 M transactions per day, reduced fraud loss by 18% in Q2, and cut feature‑to‑prediction time from 45 min to under 5 min. I learned that a disciplined four‑stage loop—ingest → clean → train/evaluate → serve—turns raw data into reliable business value when each stage is automated and observable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
