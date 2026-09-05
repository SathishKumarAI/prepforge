---
qid: ing_c145e94efe__eli5__local
question: 'Explain: How do you decide whether to trust your LLM judge? Walk me through
  calibration.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 265
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:42:40-05:00'
sources: []
---

Imagine a weather forecast that tells you whether it will rain tomorrow. The forecaster (your LLM judge) uses past data and patterns to give a probability—“there’s an 80 % chance of rain.”  
**Calibration** is the process of checking if those probabilities match reality: if, over many days when the forecast says “80 % rain,” it actually rains about 8 out of 10 times, the forecaster is well‑calibrated. If it rains only half as often, the predictions are too optimistic; if it rains almost every time, they’re too pessimistic.

When you trust an LLM judge, first look at its *calibration curve*: a graph that shows, for each probability level, how often the predicted outcome actually occurs. A steep line near the diagonal means good calibration. If the curve is far from diagonal, the model’s confidence doesn’t match reality, so be cautious.

So, just as you’d double‑check a weather report against historical accuracy before deciding to carry an umbrella, check the LLM judge’s calibration curve before relying on its verdicts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
