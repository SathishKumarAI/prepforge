---
qid: ing_36a2c6026f__fp__local
question: 'Explain: 1.1.3.2.1. Using cross-validation — 1.1. Linear Models \u2014
  scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 524
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:00:28-05:00'
sources: []
---

### 1.1.3.2.1 – Using Cross‑Validation with Linear Models

**Fundamental problem**  
A linear model learns coefficients \(\beta\) by minimizing a loss \(L(y,\hat y)\). If we train on all data, the estimate is optimistically biased: it will overfit to idiosyncratic noise. We need an unbiased estimate of generalization error to tune hyper‑parameters (e.g., regularisation strength in Ridge/Lasso).

**Why cross‑validation works**  
Let the dataset be split into \(K\) folds \(\{D_k\}\). For each fold we train on \(D_{\setminus k}\) and evaluate on \(D_k\), obtaining error \(E_k\). The CV estimate is
\[
\hat E = \frac1K\sum_{k=1}^K E_k.
\]
Under mild exchangeability assumptions, \(\hat E\) is an unbiased estimator of the expected test loss. For linear models with convex losses, training on \(D_{\setminus k}\) yields a closed‑form solution (e.g., \((X^\top X + \lambda I)^{-1}X^\top y\)). The CV error can be expressed analytically in terms of the hat matrix \(H = X(X^\top X+\lambda I)^{-1}X^\top\). This reveals that CV implicitly penalises model complexity through leave‑one‑out leverage values.

**Deep principle**  
CV is a Monte‑Carlo approximation to the *expected risk* under the data generating distribution. In linear algebra terms, it estimates how perturbations in training data propagate to predictions—essentially an empirical estimate of the Fisher information matrix for \(\beta\). Thus CV connects to *information geometry*: the curvature of the loss surface dictates sensitivity to data removal.

**Non‑obvious insight**  
For **linear models with regularisation**, the leave‑one‑out error can be computed exactly in \(O(np)\) time using the Sherman–Morrison formula, without retraining. Many practitioners ignore this because they focus on implementation convenience; exploiting it yields dramatic speedups when tuning \(\lambda\).

---

*Word count: 202.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
