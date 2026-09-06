---
qid: ing_592928f028__think__local
question: 'Explain: 1.1.3.2.3. AIC and BIC criteria — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 221
output_tokens: 619
total_tokens: 840
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:53:41-05:00'
sources: []
---

**Metacognitive Checklist for Explaining AIC/BIC in the Context of Scikit‑Learn’s Linear Models**

| # | What to Clarify / Assumptions |
|---|--------------------------------|
| 1 | Confirm the audience’s familiarity with statistical model selection (AIC, BIC) and with scikit‑learn’s API. Assume they know `LinearRegression`, `LogisticRegression`, etc., but not the underlying likelihood formulas. |
| 2 | Note that scikit‑learn does **not** expose AIC/BIC directly; we must compute them manually from the model output (residuals, number of parameters). |

| # | Mental Model / Framework |
|---|--------------------------|
| 3 | Treat AIC/BIC as *penalized likelihood* criteria: lower values indicate a better trade‑off between fit and complexity. |
| 4 | Map each component to scikit‑learn terms: `n_samples`, `n_features` → number of parameters; residual sum of squares or log‑likelihood from predictions. |

| # | Step‑by‑Step Reasoning |
|---|------------------------|
| 5 | Derive the likelihood for a linear Gaussian model (RSS, σ²). |
| 6 | Express AIC = `2k - 2ln(L)` and BIC = `ln(n)·k - 2ln(L)`, where `k` is number of estimated parameters. |
| 7 | Show how to compute `k` in scikit‑learn: `coef_` length + intercept if fitted. |
| 8 | Provide a code snippet using the model’s `predict` and residuals to calculate `RSS` → σ² estimate → log‑likelihood. |
| 9 | Compute AIC/BIC, explain interpretation (compare models with different feature sets). |

| # | Common Traps & How to Avoid Them |
|---|---------------------------------|
|10 | Forget that scikit‑learn’s linear models assume *fixed* design matrix; the penalty should count only *estimated* parameters. |
|11 | Misunderstand that BIC uses `ln(n)` not `n`; double‑check the formula. |
|12 | Assume AIC/BIC are built‑in—clarify they must be coded manually. |

| # | Sanity Checks & Communication Tips |
|---|------------------------------------|
|13 | Verify units: log‑likelihood should be negative; adding `2k` makes AIC positive. |
|14 | Explain the intuition behind the penalty term (complexity vs. sample size). |
|15 | End with a quick “What if” question: *How would AIC/BIC change if we added an interaction term?”* to reinforce understanding. |

Use this scaffold whenever you need to explain or implement AIC/BIC for scikit‑learn linear models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
