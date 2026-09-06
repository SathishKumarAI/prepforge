---
qid: ing_c8b2cc91ec__fp__local
question: What is context pollution in agents, and how do you deal with it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 392
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:07:44-05:00'
sources: []
---

**Context pollution** is the inadvertent leakage of irrelevant or stale information into an agent’s working memory (or *context window*).  
When a language‑model agent receives a new prompt, it concatenates that prompt with all prior dialogue tokens to form its context. If earlier turns contain unrelated facts—say, a user’s birthday from a previous session—or if the model mis‑tags a system instruction as user input, those tokens occupy precious capacity. The agent then *optimizes* on an inflated loss surface: it must explain the new query while still satisfying constraints imposed by irrelevant context, leading to hallucinations or policy drift.

From an **information‑theoretic** view, the context window is a fixed‑capacity channel. Every extraneous token reduces mutual information between the agent’s current input and the true state of the world. The optimal strategy is to maintain a *minimal sufficient statistic*: keep only those tokens that increase the likelihood of correct action.

Practical mitigation:

1. **Dynamic truncation** – keep the last N turns, discarding older ones unless they contain *essential* facts (e.g., user preferences).
2. **Semantic filtering** – embed each turn and retain only those whose similarity to the current prompt exceeds a threshold.
3. **Explicit context flags** – tag system messages with metadata so the model can weight them differently.

A subtle, often overlooked insight: *context pollution is not just about quantity but also about **semantic alignment***. Even a single highly relevant token can dominate a 4 k‑token window if its embedding aligns strongly with the prompt; conversely, many irrelevant tokens may have negligible influence. Thus, effective pruning must consider both length and semantic relevance to preserve the agent’s decision‑making fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
