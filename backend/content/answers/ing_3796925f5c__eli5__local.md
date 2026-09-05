---
qid: ing_3796925f5c__eli5__local
question: 'Explain: So for example, if you have, um — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 208
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:03:54-05:00'
sources: []
---

Imagine a giant whiteboard that everyone can touch at once. When one person writes, the changes appear instantly for all others—no lag, no double‑typing. That’s what Google Wave does inside its code. Each user edits “operations” (like adding a line or moving a block). The system keeps a list of these tiny operations and uses a rule called **operational transformation** to reorder them so every copy of the board stays consistent, even if two people edit the same spot at the same time. Think of it like a group of friends drawing on a shared chalkboard while each has a magic wand that instantly updates everyone’s view. That real‑time sync is the heart (the “under the hood”) of Google Wave.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
