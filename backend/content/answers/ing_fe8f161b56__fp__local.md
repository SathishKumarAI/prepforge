---
qid: ing_fe8f161b56__fp__local
question: 'Explain: Types of Reinforcements — Reinforcement Learning - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 529
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:00:58-05:00'
sources: []
---

### Why “rewards” matter in learning

At its core, an agent must decide which action to take when confronted with a state \(s\).  
The *only* signal that tells it whether an action was good or bad is the **reward** \(r_t\) received after executing it.  
Because rewards are noisy and sparse, the agent cannot learn directly from them; it must **optimise** its future expected return

\[
G_t=\mathbb{E}\!\left[\sum_{k=0}^{\infty}\gamma^k r_{t+k}\right],
\]

which is a *dynamic programming* objective.  
The structure of the reward therefore determines how efficiently the agent can solve this optimisation problem.

### Three canonical reinforcement signals

| Type | Formal definition | Why it works |
|------|-------------------|--------------|
| **Sparse rewards** | \(r_t \in \{0,\,1\}\) (or 0 except at terminal states) | Forces the agent to *search* for a rare event; requires exploration strategies like ε‑greedy or curiosity. |
| **Dense (shaped) rewards** | Continuous signal tied to sub‑goals: \(r_t = f(s_t,a_t)\) | Provides gradient‑like information, speeding learning but risking *reward hacking* if the shape misaligns with the ultimate goal. |
| **Intrinsic motivation** | Augmented reward \(R_t=r_t + \beta I_t\), where \(I_t\) is an exploration bonus (e.g., novelty or prediction error). | Encourages covering state space even when extrinsic rewards are absent; derived from information‑theoretic principles (maximising mutual information between states and actions). |

### Non‑obvious insight

Dense shaping **does not guarantee** faster convergence.  
If the shape is too *locally optimistic*, the agent may over‑commit to sub‑optimal policies that maximise the shaped reward but minimise the true return.  
This paradox—*reward shaping can degrade performance*—is formalised in the **Potential‑Based Reward Shaping (PBRS)** theorem, which shows that only potential functions preserving optimality can be safely added.

In practice, a hybrid approach—start with sparse rewards to discover the task structure, then gradually introduce shaped terms validated by PBRS—balances exploration and exploitation while respecting the underlying optimisation principle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
