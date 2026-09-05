---
qid: ing_4d7c6aaaa5__eli5__local
question: 'Explain: name it so control let''s make this — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 227
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:39:48-05:00'
sources: []
---

Imagine a group of friends writing a story together on a shared whiteboard. Each friend can scribble anywhere, but when one writes, the others see it instantly—no one’s text overwrites another’s by accident.

**Operational Transformation (OT)** is like giving each friend a “magic pencil” that knows how to move other people’s words around so every new sentence fits without cutting anyone else off. When two friends type at the same time, OT swaps their edits in order, keeping the story coherent for everyone.

**Differential Synchronization (DiffSync)** works like sending only the changes (“diffs”) you made—just the added letters and deletions—to the others instead of the whole page. The server then applies those diffs to each copy, so all friends stay in sync even if they’re typing from different devices or offline.

Together, OT and DiffSync let Google Docs feel like a single, living document no matter how many people edit it at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
