---
qid: ing_9d175993da__fp__local
question: 'Explain: Week 3: Classification — Supervised Machine Learning: Regression
  and Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 485
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:39:20-05:00'
sources: []
---

**Week 3 – Classification & Regression (Supervised Learning)**  
At its core the problem is *function approximation*: given labeled pairs \((x_i,y_i)\), we want a mapping \(f\) that predicts \(y\) for new inputs.  For **regression**, \(y\in\mathbb R\); for **classification**, \(y\in\{1,\dots,K\}\).  
The learning algorithm solves  

\[
\min_{w,b} \; \frac{1}{N}\sum_{i=1}^{N} L(f(x_i),y_i) + \lambda R(w),
\]

where \(L\) is a loss (squared error for regression, cross‑entropy or hinge for classification) and \(R\) is a regularizer that controls model capacity.  
Why this form?  
* **Optimization**: The empirical risk minimization principle states the best predictor minimizes expected loss; we approximate it with sample averages.  
* **Geometry**: In linear models, decision boundaries are hyperplanes \(w^Tx+b=0\).  Minimizing a convex surrogate (hinge or logistic) yields the maximal‑margin separator that generalizes well—an outcome of *support vector* geometry.  
* **Information theory**: Cross‑entropy loss is the negative log‑likelihood; minimizing it maximizes the likelihood of observing the training labels under the model, i.e., we learn the most probable distribution.

A subtle insight: **regularization in classification acts as a margin controller**, not just weight shrinkage.  In SVMs, \(\lambda\) directly scales the width of the decision band; too small and the margin collapses (overfitting), too large and the model underfits. This dual role explains why tuning \(\lambda\) is often more critical for classifiers than regressors.

In practice, we evaluate regression with RMSE or MAE, and classification with accuracy, precision/recall, or AUC, each reflecting different aspects of prediction quality relevant to the application domain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
