---
qid: ing_a1ac52e47d__star__local
question: 'Explain: Underfitting and overfitting machine learning models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 311
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:56:04-05:00'
sources: []
---

**Situation:**  
When I was building a predictive model for churn in our telecom client’s billing data, the quarterly KPI required us to reduce false positives by at least 20% while maintaining overall accuracy above 85%.

**Task:**  
I had to train a classification model that balanced bias and variance—avoiding underfitting (missing real churn signals) and overfitting (capturing noise in historical usage spikes).

**Action:**  
First, I plotted learning curves for several algorithms. The linear SVM with a high regularization parameter showed a large training‑test gap: low training accuracy but decent test performance – classic underfit. Switching to a random forest, the training accuracy jumped close to 100%, but the test accuracy collapsed, indicating overfit. To mitigate this, I performed feature engineering (aggregated call duration stats) and applied cross‑validation with early stopping for XGBoost. I also tuned `max_depth` and `min_child_weight`, and used L1 regularization on a logistic regression baseline as a sanity check. The final model combined a shallow gradient boosting tree (depth 4, 300 estimators) with dropout-style subsampling.

**Result:**  
The deployed model achieved an accuracy of 88% and cut false positives by 23%, surpassing the KPI. I learned that visualizing learning curves early saves time, and that regularization plus controlled complexity is key to keeping models generalizable while still expressive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
