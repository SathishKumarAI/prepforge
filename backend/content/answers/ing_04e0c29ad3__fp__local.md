---
qid: ing_04e0c29ad3__fp__local
question: 'Explain: 1.1.2.1. Regression — 1.1. Linear Models \u2014 scikit-learn 1.9.0
  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 619
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:16:13-05:00'
sources: []
---

**Why a linear model?**  
In supervised learning we want a function \(f(\mathbf{x})\) that maps an input vector \(\mathbf{x}\in\mathbb{R}^p\) to a target \(y\). The *linear* hypothesis class  
\(f(\mathbf{x})=\beta_0+\sum_{j=1}^{p}\beta_jx_j\) is the simplest non‑trivial family that satisfies two desiderata:

1. **Universality under small perturbations** – for any smooth target, a linear approximation exists locally (Taylor’s theorem).  
2. **Convexity of estimation** – the loss surface \(\sum_i(y_i-f(x_i))^2\) is quadratic in \(\beta\), guaranteeing a unique global optimum that can be found analytically.

Thus, linear models provide a *baseline* with closed‑form solutions and interpretable coefficients.

**Why least squares?**  
The ordinary least squares (OLS) estimator minimizes the sum of squared residuals. This choice is equivalent to assuming Gaussian noise \(\epsilon\sim N(0,\sigma^2)\); OLS then becomes the maximum likelihood estimate. Mathematically, solving  
\[
\min_{\beta}\|y-X\beta\|_2^2
\]
yields \(\hat{\beta}=(X^\top X)^{-1}X^\top y\), provided \(X^\top X\) is invertible. If the matrix is ill‑conditioned, ridge regularization adds \(\lambda I\) to stabilize the inverse:  
\[
\hat{\beta}_{ridge}=(X^\top X+\lambda I)^{-1}X^\top y.
\]

**Connection to geometry**  
OLS projects \(y\) orthogonally onto the column space of \(X\). The residual vector is perpendicular to that subspace, ensuring no further reduction in error by moving within it. Ridge shrinks this projection toward the origin, trading bias for variance.

**Non‑obvious insight**  
The *effective dimensionality* of a linear model depends not just on the number of features \(p\), but on their correlation structure. When predictors are highly collinear, \(\operatorname{rank}(X)\) drops, making the problem ill‑posed. Regularization implicitly re‑weights this geometry: in principal component space, ridge penalizes components with small eigenvalues more heavily, effectively performing a *soft* dimensionality reduction without discarding variables outright.

Scikit‑learn’s `LinearRegression` implements OLS; `Ridge`, `Lasso`, and `ElasticNet` add ℓ₂/ℓ₁ penalties for robustness. These classes expose the same underlying linear algebra but allow practitioners to balance interpretability, bias, and variance according to their data’s geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
