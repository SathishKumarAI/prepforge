---
qid: ing_ad7af4417d__eli5__local
question: 'Explain: Single-Leader replication — Singleleaderreplication'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 205
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:12:25-05:00'
sources: []
---

**Single‑Leader Replication**

Imagine a classroom where one teacher (the *leader*) writes on the board and all students copy that exact note into their notebooks. The teacher is the only one allowed to change the notes; if a student wants to add something, they must ask the teacher first. Once the teacher updates the board, every notebook automatically gets the new version because each student’s copy is linked to the board.

In computing, the *leader* server writes data once and then copies that same data to all other servers (the *followers*). Only the leader can change the information; followers just replicate it. This keeps everyone in sync, but if the leader fails, a new one must be chosen—just like swapping teachers when the current one leaves. The system stays simple and consistent, though it can become a bottleneck if many people try to write at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
