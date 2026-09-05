---
qid: ing_482134b84f__star__local
question: 'Explain: have thousands of them many thousands of'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 354
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:52:42-05:00'
sources: []
---

**Situation:**  
In my last role I was leading a fraud‑detection pipeline for a payments platform that processed about 5 million transactions per day. Our model had to flag suspicious activity in real time, but the raw feature set contained over 10 000 engineered variables derived from user behavior, device metadata, and transaction history.

**Task:**  
I needed to reduce dimensionality without losing predictive power so that inference latency stayed under 50 ms per request and the training time fit within our nightly window.

**Action:**  
I first ran a feature importance sweep using XGBoost’s built‑in SHAP values on a held‑out validation set. Features with an average absolute SHAP score below 0.001 were pruned, cutting the list to about 1 200 variables. Next, I applied Principal Component Analysis (PCA) only to the remaining numeric features, retaining components that explained 99 % of variance—this brought us down to 150 principal components. For categorical fields I used target‑encoding with regularization to avoid leakage. Finally, I retrained a LightGBM model on this compressed feature set and benchmarked inference speed using Dockerized GPU containers.

**Result:**  
Inference latency dropped from ~180 ms to ~35 ms, meeting the SLA while keeping AUC at 0.96 (only a 0.01 drop). Training time fell from 3 hours to under 30 minutes, freeing up the cluster for other jobs. I learned that a hybrid approach—importance‑based pruning followed by linear compression—often yields the best trade‑off between speed and accuracy in high‑cardinality ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
