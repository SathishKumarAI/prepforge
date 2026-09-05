---
qid: ing_0b79583c13__star__local
question: 'Explain: ML design interview — Meta Machine Learning Engineer (MLE) Interview
  Guide | Sample Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 313
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:51:52-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we had an internal fraud‑detection system that was flagging legitimate transactions too often, dropping our conversion rate by 12 %. The engineering team wanted to redesign the model pipeline before the Q3 launch.

**Task** – My job was to build a new end‑to‑end ML workflow: ingest streaming logs, train a scalable anomaly detector, and deploy it with minimal latency while keeping explainability for compliance.

**Action** – I first used Apache Kafka for real‑time data ingestion, then Spark Structured Streaming to aggregate features on the fly. For modeling I chose XGBoost due to its interpretability and GPU support; I tuned hyperparameters via Optuna, achieving a 5 % ROC‑AUC lift over the baseline. To satisfy regulatory audit, I integrated SHAP value generation into the inference API (FastAPI) so each prediction could be explained in under 50 ms. Finally, I containerized the pipeline with Docker and orchestrated it on Kubernetes, setting up Prometheus alerts for drift.

**Result** – The new system cut false positives by 30 %, boosting revenue by $1.2 M over two months. Latency stayed below 120 ms, meeting SLA. I learned how to balance model performance with operational constraints and the importance of explainability in regulated domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
