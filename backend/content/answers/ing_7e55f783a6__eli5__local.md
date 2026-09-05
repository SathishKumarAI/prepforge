---
qid: ing_7e55f783a6__eli5__local
question: 'Explain: Title: Prefix-Tuning: Optimizing Continuous Prompts for Generation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 197
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:57:03-05:00'
sources: []
---

**Prefix‑Tuning: Think of a recipe book that can be tweaked just by adding a short “seasoning” note at the start.**

In large language models, the “recipe” (the model’s weights) is fixed and very hard to change. Prefix‑tuning keeps that recipe intact but adds a tiny extra set of instructions—called a *prefix*—right before every sentence the model writes. This prefix is a string of continuous numbers (think of it as a secret seasoning blend). By training only these numbers, we can steer the model’s output toward a particular style or task without touching its huge internal structure. The rest of the recipe stays the same, so the process is fast and memory‑efficient. In short: keep the main cookbook unchanged, just sprinkle in a custom preface that shapes every answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
