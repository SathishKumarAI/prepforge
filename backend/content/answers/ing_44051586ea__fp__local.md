---
qid: ing_44051586ea__fp__local
question: 'Explain: Regression — What is Machine Learning? \u00a0|\u00a0 Google for
  Developers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 394
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:30:36-05:00'
sources: []
---

### Regression – the machine‑learning way

At its core a regression problem asks: *given an input vector \(x\), predict a real‑valued output \(y\)*.  
Why is this nontrivial? Because we rarely know the exact functional form of the mapping \(f(x)\). We only observe noisy samples \((x_i,y_i)\) from the underlying process. The learning task is to infer a function that generalises beyond the training set.

Mathematically, we pose an **optimisation problem**:

\[
\hat f=\arg\min_{f\in\mathcal F}\frac{1}{n}\sum_{i=1}^n \bigl(y_i-f(x_i)\bigr)^2 ,
\]

where \(\mathcal F\) is a hypothesis class (e.g., linear models, neural nets). The squared loss penalises large deviations and yields a convex objective for linear models, guaranteeing a unique optimum.

From an **information‑theoretic** view, each observation reduces uncertainty about the parameters. Regression can be seen as estimating the conditional expectation \(\mathbb E[Y|X=x]\), which minimises mean‑squared error by definition—this is why the optimal predictor in the population sense is the true regression function.

A subtle insight: *regularisation* (e.g., ridge, Lasso) implicitly encodes a prior belief about parameter smoothness or sparsity. It trades bias for variance, controlling overfitting—a principle that extends to Bayesian inference where regularisers are priors on coefficients.

Thus, regression is not just “fitting a line”; it’s the problem of inferring an optimal predictive function under uncertainty, grounded in optimisation, probability, and geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
