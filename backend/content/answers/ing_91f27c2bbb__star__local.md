---
qid: ing_91f27c2bbb__star__local
question: 'Explain: Basic Requirements — Interviewnotes 2Ndjune2022'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 286
total_tokens: 526
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:24:49-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we were tasked with building a fraud‑detection model for credit card transactions. The client demanded real‑time predictions and a false‑positive rate below 2% to avoid customer churn.

**Task:** I had to design the data pipeline, select features, train an ML model, and deploy it so that latency stayed under 50 ms per request while meeting accuracy targets.

**Action:** First, I gathered transactional logs from our Kafka stream and used Spark to clean and engineer features—recency scores, merchant category one‑hot vectors, and rolling averages. I then split the data with stratified sampling and trained a LightGBM model, tuning hyperparameters via Optuna. To meet latency, I converted the final tree ensemble into a TensorRT engine for inference on our GPU nodes, reducing prediction time to 12 ms. For monitoring, I set up Prometheus alerts when the false‑positive rate drifted above 2%.

**Result:** The deployed model achieved a 1.6% false‑positive rate and an AUC of 0.97, cutting fraud losses by 18% YoY. I learned that rigorous feature engineering, careful sampling, and edge‑optimizing inference are all critical to meeting stringent ML production requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
