---
qid: ing_cbfc08435e__eli5__local
question: 'Explain: Implementation — On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 214
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:58:20-05:00'
sources: []
---

**On‑policy distillation** is a way for one learning machine (the *student*) to learn directly from another, smarter machine (the *teacher*), but only while the teacher is actively playing its game.

Think of it like a cooking class where the chef (teacher) is making dishes in real time. The student watches the chef’s hands move, hears the sizzling sounds, and tastes each bite immediately. Instead of studying a cookbook (offline data), the student learns from the chef’s *current* performance—so the lesson stays fresh and relevant.

In practice, the teacher runs its policy (its decision‑making rule) in the environment, and the student observes those actions and the resulting rewards on the spot. The student then updates itself to mimic that behavior. Because the data come “on‑policy” – from the teacher’s own current play – the learning stays aligned with what actually works right now.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
