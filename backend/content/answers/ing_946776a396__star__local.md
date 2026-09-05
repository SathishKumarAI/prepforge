---
qid: ing_946776a396__star__local
question: Why are the data elements weighted? — What is the difference between Bagging
  and Boosting? | Quantdare
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 305
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:29:48-05:00'
sources: []
---

**Situation:** At my previous company we built a credit‑risk model that had to predict loan defaults with a 3% error rate for a portfolio of $120 M in loans. The training data were highly imbalanced – only 5% of borrowers defaulted, so the minority class was drowned out by the majority.

**Task:** I needed to increase predictive power on the minority class while keeping overall accuracy high, and I had to choose between bagging and boosting techniques for ensemble learning.

**Action:** I first applied a weighted cost matrix in our loss function to penalize misclassifying defaulters more heavily. Then I compared two approaches: **bagging** (Random Forest) which builds many trees on bootstrapped samples with feature randomness, providing variance reduction; and **boosting** (Gradient Boosted Trees via XGBoost) that sequentially trains weak learners, each focusing on errors of the previous ones, thus reducing bias. I tuned hyperparameters—n_estimators, max_depth, learning_rate—and used cross‑validation to measure AUC for both.

**Result:** Boosting improved the AUC from 0.81 (bagging) to 0.89 and reduced false negatives by 40%, meeting our target error rate. I learned that weighting data is essential when classes are imbalanced, and that boosting excels at correcting systematic errors whereas bagging is better for variance reduction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
