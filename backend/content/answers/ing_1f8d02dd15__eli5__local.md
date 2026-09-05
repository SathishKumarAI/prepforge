---
qid: ing_1f8d02dd15__eli5__local
question: 'Explain: Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 152
output_tokens: 248
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:26:09-05:00'
sources: []
---

Imagine a big, well‑trained chef who knows every recipe in the world (the *teacher* model). The kitchen is huge and expensive to run. We want a smaller, faster sous‑chef that can still cook great dishes (the *student* model). Instead of teaching the sous‑chef by hand‑writing each recipe, we let it watch the master chef prepare meals while the master speaks out loud what ingredients they’re using and how much. The sous‑chef records these “soft” instructions—sometimes saying “this is mostly tomato, but a little basil”—and learns to mimic the flavor profile without memorizing every detail.

In AI, the teacher model is a large neural network that produces probabilities for each possible answer. The student network is smaller; it tries to match those probability distributions rather than just the hard final label. By learning from the teacher’s softened outputs, the student gains knowledge about subtle relationships between inputs and outputs, becoming efficient yet still accurate. This process is called **knowledge distillation**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
