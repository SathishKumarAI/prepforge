---
qid: ing_935cc42d5a__eli5__local
question: 'Explain: Reliability Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 151
output_tokens: 234
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:31:19-05:00'
sources: []
---

Think of an AI system as a weather‑forecast app that tells you whether it will rain tomorrow. **Reliability patterns** are the ways this “app” behaves when its predictions start to slip or get mixed up.

1. **Consistency (Stable)** – Like a seasoned meteorologist who always gives similar forecasts, the model keeps producing the same output for the same input, even if that output is wrong.
2. **Drift (Shift)** – Imagine the forecast slowly changing because the weather models were trained on summer data but now you’re in winter; the AI’s predictions gradually shift away from reality.
3. **Catastrophic Forgetting (Abrupt loss)** – Suddenly, after learning a new pattern (say, a new traffic rule), the model forgets how to predict traffic lights correctly—like a driver who learns a new route but then can’t remember the old one.

These patterns help us spot when an AI is losing trustworthiness, so we can retrain or adjust it before it misleads users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
