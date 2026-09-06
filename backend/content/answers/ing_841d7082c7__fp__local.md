---
qid: ing_841d7082c7__fp__local
question: 'Explain: Memory and context management — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 402
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:46:13-05:00'
sources: []
---

**Memory & Context in Agent‑Tool Architectures**

At its core an agent must *choose* actions that maximise future reward given a stream of observations.  
Without remembering past states the policy collapses to a stateless map \(a_t=f(o_t)\), which can only exploit immediate, local information. Yet most real problems are **partially observable**: the true state is hidden behind noisy sensors and long‑term dependencies (e.g., “remember that the door was locked last night”).  
Hence an agent needs an internal *memory* \(m_t\) that aggregates past observations into a compact representation. Formally, we seek a function \(g\) such that

\[
m_{t+1}=g(m_t,o_t), \qquad s_t = h(m_t)
\]

where \(s_t\) is the *belief* over latent states. This recursiveness guarantees **Markovianity** of the augmented state \((m_t)\): future predictions depend only on current memory, not raw history.

When tools (external APIs, databases, simulators) are introduced, the agent’s action space expands to *tool calls*. Each call can be costly or irreversible, so the policy must evaluate whether the expected information gain from invoking a tool outweighs its cost. This is an instance of **Bayesian experimental design**: choose an experiment (tool invocation) that maximally reduces uncertainty about the true state while respecting budget constraints.

A subtle insight often missed is that *memory need not store raw data*. Instead, it can learn to encode *information‑theoretic sufficient statistics*—compact summaries that preserve all relevant predictive power. By training with a loss that penalises both prediction error and memory size (e.g., variational autoencoder style), agents discover these compressed representations automatically, leading to far more scalable reasoning over long horizons.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
