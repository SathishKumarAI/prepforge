---
qid: ing_819304a41a__eli5__local
question: 'Explain: So the--the biggest thing, like I said — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 232
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:02:01-05:00'
sources: []
---

Imagine a giant kitchen where every chef (user) can add ingredients (messages), stir them (edit), and taste the dish in real time. In Google Wave, the “kitchen” is a shared document called a *wave*. Every change you make is instantly sent to all other chefs through tiny, invisible messages called **operations**. The kitchen’s *cookbook* (the Wave server) keeps a list of every operation and applies them in order so everyone sees the same final recipe, even if edits arrive out of sync. Think of each edit as a note on a shared whiteboard that instantly updates for all viewers—no need to reload or save. That’s the core mechanism: a real‑time, collaborative editing engine that tracks every tiny change and keeps everyone in lockstep.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
