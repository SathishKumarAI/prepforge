---
qid: ing_36ceb6a2b6__fp__local
question: What Are Ridge Regression and Lasso Regression?
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 576
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:00:52-05:00'
sources: []
---

**Ridge regression** and **Lasso regression** are two classic *regularized* linear‑model techniques that address the core statistical problem: estimating coefficients \( \beta\) when predictors are noisy, collinear, or outnumber observations.

---

### The fundamental problem  
Ordinary least squares (OLS) minimizes the residual sum of squares  

\[
\min_{\beta}\; \|y-X\beta\|_2^2 .
\]

When columns of \(X\) are highly correlated, the OLS solution is unstable—small perturbations in data produce large swings in \(\hat{\beta}\). We need a *prior* that shrinks coefficients toward zero to stabilize estimates while preserving predictive accuracy.

---

### Why it must work this way  

1. **Bias–variance trade‑off**: Adding a penalty term \(P(\beta)\) increases bias but reduces variance, lowering mean‑squared error (MSE).  
2. **Convexity**: The penalties chosen keep the objective convex, guaranteeing a unique global optimum.  
3. **Interpretability**: A penalty that drives some coefficients exactly to zero yields a sparse model—useful for feature selection.

---

### Geometry and deeper principle  

- **Ridge (ℓ₂) penalty**: \(P(\beta)=\lambda \|\beta\|_2^2\). The constraint region is a *sphere*; the OLS solution is pulled toward the origin but never reaches it. This reflects a smooth, isotropic shrinkage—every coefficient is penalized equally.

- **Lasso (ℓ₁) penalty**: \(P(\beta)=\lambda \|\beta\|_1\). The constraint region is a *diamond* (cross‑polytope). Its corners lie on the axes; thus, the optimum often sits exactly on a corner, forcing some coefficients to zero. This geometric property underlies Lasso’s sparsity.

Both arise from **maximum‑entropy priors**: ℓ₂ corresponds to Gaussian priors, ℓ₁ to Laplace priors. The choice of prior dictates the shape of uncertainty in coefficient space.

---

### Non‑obvious insight  
Most people think regularization merely *shrinks* coefficients. In fact, Lasso’s sparsity comes from **geometric alignment**: the diamond constraint aligns with coordinate axes, making it easier for the optimizer to hit an axis (zero) than a ridge’s sphere, which never touches axes. Thus, the penalty shape—not just its magnitude—determines whether variables are kept or discarded.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
