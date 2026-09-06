---
qid: ing_d5cb80d1aa__fp__local
question: 'Explain: The graduation rule — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 408
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:34:47-05:00'
sources: []
---

**The “Graduation Rule” – a principled transition between an agent’s *memory* and its *state***  

At the core of any autonomous system is a *belief state* \(s_t\) that summarizes all information the agent can act upon at time \(t\). The *memory* \(M_t\) holds raw observations, past rewards, or even learned models. The graduation rule decides when to “graduate” an element from memory into the compressed belief state.

Formally, let \(\Phi(M_{0:t})\) be a compression operator (e.g., variational auto‑encoder). The rule requires that for all future times \(t'\!>\!t\),

\[
I(s_t; M_{t+1:}) = 0,
\]

i.e. the belief state contains *all* predictive information needed to foresee future observations, while the remaining memory carries no additional value. This is equivalent to a **sufficient statistic** in statistical inference and ensures that policy \(\pi(a|s_t)\) can be optimal without consulting raw history.

Why must it work this way? Because any residual dependence between \(M_{t+1:}\) and future rewards would mean the agent is still learning from past data, violating Markovity. The rule turns a non‑Markov process into an *information‑theoretic* Markov decision process, enabling efficient planning.

**Non‑obvious insight:** In many deep RL systems, gradients inadvertently leak memory content into the policy network. Explicitly enforcing the graduation condition via mutual‑information regularizers prevents such leakage, yielding more stable and sample‑efficient learning—an effect rarely highlighted in standard curriculum design discussions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
