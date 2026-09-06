---
qid: ing_f0240addfb__fp__local
question: 'Explain: Self-Consistency (Majority Voting) — Ensemble Methods'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 506
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:29:51-05:00'
sources: []
---

**Self‑consistency (majority voting) in ensemble learning**

*Fundamental problem.*  
A single learner \(f\) maps an input \(\mathbf{x}\) to a label. Its prediction error is
\[
R(f)=\mathbb{E}_{(\mathbf{x},y)}[\ell(f(\mathbf{x}),y)].
\]
If the hypothesis space is limited, any \(f\) carries unavoidable *bias*; if we increase capacity, *variance* grows.

*Ensemble construction.*  
Let \(\{f_i\}_{i=1}^M\) be independently trained on bootstrapped or otherwise perturbed data. Define the ensemble predictor
\[
\hat y(\mathbf{x})=\operatorname{mode}\{f_1(\mathbf{x}),\dots,f_M(\mathbf{x})\},
\]
i.e., majority vote.

*Why it reduces error.*  
Assume each base learner errs independently with probability \(p<0.5\). The ensemble error is
\[
P_{\text{ens}}=\sum_{k>\!M/2}\binom{M}{k}p^k(1-p)^{M-k},
\]
which decays exponentially in \(M\). Thus, majority voting converts *bias‑dominated* errors into a *probabilistic consensus*, exploiting the law of large numbers: the correct label becomes overwhelmingly likely.

*Connection to deeper principles.*  
- **Bias–variance trade‑off:** Each \(f_i\) may be high‑variance but low‑bias; averaging (or voting) suppresses variance while preserving bias.  
- **Information theory:** The ensemble’s entropy about the true label is lower than that of any single learner, because it aggregates diverse evidence.  
- **Geometry:** Voting corresponds to projecting predictions onto a discrete manifold defined by majority constraints, which smooths irregular decision boundaries.

*Non‑obvious insight.*  
The *majority threshold* need not be 50 %; adjusting the voting rule (e.g., requiring a higher confidence level) can compensate for systematic bias in the base models. This subtle calibration often yields larger gains than merely increasing \(M\).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
