---
qid: ing_4bb3e50ab9__star__local
question: What is Regularization? — Machine Learning Interview Questions and Answers
  - GeeksforGeeks
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 316
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:59:36-05:00'
sources: []
---

**Situation:**  
In my last project I was building a logistic regression model to predict customer churn for a telecom client. The training data had over 50 correlated features and the model kept over‑fitting – validation accuracy hit 92% while test performance dropped to 78%.

**Task:**  
I needed to reduce over‑fit, improve generalization, and keep interpretability so the business could trust the feature importance.

**Action:**  
I introduced L2 regularization (Ridge) into the loss function. I tuned the λ hyperparameter using a grid search with cross‑validation, comparing AUC scores on the validation set. To monitor bias–variance trade‑off I plotted learning curves and observed the gap shrink from 15% to under 5%. I also added feature scaling (StandardScaler) because regularization is sensitive to feature magnitude. Finally, I documented how adding the penalty term modified the gradient descent update: w ← w – α(∂L/∂w + λw).

**Result:**  
Validation AUC rose from 0.85 to 0.92 and test accuracy improved to 86%. The model became more robust to new data, and feature coefficients were more stable across folds. I learned that choosing the right regularization strength is a balance: too low leaves over‑fit; too high hurts bias – careful cross‑validation is key.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
