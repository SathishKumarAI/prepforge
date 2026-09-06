---
qid: ing_f40812104d__fp__local
question: How Does Lasso Regression Work? — Ridge and Lasso Regression in Python -
  Analytics Vidhya
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 423
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:37:39-05:00'
sources: []
---

**Why Lasso is needed**

In linear models we minimise the *residual sum of squares*  
\( \min_{\beta}\|y-X\beta\|_2^2 \).  
When many predictors are correlated, ordinary least squares (OLS) gives
unstable estimates; regularisation adds a penalty that trades bias for variance.

**First‑principle derivation**

Lasso introduces an \(L_{1}\) penalty:

\[
\min_{\beta}\;\|y-X\beta\|_2^2 \quad+\quad \lambda\sum_{j=|\beta_j|}
\]

The KKT conditions show that for any coefficient whose absolute value is
below a threshold, the gradient of the loss cannot be balanced by the penalty;
hence that coefficient is set exactly to zero.  
Geometrically, the feasible region is a diamond (cross‑polytope).  
When the ellipsoidal contours of the least‑squares loss first touch this
diamond, they typically hit one of its corners—forcing some coordinates to be
zero.

**Connection to deeper principles**

* **Sparsity as an information‑theoretic prior:** Lasso implicitly assumes that most features are irrelevant; it implements a *maximum‑entropy* prior that prefers the simplest (fewest non‑zero) model.
* **Convex optimisation with subgradients:** The \(L_{1}\) norm is convex but not differentiable at zero; algorithms like coordinate descent exploit this structure.

**Non‑obvious insight**

The sparsity of Lasso comes from *geometric alignment*, not the magnitude
of \(\lambda\).  Even a tiny penalty can eliminate variables if the data’s
design matrix aligns such that the loss contours touch a diamond corner.
Thus, Lasso’s power lies in exploiting the shape of the feasible set,
not merely shrinking coefficients.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
