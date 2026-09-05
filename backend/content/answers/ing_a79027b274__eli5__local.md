---
qid: ing_a79027b274__eli5__local
question: 'Explain: Hard Label Distillation — Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 221
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:03:19-05:00'
sources: []
---

**Hard‑label distillation (knowledge distillation)** is a way to make a small, fast model learn from a big, slow one.

Think of the big model as a seasoned chef who can cook many dishes perfectly. The small model is a beginner cook who wants to learn how to make those dishes quickly. Instead of giving the student all the detailed recipe steps (the full soft probabilities), we only hand them the final plate’s description: “This dish tastes like pepper, salt, and garlic.” That description is the *hard label*—just one clear choice.

The beginner tries to match that single taste. By repeatedly comparing their attempt with the chef’s verdict, they adjust their own cooking until they can produce a dish that looks just as good, but much faster. In machine learning terms, we train the small network to mimic the big one’s output labels rather than its full probability distribution. This keeps training simple and lets the tiny model run efficiently on everyday devices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
