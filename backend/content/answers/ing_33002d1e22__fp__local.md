---
qid: ing_33002d1e22__fp__local
question: 'Explain: A Theory of Building Long-running Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 422
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:53:23-05:00'
sources: []
---

**A Theory of Building Long‑Running Agents**

The core problem is *temporal coherence*: an agent must make a sequence of decisions that remain useful over many time steps, even as the environment drifts and new information arrives.  
Mathematically this is a **dynamic optimization** over infinite horizons with partial observability:

\[
\max_{\pi} \; \mathbb{E}\!\left[\sum_{t=0}^{\infty} \gamma^{\,t}\, r_t \;\middle|\; \pi\right], 
\quad 0<\gamma<1
\]

where the policy π maps a history of observations to actions. The *curse of dimensionality* would force us to approximate this value function.

The breakthrough is to treat the agent’s internal state \(s_t\) as an **information bottleneck** that compresses past experience into a low‑dimensional representation while preserving predictive power for future rewards. Formally, we minimize

\[
L = \mathbb{E}\!\left[\sum_{t} \ell(r_t,\hat r_t)\right] + \beta\, I(\text{past}; s_t)
\]

where \(I\) is mutual information. This yields *predictive state representations* that are provably optimal under the Markov assumption, yet robust to non‑Markovian dynamics because they encode relevant history.

A non‑obvious insight: **the discount factor \(\gamma\) acts as a temperature on the entropy term** in the bottleneck objective. A high γ (long horizon) forces the agent to retain more information about the past, effectively increasing its memory capacity; conversely, low γ encourages aggressive forgetting, which speeds learning but can destabilize long‑term strategies.

By unifying dynamic programming with an information‑theoretic regularizer, we obtain agents that learn compact, predictive memories and maintain coherent behavior over arbitrarily long runs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
