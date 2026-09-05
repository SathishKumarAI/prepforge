---
qid: ing_d331df8317__eli5__local
question: 'Explain: Monitoring and drift — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 260
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:09:51-05:00'
sources: []
---

Imagine an air‑conditioner that’s been set to keep a room at 22 °C. The *monitoring* part is the thermometer that keeps telling you what the current temperature is, so you know whether the unit is doing its job.  

In AI, **evaluation** is like checking that thermostat: we run tests on the model with fresh data and see how well it still predicts or classifies. **Observability** is watching the model’s everyday traffic—how many predictions it makes, how fast, and if any errors pop up—so we know if something is wrong before it hurts users.

*Drift* happens when the room suddenly gets hotter because someone opened a window. In AI, drift means the data or patterns the model sees in production start to differ from what it was trained on (e.g., customer preferences change). That can make predictions less accurate, just as the cooler‑set thermostat will over‑cool the now‑warmer room.

So: evaluate → check accuracy; observe → watch live health; drift → data shift that needs a new model or retraining.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
