---
qid: ing_2846470d4b__eli5__local
question: 'Explain: 3 Phenomenology of On-Policy Distillation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 223
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:39:33-05:00'
sources: []
---

**On‑policy distillation** is like a coach watching an athlete (the “student” model) practice while the same coach also runs the drills (the “teacher” policy).  

1. **Live feedback** – As the student plays, the teacher immediately shows the best move. The student learns from real‑time examples instead of memorizing a pre‑recorded video.  
2. **Shared environment** – Both models run in the same game world. If the world changes (new rules or opponents), they both adapt together; the student never sees a different playground than the teacher.  
3. **Continuous improvement** – The teacher keeps updating its strategy as it plays, and the student learns from each updated version. Over time, the student’s moves become almost indistinguishable from the teacher’s own play.

So on‑policy distillation is simply “learning while playing together,” ensuring the student stays in sync with a constantly improving mentor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
