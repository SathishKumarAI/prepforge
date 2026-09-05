---
qid: ing_a4f086e07f__eli5__local
question: What is concept drift? — What is concept drift in ML, and how to detect
  and address it
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 257
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:59:44-05:00'
sources: []
---

Imagine a weather‑forecast app that learns to predict sunny days from past data. At first the pattern is clear: “if the sky’s gray now, tomorrow will be cloudy.” That rule works until summer arrives and clouds behave differently—rain can come in short bursts even when it’s gray today. The model’s old rule no longer matches reality; its assumptions have drifted.

**Concept drift** is this change: the statistical relationship between inputs (features) and outputs (labels) that a machine‑learning model learned keeps shifting over time. When it happens, predictions become less accurate.

**Detecting drift** feels like checking your app’s error rate every day. If you notice a sudden rise in wrong forecasts, something has changed. Techniques include monitoring prediction confidence, comparing new data distributions to the training set, or running statistical tests that flag significant differences.

**Addressing it** is like updating the forecast rules: retrain the model on recent data, use online learning (which updates incrementally), or employ ensemble methods that weigh newer models more heavily. By continuously feeding fresh examples and monitoring performance, you keep the model’s knowledge aligned with the world it serves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
