---
qid: ing_2ee71fc641__fp__local
question: 'Explain: Reinforcement learning — What is Machine Learning? \u00a0|\u00a0
  Google for Developers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 420
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:44:27-05:00'
sources: []
---

**Reinforcement learning (RL)** is a branch of **machine learning (ML)** that addresses the *sequential decision‑making* problem: an agent must act in an environment to maximize cumulative reward over time.  

At its core, RL solves the **optimal control** problem by estimating the *value function* \(V^\pi(s)\) for each state \(s\) under policy \(\pi\). The Bellman equation,
\[
V^\pi(s)=\mathbb{E}\!\left[r_{t+1}+ \gamma V^\pi(s_{t+1})\,|\,s_t=s,\;\pi\right],
\]
captures the recursive nature of future returns, linking immediate reward \(r_{t+1}\) to expected future value. This recursion is a manifestation of **dynamic programming** and reflects *information propagation* across time: the agent learns from delayed consequences rather than instant labels.

The *policy gradient* view treats \(\pi_\theta(a|s)\) as differentiable, allowing stochastic optimization via
\[
\nabla_\theta J(\theta)=\mathbb{E}\!\left[\nabla_\theta\log\pi_\theta(a_t|s_t)\;G_t\right],
\]
where \(G_t\) is the return. This shows RL as an **online, sample‑efficient optimizer** that directly maximizes expected reward—no supervised targets needed.

### Non‑obvious insight
Many view RL merely as “learning from rewards.” A deeper angle: *RL is learning a **policy that induces a distribution over trajectories with high expected return*. The agent implicitly shapes the environment’s future state distribution, which is why exploration strategies (e.g., entropy regularization) are essential—without them the induced trajectory distribution collapses to suboptimal loops. Thus, RL is fundamentally about steering probability mass toward desirable futures, not just fitting labels.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
