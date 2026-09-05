---
qid: ing_ad776f1e48__eli5__local
question: 'Explain: `transformers` famously repeats code - each model gets its own
  self-contained modeling file instead of shared abstractions. Defend that decision,
  then critique it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 204
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:12:20-05:00'
sources: []
---

Think of a transformer as a tiny factory that builds a single product—say, a custom car. In the “repeat‑code” world each model gets its own factory blueprint: the code for a BERT car is written all in one file, and the code for a GPT car is written separately. The advantage is that every factory can be tuned exactly to its product without worrying about shared parts that might break something else. If you change the engine design for BERT, you don’t accidentally give GPT a buggy part.

The drawback is that the factories become hard to maintain. Every time you want to upgrade the conveyor belt (the attention mechanism) you must rewrite it in every blueprint. It also makes it harder for new engineers to see how all the factories relate, and bugs can slip in when copies diverge. So the decision trades isolated, quick tweaks for a more cumbersome, error‑prone codebase.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
