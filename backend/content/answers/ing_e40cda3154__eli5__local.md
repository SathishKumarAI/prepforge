---
qid: ing_e40cda3154__eli5__local
question: 'Explain: The Illustrated Masked Self-Attention — The Illustrated GPT-2
  (Visualizing Transformer Language Models) \u2013 Jay Alammar \u2013 Visualizing
  machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 227
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:36:38-05:00'
sources: []
---

Imagine you’re reading a mystery novel and each word is like a detective who can only look ahead to the next clues but never backward. In GPT‑2’s *masked self‑attention*, every word (the “detective”) first hides all future words behind a curtain—this is the **mask**. Then it looks at the words it can see (past and present) and decides how much attention each should get, like weighing evidence from earlier clues. The detective uses two things: **queries** (what information it seeks), **keys** (information available in other words), and **values** (the actual content). By multiplying queries with keys, we get a score that tells the detective which past clues matter most; applying a softmax turns these scores into smooth weights. Finally, each detective takes a weighted sum of the values, producing a new representation that carries only what it needs from its visible past. This process repeats for every word, letting GPT‑2 build context step by step while never peeking into future words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
