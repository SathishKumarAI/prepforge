---
qid: ing_32e2d36d43__fp__local
question: 'Explain: 1.1.3. Lasso — 1.1. Linear Models \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 430
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:53:01-05:00'
sources: []
---

**Lasso (Least Absolute Shrinkage and Selection Operator)**

At its core, a linear model predicts \(y=\mathbf{X}\boldsymbol{\beta}+ \varepsilon\).  
The ordinary least‑squares (OLS) solution minimises the residual sum of squares  

\[
\min_{\boldsymbol{\beta}}\|\mathbf{y}-\mathbf{X}\boldsymbol{\beta}\|_2^2 .
\]

However, OLS overfits when \(p\gg n\) or predictors are collinear.  
Lasso augments this objective with an \(\ell_{1}\)-penalty:

\[
\min_{\boldsymbol{\beta}}\;\frac{1}{2n}\|\mathbf{y}-\mathbf{X}\boldsymbol{\beta}\|_2^2
+\lambda\|\boldsymbol{\beta}\|_1 .
\]

The \(\ell_{1}\) term shrinks coefficients toward zero *and* forces many to be exactly zero, performing variable selection.  
Why the \(\ell_{1}\) norm? Geometrically, its unit ball is a cross‑polytope with sharp corners aligned with coordinate axes; when intersecting this shape with ellipsoidal OLS contours, the optimum often lands on a corner—hence sparsity.  

In scikit‑learn’s `Lasso`, \(\alpha=\lambda\) controls regularisation strength: larger \(\alpha\) → more shrinkage.  
The algorithm typically uses coordinate descent (fast and convergent for convex problems).  

**Non‑obvious insight:** Lasso is equivalent to Bayesian inference with a Laplace prior on coefficients. This links the deterministic optimisation to a probabilistic model, explaining why Lasso implicitly balances fit quality against model complexity—precisely the bias–variance trade‑off in high dimensions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
