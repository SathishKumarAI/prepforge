---
qid: ing_d0084aa5e3__eli5__local
question: 'Explain: Input data drift — What is concept drift in ML, and how to detect
  and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 281
total_tokens: 449
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:05:00-05:00'
sources: []
---

Imagine a weather‑forecast app that learned last winter how cold the city feels when the thermometer reads 5 °C. It uses this rule every day: “If temperature is 5 °C, expect snow.” In spring, however, the same 5 °C often means a mild chill with no snow because the climate has shifted. That mismatch between what the model learned and what’s happening now is **concept drift**—the underlying relationship between inputs (temperature) and outputs (weather outcome) changes over time.

**Detecting it** is like checking whether your forecast still matches reality: run the model on fresh data, compare its predictions to actual outcomes, and watch for a growing error rate. Simple metrics such as average prediction error or a drift‑detection test (e.g., monitoring the distribution of predictions) can flag trouble.

**Addressing it** is like retraining the app with new examples: collect recent data, update the model, or use adaptive techniques that continuously learn from new inputs. Regularly refreshing the training set keeps the model’s “weather sense” accurate, just as a weather‑app stays useful when it learns the new climate pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
