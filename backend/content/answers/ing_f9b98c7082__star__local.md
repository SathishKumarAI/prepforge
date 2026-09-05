---
qid: ing_f9b98c7082__star__local
question: 'Explain: Data hygiene: splits, cross-validation, leakage'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 318
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:47:53-05:00'
sources: []
---

**Situation:** In a recent project building a churn prediction model for a telecom client, the initial training set was heavily imbalanced—only 8% of customers actually churned—and our raw logs contained timestamped events that spanned several years.

**Task:** I needed to clean the data so that the model would generalize to future periods, avoid overfitting on recent patterns, and ensure fair evaluation metrics (AUC‑ROC) before deploying it to the production pipeline.

**Action:** First, I performed a time‑based split: 70% of the earliest customers for training, 15% for validation, and 15% for testing, preserving chronological order. Then I applied k‑fold cross‑validation on the training set, but only within each temporal block to prevent leakage of future information. To handle class imbalance, I used SMOTE selectively in the training folds while keeping the validation/test sets untouched. Finally, I audited feature pipelines to confirm no target‑derived statistics (e.g., mean churn rate) were inadvertently included.

**Result:** The cross‑validated AUC rose from 0.72 to 0.84, and on the holdout set we achieved a precision‑recall area of 0.78—an improvement that translated into a projected $1.2 M annual savings for the client. I learned that rigorous temporal splits coupled with careful cross‑validation are essential to avoid subtle data leakage in real‑world AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
