---
qid: ing_d480a6d951__eli5__local
question: 'Explain: Context rot — Agentic Engineering - by Neo Kim and Paul Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 248
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:11:42-05:00'
sources: []
---

**Context rot in “Agentic Engineering”**

Imagine a robot that learns to play chess by watching grandmasters. At first it remembers every opening move perfectly. But over time, if the robot keeps playing only quick, casual games, its memory of those deep openings starts to fade—its knowledge “rotates” away from the best strategies because the context (the type of game) changes.  

In machine‑learning terms, *context rot* happens when a model is trained or fine‑tuned on one kind of data but later used in a different setting. The patterns it learned no longer match the new environment, so its predictions become less reliable.  

Neo Kim and Paul Hoekstra call this “Agentic Engineering” because we design AI agents that *act* in varied worlds; if their training context drifts from where they actually operate, the agent’s behavior can degrade—just like the chess‑robot losing its opening repertoire. The key is to keep the training data aligned with real usage or to refresh it often, so the agent’s knowledge stays fresh and useful.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
