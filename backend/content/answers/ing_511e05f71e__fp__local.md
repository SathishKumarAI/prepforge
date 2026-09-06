---
qid: ing_511e05f71e__fp__local
question: 'Explain: 1.1. Linear Models — 1.1. Linear Models \u2014 scikit-learn 1.9.0
  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 540
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:57:45-05:00'
sources: []
---

**Linear models in scikit‑learn: a principled view**

The core problem is *prediction* (regression or classification) given data \(X\in\mathbb{R}^{n\times p}\) and targets \(y\).  
A linear model assumes that the decision function is an affine combination of features:
\[
f(X)=Xw+b,
\]
where \(w\) are coefficients to be learned.  The learning task reduces to finding \((w,b)\) that minimize a *loss* measuring discrepancy between predictions and true labels, optionally plus a *regularizer* enforcing desirable properties (sparsity, smoothness).

For regression the canonical loss is squared error
\[
L_{\text{MSE}}(w)=\frac1n\sum_{i=1}^n(y_i-X_i w)^2,
\]
which yields a closed‑form solution via normal equations or QR decomposition.  
Adding an \(L_2\) penalty gives Ridge regression, solving
\[
\min_w \|y-Xw\|_2^2+\lambda\|w\|_2^2.
\]
An \(L_1\) penalty yields Lasso; the duality between sparsity and feature selection emerges from convex geometry: the \(L_1\)-ball’s corners encourage many coefficients to hit zero.

For classification, a linear model is coupled with a *link* function (e.g., logistic for binary, softmax for multi‑class).  The loss becomes cross‑entropy, and optimization uses iterative methods (Newton–Raphson or gradient descent) because no closed form exists.  Regularization again controls variance‑bias trade‑off.

**Non‑obvious insight:**  
The *kernel trick* is not merely a computational shortcut; it is a manifestation of the representer theorem: any solution to a regularized empirical risk minimization in an RKHS can be expressed as a linear combination of training points.  Thus, by replacing inner products with kernels we implicitly embed data into infinite‑dimensional spaces while keeping the optimization finite‑dimensional—an elegant bridge between geometry (feature space) and probability (likelihood).  

scikit‑learn implements these ideas in `LinearRegression`, `Ridge`, `Lasso`, `LogisticRegression`, etc., exposing hyperparameters (`alpha`, `C`) that directly encode the regularization strength, thereby giving users a transparent view of the underlying optimization landscape.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
