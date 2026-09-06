---
qid: ing_e2e72198b3__fp__local
question: 'Explain: Judge Calibration — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 469
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:02:09-05:00'
sources: []
---

**Judge Calibration in LLM Evaluation**

The core problem is that a language model’s *output quality* cannot be measured directly—it must be inferred from human or automated judgments. Those judges assign scores, but their scales are idiosyncratic: one judge may rate 7/10 for “good” while another reserves 9/10 for the same output. If we treat these ratings as if they were absolute, any downstream metric (accuracy, BLEU‑style ratios) becomes a biased estimator of real performance.

Mathematically, we model each rating \(r_i\) as a noisy observation of an underlying latent utility \(u_i\):  
\( r_i = \alpha_j\, u_i + \beta_j + \varepsilon_{ij} \),  
where \(\alpha_j\) and \(\beta_j\) capture judge‑specific scaling and bias, and \(\varepsilon_{ij}\) is random noise. The calibration task estimates \((\alpha_j,\beta_j)\) for each judge (or a global transformation for an automated metric). Once calibrated, we transform raw scores back to a common utility scale:  
\( \hat{u}_i = (\tilde r_i - \hat{\beta}_j)/\hat{\alpha}_j \).

This aligns with the statistical principle of *likelihood‑based inference*: by correcting for systematic bias and variance we obtain an unbiased estimator of model quality. Calibration also reduces inter‑judge variance, improving test–retest reliability.

**Non‑obvious insight:** Calibration is not just a post‑hoc tweak; it is a *probabilistic re‑parameterization* that turns subjective scores into likelihoods. When properly done, the calibrated scores can be treated as samples from a true distribution of model performance, enabling principled Bayesian model comparison and uncertainty quantification—something most evaluators overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
