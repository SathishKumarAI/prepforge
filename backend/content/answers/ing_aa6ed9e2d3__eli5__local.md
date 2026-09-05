---
qid: ing_aa6ed9e2d3__eli5__local
question: 'Explain: On-policy distillation — best of both worlds'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 232
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:07:54-05:00'
sources: []
---

Imagine you’re learning to play a new video‑game level (the *policy*). You have two ways to improve:  
1) **On‑policy training** – you keep playing the level, getting feedback from your own actions, and gradually get better at it. This is safe because you only use experiences that actually happen while you’re learning.  
2) **Distillation (knowledge transfer)** – once you’ve become good, you record a “cheat sheet” of the best moves you learned, then let another player (a *student* model) learn from that cheat sheet instead of playing the level themselves.

On‑policy distillation blends these: while you’re still playing, you simultaneously record the best moves and train a student. The student learns from the teacher’s own latest playstyle—so it gets the fresh, accurate experience of on‑policy learning but can later practice alone, faster and more efficiently. It’s like having a coach that updates its training notes in real time, letting you keep improving without replaying every move yourself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
