---
qid: ing_f09d3ad1bc__eli5__local
question: 'Explain: Append-Only DB Property — Database-Internals/AppendOnlyProperty.md
  at main \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 217
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:55:23-05:00'
sources: []
---

Think of a database like a giant, never‑closed notebook. In an **append‑only** notebook every new page is added to the end; you can’t erase or rewrite what’s already written. That’s the core idea: once data is stored, it stays there forever and future writes just add more pages.

Why do that? Imagine a library of legal contracts. If someone could flip back and change a contract, the whole chain would be unreliable. By keeping every change as a new page—just adding “Version 2” after “Version 1”—everyone can trace the exact history: who added what and when. The system only ever *appends*; if you need to correct something, you append a correction note instead of rewriting the original.

So, an **append‑only database** is a data store that never modifies existing records; it writes new ones at the end, preserving a complete, tamper‑proof audit trail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
