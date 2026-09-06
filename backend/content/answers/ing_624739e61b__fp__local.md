---
qid: ing_624739e61b__fp__local
question: 'Explain: Title: Less Context, Better Agents: Efficient Context Engineering
  for Long-Horizon Tool-Using LLM Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 473
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:34:20-05:00'
sources: []
---

**Why we need “less context” for long‑horizon tool use**

When an LLM acts as a *tool‑using agent*, its policy is a function  
\( \pi_\theta(a_t|c_{1:t})\) of the entire dialogue prefix \(c_{1:t}\).  
In practice, GPT‑4 and its successors can only attend to ~8 k tokens.  
For tasks that span dozens of interactions (e.g., automated research or
software debugging), the true state space explodes: each step adds new facts,
tool outputs, and user corrections, yet the model must still reason about *future* goals.

From an **information‑theoretic** standpoint, the relevant part of \(c_{1:t}\) is a *sufficient statistic*: it should preserve all predictive power for the next action while discarding irrelevant history.  
The naive strategy—feeding the raw prefix—is suboptimal because it mixes signal and noise, leading to *catastrophic forgetting* of earlier constraints.

**Efficient context engineering** therefore constructs a compressed representation \(z_t = f(c_{1:t})\) that satisfies

1. **Markovianity**: \(P(a_{t+1}|c_{1:t},a_t)\approx P(a_{t+1}|z_t,a_t)\).  
2. **Sufficiency**: \(I(z_t; c_{1:t}) \ge I(\pi_\theta;\, c_{1:t})\).

We achieve this by a lightweight *context summarizer* (e.g., a recurrent encoder or attention‑based pointer network) that selectively retains tool‑relevant tokens and discards repetitions.  
The agent then conditions on \(z_t\), keeping the effective context within model limits.

**Non‑obvious insight:**  
The summarizer can be trained *without* ground truth labels by exploiting the LLM’s own loss: backpropagate through the end‑task reward (e.g., success in a multi‑step puzzle). This turns context compression into an auxiliary objective that aligns exactly with the agent’s downstream performance, yielding “less context” that is *more* informative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
