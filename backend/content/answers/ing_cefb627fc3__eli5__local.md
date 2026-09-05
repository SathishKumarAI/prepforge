---
qid: ing_cefb627fc3__eli5__local
question: 'Explain: 2.3 Dynamic Metrics — Rethinking On-Policy Distillation of Large
  Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 229
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:03:13-05:00'
sources: []
---

**Dynamic Metrics in On‑Policy Distillation**

Imagine teaching a new driver (the *student* model) by letting them practice on real roads while an experienced instructor (the *teacher* language model) watches. Instead of giving the instructor’s exact route every time, we let the student try different turns and then ask the instructor how good each move was. The “dynamic metrics” are those real‑time quality scores—like a traffic‑light system that changes as conditions change.

In practice, the teacher sends a *policy* (a set of driving rules) to the student. As the student follows this policy on live data (“on‑policy”), we continuously measure how well it matches the teacher’s predictions. Those measurements become new targets for training, allowing the student to adapt instantly rather than relying on a fixed dataset.

So, dynamic metrics are live, context‑sensitive feedback that lets a distilled model learn more efficiently from its large predecessor while staying tuned to the actual environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
