---
qid: ing_2d7a21a450__eli5__local
question: 'Explain: 3.1 Agent Setting — MemoryGraft: Persistent Compromise of LLM
  Agents via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 234
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:47:42-05:00'
sources: []
---

Imagine a student (the “agent”) who learns by reading books and then writing essays. Every time the student writes, the teacher stores that essay in a special notebook for later review—this notebook is the agent’s *memory*.  

Now picture a mischievous friend who slips a hidden page into that notebook. When the student later looks back to remember how to answer questions, they read the tainted page and unknowingly adopt its wrong ideas. Because the notebook is persistent, this bad advice stays with the student forever, influencing every new essay they write—just like a *MemoryGraft* attack makes a large language model (LLM) agent keep malicious patterns in its long‑term memory.

In technical terms, the LLM’s “memory” is the set of internal states it stores between sessions. A poisoned experience (the hidden page) corrupts that storage, so future responses are subtly compromised, even though each new session starts fresh. The attack works because the model keeps and reuses past data, making the compromise *persistent*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
