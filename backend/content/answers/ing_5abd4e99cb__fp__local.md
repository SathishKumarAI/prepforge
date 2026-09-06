---
qid: ing_5abd4e99cb__fp__local
question: 'Explain: Your offline evals improved but the online metric dropped after
  launch. Walk me through the investigation.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 559
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:17:14-05:00'
sources: []
---

**Why the offline win didn’t translate to a live boost**

1. **Fundamental problem** – we optimise for *expected reward* \(R=\mathbb{E}_{p_{\text{offline}}}[f(\theta)]\) on a held‑out set, but the online metric is \(\mathbb{E}_{p_{\text{live}}}[g(\theta)]\).  
2. **Why it must work** – if \(p_{\text{offline}}\approx p_{\text{live}}\) and \(f=g\), then maximizing \(R\) maximises the live KPI (law of large numbers + unbiased estimator).  
3. **Deviations that break this link**  
   * **Distribution shift**: user‑demographic drift, new content categories, or seasonal effects alter \(p_{\text{live}}\).  
   * **Metric mismatch**: offline proxy (e.g., click‑through) is a noisy, short‑term signal for the live KPI (e.g., long‑term engagement).  
   * **Evaluation bias**: overfitting to the validation split, or leakage from the training set.  

4. **Investigation pipeline**  
   1. **Quantify shift** – compute KL divergence between offline and live feature distributions; run covariate shift tests (e.g., KS test).  
   2. **Metric alignment check** – correlate offline scores with online outcomes on a recent “shadow” deployment; if correlation < 0.5, the proxy is weak.  
   3. **Causal diagnostics** – use instrumental variables or A/B‑controlled experiments to isolate model effect from confounders (e.g., time of day).  
   4. **Robustness checks** – re‑train with domain‑adversarial loss to minimise sensitivity to distribution changes.

5. **Non‑obvious insight** – *offline accuracy is only a necessary, not sufficient, condition for online lift*. A model that performs best on a static validation set can still hurt live performance if it learns spurious correlations that vanish under real user dynamics. Thus, the true test is whether the learned policy generalises to the **causal structure** of the deployment environment, not just to its statistical snapshot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
