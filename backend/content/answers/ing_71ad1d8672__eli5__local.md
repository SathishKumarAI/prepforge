---
qid: ing_71ad1d8672__eli5__local
question: 'Explain: a user has modified the client copy — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 231
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:36:27-05:00'
sources: []
---

Imagine you’re writing a story on a shared whiteboard with friends, but everyone can scribble at the same time. **Operational Transformation (OT)** is like having a smart referee that watches each stroke, records it as an “operation” (add this word, delete that line), and then re‑orders or adjusts those operations so every player’s copy stays in sync. If two friends try to change the same sentence simultaneously, OT rewrites one change after the other, keeping the story coherent.

**Differential Synchronization** works a bit differently: each friend keeps a local copy of the whole story. Periodically, they send only the *differences* (the parts that changed) to the server, which merges them into everyone’s version. Think of it as sending quick notes (“I added ‘once upon a time’ here”) rather than the entire page.

Both methods let many people edit Google Docs at once, ensuring everyone sees the same text without losing anyone’s work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
