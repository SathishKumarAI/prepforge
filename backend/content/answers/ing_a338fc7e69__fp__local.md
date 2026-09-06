---
qid: ing_a338fc7e69__fp__local
question: Explain GRPO. Why has it displaced PPO for reasoning RL?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 607
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:52:50-05:00'
sources: []
---

**GRPO (Generalized Reward‑Proximal Optimizer)**  
At its core, reinforcement learning seeks the policy \( \pi_\theta(a|s) \) that maximises expected return  
\[
J(\theta)=\mathbb{E}_{\tau\sim\pi_\theta}\!\Big[\sum_{t} r(s_t,a_t)\Big].
\]
The gradient of \(J\) is estimated by the REINFORCE trick, but raw policy gradients are notoriously high‑variance.  
PPO tackled this with a *clipped surrogate* objective that bounds the likelihood ratio \(\frac{\pi_\theta}{\pi_{\text{old}}}\), ensuring local updates and stable training. However, PPO still relies on **on‑policy data**: each update must be followed by fresh rollouts, which limits sample efficiency.

GRPO re‑derives the policy gradient from a *variational* perspective.  
1. Treat the policy as a stochastic encoder of an implicit distribution over trajectories.  
2. Introduce a *randomised perturbation* \(\epsilon\) to the action logits and optimise the expected return w.r.t. both \(\theta\) and \(\epsilon\).  
3. The resulting objective is
\[
L_{\text{GRPO}}(\theta)=\mathbb{E}_{s,a,\epsilon}\!\Big[r(s,a)\big(1-\tfrac12\|\nabla_\theta \log\pi_\theta(a|s)+\epsilon\|^2\big)\Big],
\]
which is a *proximal* term in the *parameter space*, not just action‑ratio space.  
Because the perturbation \(\epsilon\) can be sampled from a **shared replay buffer**, GRPO reuses off‑policy trajectories while still guaranteeing that each update stays within a trust region defined by the gradient norm.  

**Why it displaced PPO for reasoning RL**  
- *Sample efficiency*: Off‑policy reuse cuts data cost by 4–5×.  
- *Sharper convergence*: The parameter‑space proximal term directly penalises large policy changes, yielding tighter variance bounds than action‑ratio clipping.  
- *Better exploration*: Randomised logits encourage diverse behaviours without extra entropy bonuses.

**Non‑obvious insight**  
The key is that **gradient‑norm regularisation in parameter space implicitly controls the KL divergence between successive policies**, a fact often missed when one only looks at action‑ratio bounds. This hidden equivalence explains why GRPO can safely use larger learning rates and still converge, whereas PPO would stall or diverge under similar settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
