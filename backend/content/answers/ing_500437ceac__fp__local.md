---
qid: ing_500437ceac__fp__local
question: Your prompt change gained 3 points on the eval. How confident are you that
  it is real?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 545
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:55:22-05:00'
sources: []
---

The question reduces to a hypothesis test: *Did the new prompt genuinely improve performance or did we merely observe a lucky fluctuation?*  
Let \(p\) be the true success probability under the old prompt, and let \(q\) be that of the new one. We observe 3 extra points out of \(N\) trials, so our estimate is \(\hat{q}-\hat{p}=3/N\).  

1. **Variance of the estimator** – For binomial outcomes,  
   \[
   \operatorname{Var}(\hat{q}-\hat{p})=\frac{p(1-p)+q(1-q)}{N}\approx\frac{2p(1-p)}{N},
   \]  
   assuming \(p\simeq q\).  
   The standard error is therefore roughly \(\sqrt{2p(1-p)/N}\).

2. **Significance** – A 3‑point shift corresponds to a z‑score  
   \[
   z=\frac{3/N}{\sqrt{2p(1-p)/N}}=\frac{3}{\sqrt{2p(1-p)N}}.
   \]  
   If \(p=0.5\) and \(N=100\), \(z\approx 0.53\); the p‑value is about 0.60, far from convincing.

3. **Multiple testing bias** – If many prompt variants were tried before settling on this one, the probability of a spurious 3‑point bump rises dramatically (the “winner’s curse”).  
   Adjusting for \(k\) tests via Bonferroni gives a critical z ≈ \(1.96/\sqrt{k}\); with \(k=20\), we need \(z>0.44\) to claim significance, still weak.

**Conclusion:** With typical sample sizes (≤ 200 evaluations) and without correction for selection bias, the 3‑point gain is statistically indistinguishable from noise; confidence in a real effect remains low unless replicated across independent datasets or larger trials.  

*Non‑obvious insight:* The apparent improvement may be an artifact of *evaluation variance*, not prompt quality—small‑sample “luck” can masquerade as learning, especially when the evaluator’s own skill varies between runs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
