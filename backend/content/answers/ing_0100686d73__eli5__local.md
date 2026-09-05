---
qid: ing_0100686d73__eli5__local
question: 'Explain: if you guys know that there was — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 233
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:36:47-05:00'
sources: []
---

Imagine a group of friends drawing a picture together on a large whiteboard that’s split into many small squares. Each friend can scribble, erase or color any square at the same time. When one friend adds a line, the others see it instantly in their own copies of the board. If two friends try to change the same square at once, the system decides whose change goes first and automatically shifts the other’s drawing so nothing gets lost.

In Google Docs, this “whiteboard” is the document, and the way the system keeps every copy in sync is called **operational transformation** (OT). OT records each tiny edit as an *operation*—for example, “insert ‘a’ at position 5.” It then reorders or adjusts operations that overlap so all users end up with the same final text. The goal is to let people work concurrently without waiting for a lock, just like friends can freely doodle on their shared board while the system smoothly merges every stroke.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
