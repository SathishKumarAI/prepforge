---
qid: ing_592928f028__fp__local
question: 'Explain: 1.1.3.2.3. AIC and BIC criteria — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 667
total_tokens: 869
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:13:58-05:00'
sources: []
---

### Why AIC and BIC exist

When we fit a linear model \(y=X\beta+\varepsilon\) with \(\varepsilon\sim N(0,\sigma^{2}I)\), the maximum‑likelihood estimate (MLE) of \(\beta\) is obtained by ordinary least squares.  The MLE of the log‑likelihood is

\[
\ell_{\text{max}}=-\frac{n}{2}\bigl[\log(2\pi\sigma^{2})+1\bigr]
-\frac{\mathrm{RSS}}{2\sigma^{2}},
\]

where \(\mathrm{RSS}=\|y-X\hat\beta\|^{2}\).  
If we had a single candidate model, maximizing \(\ell_{\text{max}}\) would be enough.  In practice we compare many models—different subsets of predictors, different regularisation strengths, etc.—and must guard against overfitting.

### The penalty term

AIC (Akaike Information Criterion) and BIC (Bayesian Information Criterion) add a penalty for the number of free parameters \(k\).  
- **AIC**: \(\displaystyle \text{AIC}=-2\,\ell_{\text{max}}+2k.\)
  It derives from an asymptotic approximation to the Kullback–Leibler divergence between the true data‑generating process and the fitted model.  
- **BIC**: \(\displaystyle \text{BIC}=-2\,\ell_{\text{max}}+\log(n)\,k.\)
  It arises from a Laplace approximation to the marginal likelihood under a uniform prior on parameters.

Both criteria balance goodness‑of‑fit (the first term) against model complexity (the second).  The factor \(\log n\) in BIC grows faster than the constant \(2\), so BIC is more conservative when \(n\) is large.

### Connection to cross‑validation

Under Gaussian errors, AIC and BIC approximate leave‑one‑out cross‑validated log‑likelihood.  This explains why they are often close to LOOCV results but cheaper to compute: the penalty terms encode the expected optimism of the training likelihood.

### Non‑obvious insight

The *difference* between AIC and BIC is not merely a constant; it reflects **different philosophies** about model selection.  
- AIC targets predictive accuracy (minimising information loss).  
- BIC incorporates a Bayesian prior that penalises complexity more heavily, favouring the “true” model when one exists.

In practice, for linear models with many candidate predictors and moderate sample sizes, AIC tends to select richer models, whereas BIC often prunes aggressively.  Understanding this trade‑off is key to interpreting scikit‑learn’s `AIC`/`BIC` helpers in the LinearModel documentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
