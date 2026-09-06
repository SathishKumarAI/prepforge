---
qid: ing_69c359de50__fp__local
question: 'Explain: 1.1.1. Ordinary Least Squares — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 406
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:49:24-05:00'
sources: []
---

**Ordinary Least Squares (OLS) – the backbone of linear regression**

At its core, OLS solves a *minimum‑error* problem: given input vectors \(x_i\in\mathbb R^p\) and responses \(y_i\in\mathbb R\), find weights \(w\) that minimise  
\[
J(w)=\sum_{i=1}^n (y_i-x_i^\top w)^2 .
\]
Why squared loss? It is the *unique* convex, differentiable function whose gradient vanishes exactly when the residuals are orthogonal to every predictor—a geometric condition guaranteeing a global optimum. Taking derivatives yields the normal equations  
\[
X^\top X\,w = X^\top y ,
\]
where \(X\) stacks the \(x_i\). If \(X^\top X\) is invertible, the closed‑form solution is \(w=(X^\top X)^{-1}X^\top y\); otherwise we use a pseudoinverse or regularisation.

In scikit‑learn’s `LinearRegression`, this algebraic machinery is wrapped in an object that:
1. **Fits** by computing the pseudoinverse (`np.linalg.pinv`) to handle rank deficiency.
2. **Predicts** via matrix multiplication, exploiting BLAS for speed.
3. **Reports** diagnostics (e.g., R²) derived from residual sums of squares.

*Non‑obvious insight:* OLS is *unbiased* only when predictors are orthogonal and errors have zero mean. In real data, multicollinearity inflates variance; regularised variants (`Ridge`, `Lasso`) trade a little bias for substantial variance reduction, improving generalisation—an embodiment of the bias‑variance dilemma in action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
