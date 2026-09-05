---
qid: ing_bab05ff764__star__local
question: 'Explain: Aug. 23, 2026 — Simon Willison\u2019s Weblog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 323
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:44:26-05:00'
sources: []
---

**Situation:**  
During my second year as a data scientist at a fintech startup, we were rolling out an anomaly‑detection model for fraud alerts. Our daily transaction volume was 12 M, but the model’s recall dropped to 78% after only two weeks of deployment.

**Task:**  
I had to investigate why performance degraded and redesign the training pipeline so that the model could adapt quickly without re‑training from scratch each day.

**Action:**  
I introduced an online learning framework using Scikit‑Learn’s `partial_fit` on a MiniBatch SGD classifier. First, I set up a streaming ingestion layer with Kafka that pushed new transaction batches to our Spark job every 15 minutes. The model was wrapped in a custom transformer that applied feature hashing and dropped the top 10% of noisy features identified by SHAP values. I also added an exponential decay weighting scheme so recent samples had higher influence, mitigating concept drift. Finally, I automated rollback: if the ROC‑AUC fell below 0.85 for two consecutive windows, the system would revert to the last stable checkpoint.

**Result:**  
Recall rose from 78% to 92% within a week, and false positives dropped by 35%. The online pipeline cut training time from 3 hours nightly to under 2 minutes per batch. I learned that balancing model freshness with stability requires both robust streaming infrastructure and careful feature‑weighting strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
