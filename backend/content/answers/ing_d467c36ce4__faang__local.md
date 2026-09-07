---
qid: ing_d467c36ce4__faang__local
question: 'Explain: 1.1.2.2. Classification — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 487
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:53:49-05:00'
sources: []
---

**Clarify**  
You’re asking how linear models for classification are implemented in **scikit‑learn 1.9.0**—e.g., logistic regression, perceptron, SVM with a linear kernel. I’ll assume you want the API shape, key hyperparameters, and training mechanics.

**Approach**  
Explain the underlying mathematical formulation → how scikit‑learn maps it to code → mention loss functions, regularization, solvers, and prediction workflow.

**Depth**  

| Model | Loss | Regularization | Solver |
|-------|------|----------------|--------|
| **LogisticRegression** | Log‑loss (cross‑entropy) | L1/L2/ElasticNet (`penalty`) | `liblinear`, `saga`, `lbfgs`, `newton-cg` |
| **Perceptron** | Zero‑hinge loss | None / L2 penalty | Stochastic gradient descent (SGD) |
| **LinearSVC** | Hinge loss | L2 (`penalty='l2'`) | Dual coordinate descent (`dual=True/False`) |

*Training*:  
1. Data is transformed to a dense or sparse matrix (`X`).  
2. For convex losses, the optimizer iteratively updates weights `w` (and bias `b`).  
3. Convergence is checked via tolerance on the dual gap or objective change.  

Prediction: `y_pred = sign(X·w + b)` for SVM/Perceptron; `sigmoid(X·w+b)` → class probabilities for logistic regression.

**Edge cases**  
- Highly imbalanced classes → need `class_weight` or balanced sampling.  
- Sparse high‑dimensional data → choose `saga` or `liblinear`.  
- Non‑convex loss (e.g., perceptron with margin) can get stuck; use warm starts.

**Optimize & communicate**  
For large scale, use `warm_start=True` to reuse coefficients across epochs. Report training time vs. accuracy trade‑off when tuning `C` or regularization strength. Explain that linear models scale as O(nd) for n samples and d features, making them ideal baseline before moving to kernel or deep nets.

---  
*Word count: ~200*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
