---
qid: ing_3d37e0d91b__fp__local
question: 'Explain: Distillation for personalization — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 558
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:14:29-05:00'
sources: []
---

**On‑Policy Distillation for Personalisation**

*Problem.*  
A recommender or dialogue agent must adapt its policy \( \pi_\theta(a|s) \) to a user’s evolving preferences while still acting in real time. Directly fine‑tuning the policy on logged data causes *distribution shift*: the states seen during training differ from those visited by the updated policy, leading to catastrophic forgetting or unsafe actions.

*Solution.*  
On‑policy distillation turns the agent itself into its own trainer. At each iteration we let the current teacher policy \( \pi_{\theta_t} \) generate a fresh batch of trajectories \( \{(s_i,a_i)\}_{i=1}^N \) under the *current* environment dynamics and user feedback. We then train a lightweight student \( q_\phi(a|s) \) to mimic these samples by minimizing the KL divergence

\[
L(\phi)=\mathbb{E}_{s\sim d_{\pi_{\theta_t}}}\big[ D_{\mathrm{KL}}\!\big( \pi_{\theta_t}(\cdot|s)\,\Vert\,q_\phi(\cdot|s) \big) \big],
\]

where \(d_{\pi_{\theta_t}}\) is the state distribution induced by the teacher. Because both policies share the same trajectory distribution, the *mismatch term* that plagues off‑policy learning vanishes.

*Why it works.*  
The KL loss is a convex surrogate for matching action probabilities; its gradient is simply the difference in log‑probabilities weighted by the teacher’s own advantage estimates. Thus the student inherits not only the policy shape but also an implicit bias toward higher‑value actions, without needing explicit reward signals.

*Non‑obvious insight.*  
On‑policy distillation acts as a *self‑regulariser*: every update re‑injects exploration noise from the teacher, preventing over‑fitting to stale user data. In effect, it turns the policy optimisation into an online EM step where the “E” phase is sampling fresh trajectories and the “M” phase is fitting a simpler model to those samples. This dual role explains why distillation can outperform vanilla fine‑tuning even when the student network is orders of magnitude smaller.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
