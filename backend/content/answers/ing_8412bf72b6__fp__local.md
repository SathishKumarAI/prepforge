---
qid: ing_8412bf72b6__fp__local
question: 'Explain: Preference optimisation: RLHF → DPO → GRPO'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 700
total_tokens: 872
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:46:08-05:00'
sources: []
---

### From human preference to policy gradients in a unified view  

1. **Preference optimisation (RL‑HF)**  
   *Problem:* We want a policy π that maximises an unknown reward \(R(s,a)\) only observed through pairwise human judgments of trajectories.  
   *Why it works:* Treat the binary preference label as a noisy estimate of the difference in cumulative rewards:  
   \[
   P(\tau_i\succ\tau_j)=\sigma(R(\tau_i)-R(\tau_j))
   \]
   The likelihood over all labeled pairs is maximised by a *maximum‑likelihood* objective. Taking its gradient gives a policy‑gradient update that steers π toward trajectories more likely to win, i.e. those with higher expected reward.

2. **Direct Preference Optimisation (DPO)**  
   *Problem:* RL‑HF requires sampling many rollouts and training an auxiliary reward model, which is sample‑inefficient.  
   *Why it works:* Replace the latent reward \(R\) by a learned preference score \(f_\phi(\tau)\). The gradient of the log‑likelihood simplifies to  
   \[
   \nabla_\theta \mathbb{E}_{\pi}\bigl[\log\sigma(f_\phi(\tau_i)-f_\phi(\tau_j))\bigr]
      = \mathbb{E}_{\pi}\Bigl[(1-\sigma(\Delta f))\,\nabla_\theta\log\pi(a|s)\Bigr],
   \]
   which is a *policy‑gradient* with an advantage term directly derived from human preferences. Thus DPO removes the reward model and uses only trajectory samples, improving data efficiency.

3. **Gradient‑based Reward Policy Optimisation (GRPO)**  
   *Problem:* Even in DPO the gradient estimator can have high variance because it depends on entire trajectories.  
   *Why it works:* GRPO applies a *reparameterisation trick* to the trajectory distribution: sample latent noise \(z\) and deterministically generate actions via a stochastic policy \(\pi_\theta(a|s,z)\). The objective becomes differentiable w.r.t. both θ and z, allowing back‑propagation through the whole rollout:
   \[
   \nabla_\theta \mathbb{E}_z[f_\phi(\tau(z))] = 
   \mathbb{E}_z\bigl[\nabla_\theta f_\phi(\tau(z))\bigr].
   \]
   This yields a low‑variance gradient that still respects the human preference signal, converging faster and with fewer samples.

---

**Non‑obvious insight:**  
All three methods can be seen as *estimating the same underlying “human reward function”*, but each step trades off **bias vs. variance** by moving the optimisation from an implicit latent reward to a directly differentiable preference score, then finally to a reparameterised trajectory that removes stochasticity in action sampling. This progression mirrors the classic bias‑variance trade‑off in statistical learning, explaining why GRPO often outperforms RL‑HF and DPO despite being more computationally involved.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
