---
qid: ing_452446cd9c__eli5__local
question: 'Explain: On-policy distillation — On-Policy Distillation - Thinking Machines
  Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 201
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:26:07-05:00'
sources: []
---

On‑policy distillation is like a chef who learns from his own cooking sessions instead of watching someone else’s recipe book.  
Imagine you’re training a robot to play a game. The “teacher” model is the expert that already knows how to win, but it runs its own version of the game every day (that’s *on‑policy*). Each time it plays, it records what moves it makes and how good they are. Then, a simpler “student” model watches these recordings and tries to copy the teacher’s behavior by adjusting its own decision rules. The key point is that the student learns only from the teacher’s current, live play—so it stays up‑to‑date with any changes the teacher might make. This keeps the student aligned with the best, most recent strategy without needing a separate dataset of past games.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
