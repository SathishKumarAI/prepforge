---
qid: ing_b29048e1ff__eli5__local
question: 'Explain: You know, we''re sending these deltas through'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 218
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:19:58-05:00'
sources: []
---

Imagine you’re hiking up a mountain with a friend who lives at the base. Each step you take is like a *delta*—a small change in your position. Your friend can’t see the whole trail, so they ask you to tell them only how much higher (or lower) you are after each step. You send these little updates (“I’m 5 meters up now”) and they use that information to adjust their own path toward the summit.

In machine learning, a *model* learns by repeatedly sending deltas—tiny adjustments in its parameters—to an algorithm that tells it how close it is to the right answer. The algorithm collects all those updates, averages them, and nudges the model’s weights so it gets better over time. Just as you guide your friend with incremental steps, the learning process refines the model one small change at a time until it reaches the best possible performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
