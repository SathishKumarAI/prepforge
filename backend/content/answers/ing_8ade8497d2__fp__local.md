---
qid: ing_8ade8497d2__fp__local
question: 'Explain: 1.1.2.4. Setting the regularization parameter: leave-one-out Cross-Validation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 527
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:59:50-05:00'
sources: []
---

**Setting the regularization parameter by Leave‑One‑Out CV**

Suppose we fit a model \(f_\lambda\) that depends on a scalar regularizer \(\lambda\). The goal is to choose \(\lambda\) so that the expected prediction error  
\(E[(y-f_\lambda(x))^2]\) is minimized. Since the true distribution is unknown, we approximate this risk by an empirical surrogate. Leave‑One‑Out (LOO) CV does exactly that: for each observation \(i\) it trains on all other points and evaluates the loss on \((x_i,y_i)\). The LOO estimate

\[
\widehat{R}_{\text{LOO}}(\lambda)=\frac1n\sum_{i=1}^n\ell\bigl(y_i,f_{\lambda,-i}(x_i)\bigr)
\]

is an almost‑unbiased estimator of the true risk for *any* \(\lambda\). The unbiasedness follows from symmetry: every data point is left out exactly once, so the training set in each fold has size \(n-1\) and mirrors the random sampling process that generates a new test point. Consequently minimizing \(\widehat{R}_{\text{LOO}}\) yields the \(\lambda\) that best generalizes.

**Deeper principle:** LOO CV is an *exact leave‑one‑out cross‑validation*, which is equivalent to the leave‑\(k\)-fold estimator with \(k=n\). It implements a **leave‑\(n-1\)** resampling scheme that preserves the full training set size, thus keeping variance of the estimate low while still providing unbiasedness. In linear models it admits a closed form via influence functions, revealing that LOO error equals the in-sample error plus a correction term proportional to leverage—linking regularization to data geometry.

**Non‑obvious insight:** For many regularized estimators (e.g., ridge regression), the LOO risk can be computed *without* retraining \(n\) times; it is an analytic function of \(\lambda\). This means that, although LOO CV sounds computationally expensive, it is often tractable and provides a principled way to tune \(\lambda\) while respecting the bias‑variance tradeoff inherent in regularization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
