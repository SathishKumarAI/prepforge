---
qid: ing_0bfb6349af__eli5__local
question: 'Explain: What is concept drift in ML, and how to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 242
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:54:28-05:00'
sources: []
---

Imagine a weather‑reporting app that learns which plants thrive in a city’s climate. It looks at past data—temperature, rain, soil—and builds a model saying “plant A loves this mix.” Over time, the city’s climate shifts: summers get hotter and drier. The plant no longer likes the old mix; it starts to wilt even though the app still says “plant A thrives here.” That mismatch is **concept drift**—the real relationship between inputs (weather) and outputs (plant health) changes after the model was trained.

To spot it, you monitor the model’s predictions on fresh data. If accuracy drops or the distribution of input values shifts, something has changed. Think of a thermometer that suddenly reads wrong: it signals trouble.

Fixing drift is like updating your recipe. You can retrain the model with recent data, add new features (e.g., humidity), or use adaptive algorithms that learn continuously. Regularly checking performance and refreshing training data keeps the model in sync with reality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
