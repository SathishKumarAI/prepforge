---
qid: ing_f9ca72959e__fp__local
question: 'Explain: Ridge and Lasso Regression in Python - Analytics Vidhya'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 461
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:50:41-05:00'
sources: []
---

**Ridge & Lasso: Why regularisation matters**

The core optimisation problem for ordinary least squares (OLS) is  

\[
\min_{\beta}\|y-X\beta\|^2 .
\]

When \(X^\top X\) is ill‑conditioned or \(\text{rank}(X)<p\), the OLS solution explodes and becomes highly variable.  
Regularisation augments the loss with a penalty on the size of the coefficients:

* **Ridge**: \(\displaystyle
\min_{\beta}\|y-X\beta\|^2 + \lambda\|\beta\|_2^2\)  

  The \(L_{2}\) term shrinks all coefficients toward zero but never exactly to zero. Geometrically, the feasible set is a sphere; the intersection with the OLS contours pulls the solution inward, reducing variance while preserving interpretability.

* **Lasso**: \(\displaystyle
\min_{\beta}\|y-X\beta\|^2 + \lambda\|\beta\|_1\)  

  The \(L_{1}\) ball has sharp corners aligned with axes. When the OLS contour touches a corner, one or more coefficients are forced to exactly zero—this is *sparsity*. Thus Lasso performs embedded feature selection.

**Deep insight:**  
Both penalties can be seen as Bayesian priors: Ridge corresponds to a Gaussian prior on \(\beta\), while Lasso corresponds to a Laplace (double‑exponential) prior. The Laplace’s heavy tails encourage sparsity because the likelihood is “less penalised” for large coefficients, yet the sharp peak at zero drives many weights to vanish. Recognising this Bayesian equivalence clarifies why tuning \(\lambda\) trades bias for variance and how different priors shape model complexity.

In Python (scikit‑learn), `Ridge(alpha=λ)` and `Lasso(alpha=λ)` instantiate these optimisations, letting you tune \(\lambda\) via cross‑validation to balance prediction accuracy against interpretability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
