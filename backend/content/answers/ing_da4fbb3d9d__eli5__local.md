---
qid: ing_da4fbb3d9d__eli5__local
question: 'Explain: the same line so it''s a little — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 282
total_tokens: 456
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:20:09-05:00'
sources: []
---

Imagine you and your friend are drawing the same picture on a shared whiteboard that is floating in the cloud. Every time one of you adds a line, doodle or erases something, the change has to be sent to everyone else so the board stays identical for all viewers.

**Operational Transformation (OT)** is the clever rule‑book that lets those changes arrive out of order and still end up with the same picture. Think of it like this: if you both want to draw a line from left to right, but one of you draws first while the other is still deciding where to start, OT takes your second change and “shifts” it so it fits neatly after whatever has already been drawn. It rewrites each new operation in light of what’s already there, making sure no two people end up with different versions.

The key terms are:

* **Operation** – a single edit (add, delete, move).
* **Transformation function** – the rule that adjusts an incoming operation based on other operations that have already been applied.
* **Concurrency control** – the system’s way of handling multiple edits at once so everyone sees the same final result.

With OT, your collaborative document feels instant and seamless, even though many people are scribbling from different devices at the same time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
