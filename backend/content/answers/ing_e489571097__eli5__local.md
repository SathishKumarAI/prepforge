---
qid: ing_e489571097__eli5__local
question: 'Explain: Off-policy distillation — On-Policy Distillation - Thinking Machines
  Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 225
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:36:50-05:00'
sources: []
---

**Think of a cooking show where chefs (the “teachers”) train new cooks (the “students”).**

*On‑policy distillation* is like the teacher and student working together in real time: the chef shows a recipe, the student follows it immediately, and the chef gives instant feedback while the dish is being made. The student learns from actions that are happening right now—exactly the same situation the chef will cook in the future.

*Off‑policy distillation* is different. Imagine the chef records several videos of many dishes (different chefs, different kitchens). Later, a new cook watches those recordings and tries to imitate them, even though the video shows other people cooking. The student learns from past actions that may have come from other policies or environments, not necessarily the one they will use later.

In short: on‑policy distillation is “learning while you’re doing it,” off‑policy distillation is “learning from a library of previous performances.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
