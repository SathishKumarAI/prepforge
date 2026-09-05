---
qid: ing_cb52c9e823__eli5__local
question: 'Explain: 2- Score — The Illustrated GPT-2 (Visualizing Transformer Language
  Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept at a
  time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 236
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:57:19-05:00'
sources: []
---

Imagine a gigantic library where every book is written by an invisible author who reads the previous page before deciding what to write next. In Jay Alammar’s “Illustrated GPT‑2” the author is a *transformer* model, and each page is a word in a sentence.

A transformer works like a group of friends at a party: every friend looks around (reads all words that have already appeared) and decides how much attention to give each other. The *attention heads* are those friends, and the “scores” they produce tell the model which earlier words matter most for predicting the next one. Think of it as a spotlight that can move from one person to another; the brighter the light on someone, the more influence that word has.

Alammar shows these spotlights with colorful heat‑maps: bright reds mean high attention (big impact), cool blues mean low attention. By watching the lights shift as words are added, we see how GPT‑2 keeps track of context—just like a good listener follows a conversation and remembers key points to respond appropriately.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
