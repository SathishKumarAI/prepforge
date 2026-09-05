---
qid: vq_ea55a2468d__star__local
question: What should you do if you're Overfitting or Underfitting?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 297
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:25:17-05:00'
sources: []
---

**Situation** – While building a churn prediction model for our SaaS client, the training accuracy hit 98% but the hold‑out validation was only 72%. The production deployment later underperformed by 15%, dropping user retention.

**Task** – I had to diagnose whether the model was overfitting or underfitting and quickly bring its generalization back into line without sacrificing performance.

**Action** – First, I plotted learning curves: training loss stayed flat while validation loss plateaued—classic overfit. I then applied a combination of techniques: reduced feature dimensionality with PCA to 30 components, added L2 regularization (α=0.01) in the logistic regression, and switched to an XGBoost ensemble with early stopping after 200 rounds. I also increased training data by augmenting synthetic churn instances via SMOTE to balance classes.

**Result** – Validation accuracy jumped from 72% to 88%, and on a live A/B test the model improved churn prediction recall by 12% while keeping precision stable. The deployment error margin shrank to under 3%. I learned that balancing feature complexity, regularization, and data augmentation is key, and that monitoring learning curves early can preempt costly production failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
