---
qid: ing_592928f028__faang__local
question: 'Explain: 1.1.3.2.3. AIC and BIC criteria — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 585
total_tokens: 850
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:11:03-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *Akaike Information Criterion (AIC)* and *Bayesian Information Criterion (BIC)* as they appear for linear models in scikit‑learn 1.9.0, and how they help choose among competing regressions.

---

**Approach**  
1. Define each criterion mathematically.  
2. Show how the likelihood of a Gaussian linear model is computed from residual sum of squares (RSS).  
3. Explain the penalty term involving number of parameters *k* and sample size *n*.  
4. Relate to scikit‑learn’s `AIC`/`BIC` attributes on fitted estimators.

---

**Depth**  

| Criterion | Formula | Interpretation |
|-----------|---------|----------------|
| **AIC**   | \(\displaystyle AIC = n\ln\!\Big(\frac{RSS}{n}\Big)+2k\) | Lower values → better trade‑off between fit and complexity. |
| **BIC**   | \(\displaystyle BIC = n\ln\!\Big(\frac{RSS}{n}\Big)+k\ln(n)\) | Stronger penalty for extra parameters; asymptotically consistent for the true model. |

- *RSS* is the residual sum of squares from the fitted linear regression.  
- *k* counts all estimated coefficients (including intercept).  
- For scikit‑learn’s `LinearRegression`, after calling `.fit(X, y)`, one can access `model.aic_` and `model.bic_`. The library internally computes RSS, then applies the above formulas.

---

**Edge Cases**  

- **Small n**: BIC’s \(\ln(n)\) term may be very small, making it behave similarly to AIC.  
- **Multicollinearity**: Inflated variance leads to larger RSS; both criteria can mislead if parameters are not identifiable.  
- **Non‑Gaussian errors**: The formulas assume Gaussian residuals; with heavy tails the criteria become less reliable.

---

**Optimize & Communicate**  

To use AIC/BIC effectively:
1. Fit candidate models (e.g., different feature subsets).  
2. Compare `aic_`/`bic_` values; pick the lowest.  
3. Validate chosen model on a hold‑out set to guard against overfitting.

Explain that in practice, BIC is preferred when you suspect the true model lies among candidates (model selection consistency), while AIC is useful for predictive performance with fewer assumptions. This structured reasoning demonstrates clear communication, depth of understanding, and practical application—key signals for FAANG interview success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
