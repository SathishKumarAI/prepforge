---
qid: ing_883c662e93__fp__local
question: 'Explain: Your DPO run improves win rate against the SFT model, but outputs
  are longer, waffly and hedge constantly. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 585
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:54:22-05:00'
sources: []
---

**Why the DPO policy looks “longer” and more hedgy**

When you fine‑tune a policy with *Direct Preference Optimization* (DPO), the loss

\[
L_{\text{DPO}} = \mathbb{E}_{x}\Bigl[\,\log\frac{\pi_\theta(x)}{q(x)}\,\Bigr]
\]

is minimized only on the **pairwise ranking** of two candidate continuations, not on their *absolute* quality.  
Because the reward signal is *relative*, the model learns to produce anything that can be distinguished from a competitor, even if that means adding fluff or hedging so that the generated string’s probability density is flatter and easier to rank against the baseline.

---

### Debug checklist

| Symptom | Root cause | Fix |
|---------|------------|-----|
| **Longer outputs** | The policy has learned that *any* extra token increases the chance of being ranked higher (since more tokens give more opportunities for divergence). | Add a **length penalty** to the DPO loss, e.g. \(\lambda\frac{\ell}{\bar\ell}\), or clip rewards by token count. |
| **Waffling/hedging** | The reward is *binary* (win/loss) and noisy; hedging is an easy way to keep the probability mass spread so that a competitor can’t be decisively better. | Introduce a **temperature‑controlled sampling** or add a **confidence penalty**: penalize low‑entropy logits unless the model is certain. |
| **Over‑long tails** | The policy’s likelihood ratio \(\frac{\pi_\theta}{q}\) explodes when \(q\) assigns tiny mass to rare continuations, causing runaway token generation. | Regularise with a KL term against the SFT baseline: \(\beta D_{\text{KL}}(\pi_\theta\,||\,q)\). |

---

### One non‑obvious insight

DPO optimises *pairwise preference*, not absolute likelihood.  
If you only ever compare **generated** pairs, the model can “game” the ranking by adding any extra token that changes the distribution enough to be distinguishable—this is why hedging appears.  
To counteract this, you must anchor the optimisation with an **absolute reward signal** (e.g., a scalar score from a critic or human‑rated metric). This turns the objective into a *policy gradient* problem where longer, fluffier outputs are naturally penalised for lacking real utility.

In short: add length and confidence penalties, regularise against the baseline, and introduce an absolute value term. Then your DPO policy will win more often **without** turning into a verbose hedge‑factory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
