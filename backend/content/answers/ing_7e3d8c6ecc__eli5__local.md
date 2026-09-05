---
qid: ing_7e3d8c6ecc__eli5__local
question: 'Explain: Concept drift vs. Data drift — What is concept drift in ML, and
  how to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 217
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:56:58-05:00'
sources: []
---

Think of a weather‑forecasting app that learns from past seasons.  
**Concept drift** happens when the underlying rule that links “cloud cover” to “rain tomorrow” changes—maybe because climate patterns shift or a new city is added to the data. The model’s logic (the concept) has moved, even though the data still look similar.

**Data drift** is different: it means the *inputs* themselves change, like more people now report “sunny” in their weather app, but the rain‑prediction rule stays the same.

To spot concept drift you watch the model’s predictions over time. If accuracy suddenly drops or errors cluster around new patterns, that signals a drift.  
Fix it by retraining with recent data, adding new features that capture the shift, or using adaptive algorithms that update continuously. In short: detect when the “weather rule” changes, then let the model learn the new rule again.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
