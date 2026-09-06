---
qid: ing_4344a09046__fp__local
question: 'Explain: kappa < 0.6: Poor agreement (rewrite criteria)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 400
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:28:44-05:00'
sources: []
---

**Kappa (\(\kappa\)) is a measure of *agreement beyond chance* between two raters or algorithms.**  
Let \(p_o\) be the observed proportion of identical labels and \(p_e\) the expected agreement if both parties were guessing according to their marginal label distributions.  The classical formula  

\[
\kappa=\frac{p_o-p_e}{1-p_e}
\]

normalises the raw difference \(p_o-p_e\) by the maximum possible excess over chance, which is \(1-p_e\).  
The denominator forces \(\kappa=1\) when the raters are perfect and \(\kappa=0\) when their agreement equals what would be expected by random guessing.  A negative value means they agree less often than chance—an implausible or systematic conflict.

Because \(p_e\) can vary widely with class imbalance, \(\kappa\) is *scale‑invariant*: it always ranges from –1 to 1 regardless of how skewed the data are.  
The conventional thresholds (e.g., <0.6 = poor) arise empirically: in many applied settings a value below 0.6 indicates that the excess agreement is not statistically significant compared with what would be expected under random labeling, given typical sample sizes and class distributions.

**Non‑obvious insight:**  
When \(\kappa\) is low but \(p_o\) is high, it often signals *label prevalence bias*: one rater consistently overuses a frequent class.  In such cases the raw agreement looks good, yet the model’s errors are systematic and hard to detect unless you examine \(\kappa\). This subtlety underscores why \(\kappa\) should be paired with confusion‑matrix diagnostics in AI evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
