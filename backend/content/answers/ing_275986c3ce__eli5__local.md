---
qid: ing_275986c3ce__eli5__local
question: 'Explain: Model quality metrics — What is concept drift in ML, and how to
  detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 221
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:38:09-05:00'
sources: []
---

Imagine you’re a weather forecaster who uses a simple rule: “If the sky looks gray, expect rain.” At first this works great because gray skies usually bring showers. Over time, however, a new cloud‑forming process starts producing clear skies that still lead to rain—your old rule no longer matches reality. That mismatch is **concept drift** in machine learning: the relationship between input data (features) and output labels changes after your model was trained.

To spot it, you keep an eye on performance metrics like accuracy or error rate over time. If they slowly decline, that signals drift. You can also compare distributions of new inputs to those seen during training; a big shift suggests the model’s assumptions are outdated.

Fixing it is like updating your forecast rule: retrain the model with fresh data, add new features that capture the new pattern, or use adaptive algorithms that learn continuously. Regular monitoring and re‑training keep the model reliable as the world evolves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
