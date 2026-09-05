---
qid: ing_b438ddfc2c__eli5__local
question: 'Explain: it''s not possible at all now I — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 234
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:22:43-05:00'
sources: []
---

Imagine a group of friends trying to write a story together on a shared notebook. Every time someone writes a sentence, the notebook flips to show that new line for everyone else. That’s what **operational transformation (OT)** does: it takes each person’s edit (“add this word”) and moves it around so that all copies stay in sync, even if edits happen at the same time.

Now think of a big library where each book is copied on many shelves. If one shelf gets a typo, the library can “differentially” compare only the changed part with the master copy and fix just that line, instead of re‑printing the whole book. That’s **differential synchronization**: it sends only what’s different.

Google Docs uses both ideas together to keep dozens of users editing the same document instantly. OT resolves conflicts; differential sync keeps data transfers small. It’s not “impossible”; it’s simply a clever blend that lets many people type in one place without stepping on each other’s words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
