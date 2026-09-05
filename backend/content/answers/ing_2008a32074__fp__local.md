---
qid: ing_2008a32074__fp__local
question: 'Explain: Function for Ridge Regression — Ridge and Lasso Regression in
  Python - Analytics Vidhya'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 563
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:14:10-05:00'
sources: []
---

**Why Ridge & Lasso?**  
When the design matrix \(X\in\mathbb{R}^{n\times p}\) is ill‑conditioned or \(p>n\), ordinary least squares (OLS)
\( \hat{\beta}_{\text{OLS}} = (X^\top X)^{-1}X^\top y\) becomes unstable: tiny perturbations in \(y\) blow up the estimates.  
Both regularisers *penalise* large coefficients to stabilise the inverse, but they do it differently.

---

### Ridge (ℓ₂ penalty)

Minimise
\[
J_{\text{ridge}}(\beta)=\|y-X\beta\|_2^2+\lambda \|\beta\|_2^2 .
\]
The gradient gives  
\( (X^\top X + \lambda I)\beta = X^\top y\), so

\[
\hat{\beta}_{\text{ridge}}=(X^\top X+\lambda I)^{-1}X^\top y.
\]

*Why it works:* The added term \(\lambda I\) shifts eigenvalues of \(X^\top X\) away from zero, making the matrix invertible and reducing variance at a cost of bias—an instance of the **bias–variance trade‑off**.

---

### Lasso (ℓ₁ penalty)

Minimise
\[
J_{\text{lasso}}(\beta)=\|y-X\beta\|_2^2+\lambda \|\beta\|_1 .
\]
Unlike Ridge, the ℓ₁ norm is **non‑smooth**; its subgradient leads to a *soft‑threshold* solution.  
Coordinate descent or proximal gradient methods solve it efficiently.

*Why it works:* The ℓ₁ penalty induces sparsity because the geometry of the constraint \(\|\beta\|_1\le t\) has corners aligned with coordinate axes—coefficients are “pushed” to zero unless strongly supported by data. This is a concrete illustration of **convex optimisation over polyhedral sets**.

---

#### Non‑obvious insight  
Both penalties can be seen as imposing *prior beliefs* on \(\beta\): Ridge assumes a Gaussian prior \(N(0,\sigma^2 I)\); Lasso corresponds to a Laplace prior. Thus, regularisation is not just numerical trickery—it encodes Bayesian assumptions about the underlying parameters. Understanding this duality clarifies why tuning \(\lambda\) controls the *strength of belief* versus data evidence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
