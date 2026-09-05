---
qid: ing_3aba242808__fp__local
question: 'Explain: 1.1.4. Multi-task Lasso — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 508
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:09:42-05:00'
sources: []
---

**Multi‑Task Lasso (scikit‑learn)**  
The core problem is *jointly* learning several linear regressions \(y^{(k)} = X\beta^{(k)} + \varepsilon^{(k)}\) for tasks \(k=1,\dots,K\). If the predictors are shared across tasks, we can impose a **group sparsity** penalty that forces entire columns of the coefficient matrix \(\Theta=[\theta_1,\dots,\theta_p]\) to be zero.  

Formally, we solve  

\[
\min_{\Theta}\;
\frac{1}{2N}\sum_{k=1}^{K}\|y^{(k)}-X\theta_k\|_2^2
+\lambda \sum_{j=1}^p \|\theta_j\|_2 ,
\]

where \(\theta_j=(\theta_{1j},\dots,\theta_{Kj})^\top\) is the vector of coefficients for feature \(j\) across all tasks.  
The ℓ₂ norm inside the sum is a *group lasso* penalty: it couples the tasks, encouraging that either a feature participates in **all** regressions or none at all. This is crucial when we believe shared structure (e.g., same underlying biology) governs multiple outcomes.

Why this works:  
- The quadratic loss guarantees convexity and differentiability with respect to each \(\theta_k\).  
- The group penalty is *convex* but non‑smooth, promoting sparsity at the feature level while preserving smoothness within a task.  
- The optimization reduces to solving a series of block‐coordinate descent updates or proximal gradient steps; the proximal operator for the ℓ₂ norm is simply soft‑thresholding each column.

**Non‑obvious insight:**  
The group penalty’s *ℓ₂* component ensures that once a feature survives the threshold, its coefficients across tasks are **scaled proportionally**, not independently. This implicit coupling can act as a regularizer on the *covariance* between tasks, effectively learning a shared latent structure without explicitly modeling task correlations. Thus Multi‑Task Lasso is not just a multitask extension of lasso—it also serves as an elegant way to discover common predictive patterns across related problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
