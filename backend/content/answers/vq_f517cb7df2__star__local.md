---
qid: vq_f517cb7df2__star__local
question: What is Cross-Validation, and how does it work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 335
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:26:57-05:00'
sources: []
---

**Situation** – In my last role as a data scientist at a fintech startup, we were building a churn prediction model for a subscription service that had just rolled out a new pricing tier. Our training set was only 4,500 customers, and early validation suggested a high accuracy of 92 %, but the live A/B test later dropped to 78 %.

**Task** – I needed to ensure our model generalised beyond the sample and identify whether we were over‑fitting to the specific cohort.

**Action** – I implemented k‑fold cross‑validation (k=5) using scikit‑learn’s `cross_val_score`. For each fold, I trained a gradient‑boosted tree on 80 % of the data, validated on the remaining 20 %, and logged the ROC‑AUC. I also performed stratified sampling to preserve churn rate distribution across folds, then averaged the scores. Afterward, I tuned hyperparameters with a grid search nested inside the CV loop to avoid leakage.

**Result** – The cross‑validated AUC dropped from 92 % to 85 %, aligning more closely with production performance. Deploying this model improved churn prediction accuracy by 12 % in the live test and reduced subscription loss revenue by $350K annually. I learned that k‑fold CV is essential for honest performance estimates, especially when data is limited or imbalanced.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
