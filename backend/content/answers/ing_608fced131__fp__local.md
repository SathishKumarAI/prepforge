---
qid: ing_608fced131__fp__local
question: When should you NOT build an agent? — Questions
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 408
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:30:53-05:00'
sources: []
---

**When not to build an AI agent**

At its core an agent is a *decision‑making system* that maps observations \(x_t\) to actions \(a_t\) so as to maximise some cumulative reward \(R=\sum_t r(x_t,a_t)\).  
If the problem can be solved by a static, deterministic rule or a simple lookup table—i.e. if an optimal policy is *independent* of uncertainty and history—then the overhead of learning, inference latency, and safety‑verification outweighs any benefit.  

Mathematically, let the state space \(S\) have size \(|S|\).  
- If the transition dynamics are known exactly and the reward function is linear in a small set of features, we can solve for the optimal policy analytically (e.g., via linear programming or dynamic programming with finite horizon).  
- The *value‑iteration* complexity scales as \(O(|S|^2)\); if \(|S|\) is tiny, this is trivial.  
In such a regime, building an agent introduces extra variance: the learning algorithm must explore to estimate transition probabilities and rewards that we already know, potentially causing unsafe or suboptimal actions during training.

**Non‑obvious insight:**  
Even in problems with uncertainty, if the *policy space* is low‑dimensional (e.g., a few hand‑crafted heuristics), *model‑based* reinforcement learning can be more efficient than model‑free approaches. Agents that learn from scratch may overfit to noise and produce brittle policies, whereas a simple Bayesian update on known dynamics yields a provably optimal policy with far less data.

In short: build an agent only when the problem’s state–action space is too large or uncertain for analytic solutions; otherwise a deterministic rule‑based system is preferable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
