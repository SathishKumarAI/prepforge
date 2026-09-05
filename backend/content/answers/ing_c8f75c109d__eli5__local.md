---
qid: ing_c8f75c109d__eli5__local
question: 'Explain: to the server so total you guys — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 209
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:53:55-05:00'
sources: []
---

Think of a Google Doc as a giant whiteboard that many friends can scribble on at the same time.  
**Operational Transformation (OT)** is like having a smart copy‑editor who watches every stroke. If you write “hello” and a friend writes “world” next to it, the editor rewrites the two strokes so both words stay where they belong, no matter who typed first. It keeps the order right by shifting later edits forward or backward as needed.

**Differential Synchronisation** is like sending only what changed: instead of uploading the whole whiteboard each time, you send just the new lines or deleted text. The server receives these tiny “diffs,” applies them to its master copy, and then pushes back any unseen changes to your screen.

Together, they let millions of users see a single document in real time, without flickering or losing anyone’s work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
