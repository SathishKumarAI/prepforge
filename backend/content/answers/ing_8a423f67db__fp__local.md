---
qid: ing_8a423f67db__fp__local
question: 'Explain: Ridge and Lasso Regression in Python — Ridge and Lasso Regression
  in Python - Analytics Vidhya'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 625
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:58:56-05:00'
sources: []
---

**Why do we regularise?**  
In linear regression the cost is  

\[
J(\beta)=\|y-X\beta\|^2 .
\]

When \(X^\top X\) is ill‑conditioned or when the number of features exceeds samples, many minimisers exist and \(\hat\beta\) has huge variance.  
We want a unique, stable solution – we *penalise* large coefficients to trade bias for variance.

---

### Ridge (ℓ₂)

Add \(\lambda\|\beta\|_2^2\):

\[
J_{\text{ridge}}(\beta)=\|y-X\beta\|^2+\lambda\sum_j\beta_j^2 .
\]

The closed‑form solution is  

\[
\hat\beta_{\text{ridge}}
=(X^\top X+\lambda I)^{-1}X^\top y .
\]

Mathematically, the penalty shrinks every coefficient toward zero but never exactly to it.  
Geometrically, the ℓ₂ ball (a sphere) intersects the quadratic loss ridge smoothly; the intersection is unique and continuous in \(\beta\).

---

### Lasso (ℓ₁)

Add \(\lambda\|\beta\|_1=\lambda\sum_j|\beta_j|\):

\[
J_{\text{lasso}}(\beta)=\|y-X\beta\|^2+\lambda\sum_j|\beta_j|.
\]

Unlike ridge, there is no closed form; we solve a convex optimisation (e.g., coordinate descent).  
The ℓ₁ ball is a diamond; its corners lie on axes. Hence the optimum often falls exactly on a corner, forcing some \(\beta_j=0\) – *automatic feature selection*.

---

### One non‑obvious insight  

Both penalties are *convex* but only lasso’s subgradient at zero can be infinite.  
This subtle property explains why lasso sometimes “jumps” from 0 to a finite value as \(\lambda\) decreases, whereas ridge changes smoothly. In practice, this means the path of lasso coefficients is piecewise linear; we can compute all solutions efficiently with the *Least Angle Regression* (LARS) algorithm.

---

#### Python snippet

```python
from sklearn.linear_model import Ridge, Lasso
ridge  = Ridge(alpha=1.0).fit(X, y)
lasso  = Lasso(alpha=0.1).fit(X, y)

print("Ridge non‑zeros:", ridge.coef_.nonzero())
print("Lasso non‑zeros:", lasso.coef_.nonzero())
```

The key is choosing \(\lambda\) (via cross‑validation) to balance bias–variance and, for Lasso, sparsity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
