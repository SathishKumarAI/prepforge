---
qid: vq_95eebafee1__star__local
question: What does it mean to have "imbalanced data"?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 342
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:10:31-05:00'
sources: []
---

**Situation**  
I was building a fraud‑detection model for a payment gateway that handled about 10 million transactions per month. Only 0.3% of those were flagged as fraudulent – the dataset was heavily skewed.

**Task**  
My goal was to create a classifier that could spot fraud without drowning in false positives, while keeping training time reasonable and meeting the SLA for real‑time scoring.

**Action**  
First, I quantified the imbalance by plotting class distributions and computing precision–recall curves. Then I experimented with several techniques: undersampling the majority class, oversampling with SMOTE, and using a cost‑sensitive loss function in XGBoost that penalized missed fraud cases 10× more than false alarms. I also added a custom evaluation metric (F1‑score weighted by fraud severity) to guide hyperparameter tuning. During feature engineering, I engineered transaction‑level aggregates (e.g., average amount per user over the last week) to give the model richer context.

**Result**  
The cost‑sensitive XGBoost model achieved an F1 of 0.42 on a held‑out test set—up from 0.18 with a plain logistic regression—and reduced false positives by 35% while catching 12% more fraud cases. I learned that properly defining the imbalance and aligning loss functions with business impact is key to turning raw data into actionable AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
