---
qid: ing_06ed06e087__eli5__local
question: 'Explain: Read vs Writes - URL Shortening is a read-heavy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 198
total_tokens: 359
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:46:34-05:00'
sources: []
---

**Read vs. Write in URL‑shortening**

Imagine a library that keeps a giant index card for every book it owns.  
*Writing* is adding a new card when a new book arrives—this happens only when someone creates a short link (the “write” operation).  
*Reading* is looking up the long address of a book by flipping to its card whenever someone clicks the short link—this happens millions of times.

In URL‑shortening, almost every user action is a *read*: they request the original address from the shortened one. Only a tiny fraction of actions are *writes*, when someone creates a new short link. Because reads vastly outnumber writes, the system is called **read‑heavy**. It must be optimized for fast lookups (like an index that’s super easy to search) rather than for frequent updates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
