---
qid: ing_6e21086c87__faang__local
question: 'Explain: 1.1.1.1. Non-Negative Least Squares — 1.1. Linear Models \u2014
  scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 554
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:59:53-05:00'
sources: []
---

**Clarify**

You’re asking about *Non‑Negative Least Squares (NNLS)*—a linear regression variant that enforces every coefficient ≥ 0. In scikit‑learn 1.9.0 this is exposed via `sklearn.linear_model.LinearRegression` with the `positive=True` flag, or directly through `nnls` in SciPy if you want a pure NNLS solver.

**Approach**

1. **Formulate the problem:** minimize  
   \[
   \min_{\mathbf{w}\ge0}\|X\mathbf{w}-y\|_2^2
   \]
   where \(X\) is the design matrix, \(y\) the target.
2. **Choose solver:** scikit‑learn’s `LinearRegression(positive=True)` uses a coordinate‑descent variant; SciPy’s `nnls` implements the classic Lawson–Hanson algorithm (active set).
3. **Fit & predict** as with any estimator: call `.fit(X, y)` then `.predict(new_X)`.
4. **Diagnostics:** check residuals and coefficient sparsity.

**Depth**

- *Complexity*: SciPy’s `nnls` is \(O(nd^2)\) for \(n\) samples, \(d\) features; scikit‑learn’s solver runs in \(O(knd)\) where \(k\) is iterations until convergence.
- *Regularization*: You can add an L1 or L2 penalty (e.g., `Lasso` with `positive=True`) if you need further sparsity or shrinkage.
- *Numerical stability*: NNLS can be ill‑conditioned; scikit‑learn uses double precision and optional pre‑centering.

**Edge Cases**

- **All‑negative targets**: coefficients may collapse to zero—check for overfitting.
- **Highly collinear features**: leads to non‑unique solutions; regularization helps.
- **Large feature space**: coordinate descent may be slow; consider dimensionality reduction first.

**Optimize & Communicate**

Explain that NNLS is ideal when the underlying physics or domain logic forbids negative contributions (e.g., additive mixture models). Emphasize the trade‑off between interpretability (non‑negative weights) and potential bias if true coefficients could be negative. Highlight how to validate: plot predicted vs actual, inspect residuals, and use cross‑validation to guard against overfitting. Conclude by noting that scikit‑learn’s API keeps the interface familiar while enforcing positivity under the hood.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
