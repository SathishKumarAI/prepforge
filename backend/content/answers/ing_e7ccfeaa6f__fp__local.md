---
qid: ing_e7ccfeaa6f__fp__local
question: 'Explain: Reinforcement learning — On-Policy Distillation - Thinking Machines
  Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 524
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:12:14-05:00'
sources: []
---

**On‑policy distillation in reinforcement learning**

At its core, RL seeks a stochastic policy \(\pi_\theta(a|s)\) that maximises expected return
\(J(\theta)=\mathbb{E}_{\tau}\!\left[\sum_{t}r_t\right]\).
The *on‑policy* requirement means the data used to update \(\theta\) must come from \(\pi_\theta\) itself; otherwise the gradient estimator becomes biased.

*Distillation* turns this into a supervised learning problem.  
We generate trajectories with the current policy, then train a **student** network \(\hat{\pi}_\phi(a|s)\) to match the action distribution of the teacher (the same on‑policy agent). The loss is simply the Kullback–Leibler divergence
\[
L_{\text{distill}}(\phi)=\mathbb{E}_{s}\!\left[\mathrm{KL}\bigl(\pi_\theta(\cdot|s)\,\Vert\,\hat{\pi}_\phi(\cdot|s)\bigr)\right].
\]
Because the KL is convex in \(\hat{\pi}\) and differentiable, we obtain a stable gradient that *exactly* reproduces the teacher’s behaviour without needing to back‑propagate through future rewards.

Why must it work?  
1. **Policy equivalence**: If the student matches the teacher everywhere, both policies are identical; hence their returns are equal.  
2. **Variance reduction**: The distillation loss is a low‑variance supervised signal compared with policy gradients that rely on noisy return estimates.  
3. **Implicit exploration**: Since the teacher samples from its own stochastic policy, the student inherits this exploration pattern automatically.

*Non‑obvious insight*: The distillation process can be viewed as *optimising a surrogate objective*—the KL divergence—while preserving the underlying Markov decision process’s optimality. This turns RL into a sequence of supervised learning steps that respect the geometry of probability simplices, guaranteeing monotonic improvement if the teacher itself is improving. Thus on‑policy distillation is not merely a training trick; it is a principled way to bridge high‑variance policy optimisation with low‑bias supervised learning, grounded in information geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
