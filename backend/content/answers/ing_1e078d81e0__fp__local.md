---
qid: ing_1e078d81e0__fp__local
question: 'Explain: Stale facts — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 428
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:10:27-05:00'
sources: []
---

**Stale Facts – Why an AI Agent Must “Forget”**

An autonomous agent is essentially a *state machine* that maps observations \(o_t\) and internal memory \(m_t\) to actions \(a_t\).  
The memory stores facts \(f_i = (p, v, t)\), where \(p\) is a proposition, \(v\) its value, and \(t\) the timestamp of last observation.  

When an agent acts on the world it changes it:  
\(o_{t+1} \neq o_t\).  If the agent never invalidates old facts, its internal model becomes *inconsistent* with reality.  
Formally, let \(M(t)\) be the set of stored facts at time \(t\). The *prediction error* after an action is  

\[
E(t+1)= \mathbb{E}\big[\,|f_i(t)-f_i(t+1)| : f_i \in M(t)\,\big].
\]

Minimizing \(E(t+1)\) over time requires that the agent drop or update any \(f_i\) whose error exceeds a threshold.  
Thus, **stale facts are those for which the predictive variance exceeds a bound**—a direct consequence of *information‑theoretic optimality*: keeping outdated data increases entropy without utility.

*Non‑obvious insight:*  
Agents that simply “forget” after a fixed horizon (e.g., last‑k observations) can still suffer from **stale latent beliefs** if the underlying dynamics are non‑stationary. A principled approach is to weight facts by *confidence*, which itself should decay with both time and the *rate of change* observed in the environment. This adaptive forgetting aligns memory usage with the true information gain rate, a subtlety often overlooked in heuristic replay buffers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
