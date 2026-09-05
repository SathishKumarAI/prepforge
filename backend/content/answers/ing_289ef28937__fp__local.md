---
qid: ing_289ef28937__fp__local
question: 'Explain: Week 7-8: Dynamic Programming & Optimization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 410
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:31:34-05:00'
sources: []
---

Dynamic programming (DP) is a systematic way of solving *sequential decision problems* that arise whenever an optimal solution can be built from optimal sub‑solutions.  
Consider a learning task where the loss on data point \(t\) depends only on the state at time \(t-1\). The total risk is  

\[
J(x_0)=\min_{u_0,\dots,u_{T-1}}\sum_{t=0}^{T-1}L_t(x_t,u_t)
\quad\text{s.t.}\quad x_{t+1}=f_t(x_t,u_t).
\]

Because the future cost from \(x_t\) is independent of past actions once \(x_t\) is fixed, Bellman’s principle of optimality applies:  

\[
V_t(x)=\min_u \{L_t(x,u)+V_{t+1}(f_t(x,u))\},
\]

with \(V_T(x)=0\). Solving the recursion backward yields an *optimal policy* in closed form or via efficient table lookup. This derivation shows DP is not a heuristic but an exact consequence of conditional independence and additive structure.

In machine learning, DP underpins structured prediction (e.g., Viterbi decoding for HMMs), sequence‑to‑sequence models with beam search, and reinforcement learning’s value iteration.  

**Non‑obvious insight:**  
DP’s optimality relies on *local* sub‑problem optimality, yet it guarantees a globally optimal solution **only when the problem is Markovian**—the future depends solely on the current state, not the entire history. Many seemingly DP‑friendly tasks (e.g., greedy feature selection) fail because they violate this property; recognizing the Markov condition is thus the key to applying DP correctly in ML.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
