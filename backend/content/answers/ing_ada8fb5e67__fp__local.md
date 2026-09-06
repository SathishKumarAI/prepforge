---
qid: ing_ada8fb5e67__fp__local
question: 'Explain: Title: GRPO Does Not Close the Multi-Agent Coordination Gap'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 558
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:13:44-05:00'
sources: []
---

### Why GRPO can’t close the multi‑agent coordination gap  

At its core, a multi‑agent system must solve an **optimization over joint actions**  
\[
\max_{\pi_1,\dots,\pi_N}\; \mathbb{E}_{\tau}\!\left[\sum_{t} R_t(\mathbf{a}_t)\right],
\]
where each agent \(i\) chooses a policy \(\pi_i(a^i|s)\).  
GRPO (Gradient‑Based **R**ecurrent Policy Optimization) updates each \(\pi_i\) via a local policy gradient
\[
\nabla_{\theta_i} J_i = \mathbb{E}\!\left[\sum_t \nabla_{\theta_i}\log\pi_i(a^i_t|s_t)\,Q^{\text{local}}_t\right].
\]
The key **assumption** is that the local value \(Q^{\text{local}}\) sufficiently captures the global return.  
However, in a partially observable or non‑stochastic environment, the true joint value
\(Q(\mathbf{a}_t)\) depends on *correlated* actions of all agents. The local estimator suffers from **biased credit assignment**: an agent’s gradient is driven by its own estimate, ignoring how its action influences others’ future rewards.  

From game‑theoretic optics this manifests as a failure to converge to the **Pareto‑optimal Nash equilibrium**; instead GRPO converges to locally stable policies that are sub‑optimal globally.  
A non‑obvious insight: **temporal correlation matters**—even if agents act independently now, their *future* joint trajectory is tightly coupled. Ignoring this coupling (by treating \(Q^{\text{local}}\) as independent of others’ actions) creates a structural gap that no amount of data or training can close. Thus GRPO’s gradient update rule inherently limits coordination, leaving the multi‑agent coordination problem unsolved.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
