---
qid: ing_95ff6a62fe__fp__local
question: 'Explain: Galileo Luna-2: Distilled Judges at Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 417
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:24:15-05:00'
sources: []
---

**Galileo Luna‑2: Distilled Judges at Scale**

The underlying problem is *model‑ensemble inference*: ensembles of sophisticated judges (e.g., large language models) deliver superior accuracy and robustness, yet their computational cost scales linearly with the number of members. The solution must preserve the ensemble’s *decision distribution*—the probability mass over possible outputs—while collapsing it into a single, tractable model.

From first principles this is an **information‑preserving compression** problem. We treat each judge as emitting a soft label \(p_i(y|x)\). The optimal distilled teacher \(q(y|x)\) must minimize the Kullback–Leibler divergence

\[
\min_{q}\; \mathbb{E}_{x}\!\left[\sum_{i} w_i\, D_{\text{KL}}\!\big(p_i(\cdot|x)\,\Vert\, q(\cdot|x)\big)\right],
\]

where \(w_i\) are importance weights. Solving this yields a *mixture‑averaged* posterior that captures the ensemble’s epistemic uncertainty while being representable by a single network.

A deeper insight is that **disagreement among judges is not noise but a signal of uncertainty**. The distilled model learns to encode this disagreement as higher entropy in its output distribution, thereby providing calibrated confidence estimates without explicit Bayesian inference. Thus, Galileo Luna‑2 achieves scalable, high‑fidelity judgment by marrying ensemble diversity with principled information theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
