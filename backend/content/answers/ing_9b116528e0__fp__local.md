---
qid: ing_9b116528e0__fp__local
question: 'Explain: 1.1.1.2. Ordinary Least Squares Complexity'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 626
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:35:16-05:00'
sources: []
---

### Ordinary Least Squares (OLS) Complexity – a first‑principles view

**Problem setting.**  
Given \(m\) observations \((x_i,y_i)\), we fit a linear model
\(y = Xw + \varepsilon\) by minimizing the squared loss
\(\|Xw-y\|_2^2\). The closed‑form solution is  
\(w^\*=(X^{\!\top}X)^{-1}X^{\!\top}y\).

**Why this matrix product appears.**  
The normal equations \((X^{\!\top}X)w = X^{\!\top}y\) arise from setting the gradient of the loss to zero. They embody *exact* least‑squares: any \(w\) that satisfies them yields a stationary point, and because the Hessian \(2X^{\!\top}X\) is positive definite (assuming full rank), this point is the unique global minimizer.

**Computational cost.**  
Let \(p=\dim(x_i)\). Three phases dominate:

1. **Forming \(X^{\!\top}X\):** requires \(O(mp^2)\) flops (each of the \(m\) rows contributes a rank‑one update to a \(p\times p\) matrix).
2. **Cholesky factorization of \(X^{\!\top}X\):** \(O(p^3/3)\). This is cheaper than an explicit inverse, and guarantees numerical stability.
3. **Back‑substitution for \(w^\*\):** \(O(p^2)\) to solve the triangular system.

Hence the overall time complexity is  
\[
T_{\text{OLS}}(m,p)=O(mp^2+p^3).
\]
When \(m \gg p\), the quadratic term dominates; when \(p\) is large, the cubic term can dominate.

**Non‑obvious insight.**  
The *quadratic* dependence on \(m\) stems from computing a covariance matrix, not from solving a system of size \(m\). If we naïvely inverted an \(m\times m\) Gram matrix \((XX^{\!\top})^{-1}\), the cost would be \(O(m^3)\). Exploiting the fact that \(p\ll m\) (the “wide‑data” regime) reduces this to \(O(mp^2)\). Thus OLS is efficient precisely because the parameter space is low‑dimensional, not because we are solving a huge linear system. This duality between sample size and feature dimension underlies many modern large‑scale regression tricks (e.g., kernel ridge via Woodbury identity).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
