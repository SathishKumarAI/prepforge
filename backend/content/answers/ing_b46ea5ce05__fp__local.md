---
qid: ing_b46ea5ce05__fp__local
question: 'Explain: How do you evaluate an agent? Compare trajectory evals and final-outcome
  evals.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 378
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:27:27-05:00'
sources: []
---

Evaluating an artificial agent boils down to measuring how well it transforms *states* into *desired outcomes*.  
At the most fundamental level, we model the agent’s decision‑making as a policy π that maps observations \(o_t\) to actions \(a_t\). The environment responds with next state \(s_{t+1}\) and reward \(r_t\). An evaluation metric is thus an expectation over trajectories:  

\[
J(\pi)=\mathbb{E}_{\tau \sim \pi}\!\left[\sum_{t=0}^{T} r_t\right],
\]

where the trajectory \(\tau=(s_0,a_0,\dots,s_T)\) encapsulates the entire interaction.  
**Trajectory‑based evals** (e.g., cumulative reward, regret, or safety violations per step) assess *how* the agent behaves over time. They capture dynamics such as exploration efficiency, risk aversion, and learning speed—qualities that are invisible when only looking at a final score.

**Final‑outcome evals** collapse the trajectory to a single scalar (win/loss, completion time). These metrics are easier to compute and interpret but ignore intermediate states. A policy could achieve the same final outcome via many suboptimal paths; if those paths incur high risk or waste resources, the evaluation will miss it.

A non‑obvious insight: *trajectory evals implicitly regularize* the learning process by penalizing undesirable states early on, thereby shaping the agent’s inductive bias. Final‑outcome evals lack this regularization, often leading to brittle policies that exploit loopholes in the reward structure.  

In practice, a robust assessment combines both: use trajectory metrics for safety and efficiency, and final outcomes for ultimate performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
