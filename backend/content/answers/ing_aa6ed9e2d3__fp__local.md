---
qid: ing_aa6ed9e2d3__fp__local
question: 'Explain: On-policy distillation — best of both worlds'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 497
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:07:28-05:00'
sources: []
---

**On‑policy distillation: the “best of both worlds”**

At its core, a reinforcement learning (RL) agent seeks a policy \(\pi(a|s)\) that maximises expected return. Classical *distillation* takes a high‑capacity teacher and trains a smaller student to mimic its action labels; this is efficient but discards the teacher’s uncertainty about actions. In RL, that uncertainty encodes *exploration* and *policy smoothness*, both vital for on‑policy optimisation.

On‑policy distillation restores this missing information by treating the teacher’s full probability distribution over actions as a soft target. The student minimises the Kullback–Leibler (KL) divergence  
\[
L_{\text{distill}} = \mathbb{E}_{s\sim d^\pi}\!\left[\mathrm{KL}\bigl(\pi_{\text{teacher}}(\cdot|s)\,\Vert\,\pi_{\text{student}}(\cdot|s)\bigr)\right],
\]
where \(d^\pi\) is the state‑visitation distribution induced by the current student policy. This objective guarantees that, as the student improves its own on‑policy performance, it remains anchored to the teacher’s richer behavioural prior.

The deeper principle here is *regularised optimisation*: KL acts as a convex penalty that keeps the student within a trust region of the teacher while still allowing gradient updates from RL signals (e.g., policy gradients). Consequently, the student enjoys the speed and stability of supervised learning yet remains responsive to on‑policy data, avoiding the catastrophic bias that arises when only action labels are used.

**Non‑obvious insight:**  
Because the KL penalty is evaluated under the *student’s* own state distribution, the distillation process automatically adapts to the student’s exploration dynamics. If the student ventures into new states, it receives no regularisation from the teacher there—forcing it to learn genuinely from RL signals. Thus, on‑policy distillation blends knowledge transfer with adaptive exploration, something plain action‑label distillation cannot achieve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
