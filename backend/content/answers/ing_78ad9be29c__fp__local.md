---
qid: ing_78ad9be29c__fp__local
question: 'Explain: Dynamic Programming (11/11) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 401
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:21:18-05:00'
sources: []
---

**Dynamic programming in machine learning**  
At its core, a learning algorithm solves an *optimization* problem: find parameters θ that minimise a loss \(L(\theta)\). When the loss decomposes into sub‑problems—e.g., sequence models where each time step depends only on the previous one—the overall optimum can be built from optimal solutions of smaller instances. This is the “optimal substructure” property, a cornerstone of dynamic programming (DP).

Why must DP work this way?  
1. **Principle of optimality**: If an optimal global solution contains a sub‑solution that is not itself optimal, swapping it for its optimal counterpart yields a better overall solution. Hence we can recursively solve sub‑problems and store their optima.  
2. **State representation**: In many ML tasks (e.g., Viterbi decoding, sequence tagging), the *state* at time \(t\) encapsulates all necessary history. DP guarantees that once we know the best cost to reach a state, any future decision depends only on this cost, not on the specific path taken—this is Markovianity.

**Non‑obvious insight**  
DP’s “memory” (the table of sub‑solutions) can be viewed as a *prior* over intermediate hypotheses. By caching results we implicitly encode an inductive bias that similar sub‑problems share structure, which often yields better generalisation than treating each instance independently. In probabilistic terms, DP corresponds to computing the exact marginal distribution over hidden states in linear‑time for models like HMMs—an exact inference that would otherwise be exponential.

Thus, DP is not merely a speed trick; it formalises how local optimality propagates globally under the constraints of structure and information theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
