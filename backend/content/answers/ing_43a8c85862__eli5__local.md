---
qid: ing_43a8c85862__eli5__local
question: 'Explain: Loss function: reverse KL — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 240
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:23:52-05:00'
sources: []
---

Imagine teaching a new driver (the “student” car) to follow the exact style of an experienced instructor (the “teacher” car). The teacher’s driving log is full of subtle, desirable behaviors—smooth braking, precise lane keeping—that we want the student to copy. 

In on‑policy distillation, both cars are tested in the same traffic environment at the same time. We compare their actions using a **reverse Kullback–Leibler (KL) loss**: for every moment, we ask “How much does the student’s action differ from the teacher’s?” The reverse KL penalizes the student heavily when it chooses something the teacher would never choose, but it is forgiving if the student occasionally deviates in ways the teacher might also do. Thus the student learns to stay within the safe, efficient habits of the teacher while still exploring a bit.

**Loss function:** a measure that turns differences into numbers we can minimize.  
**Reverse KL:** a specific way to weigh those differences, favoring safety over perfect imitation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
