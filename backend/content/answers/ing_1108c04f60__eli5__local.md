---
qid: ing_1108c04f60__eli5__local
question: 'Explain: How to detect concept drift — What is concept drift in ML, and
  how to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 282
total_tokens: 452
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:02:40-05:00'
sources: []
---

**Concept drift** is like a weather‑forecast model that worked well last winter but suddenly starts guessing wrong in summer because the climate has changed. In machine learning, it means the relationship between input features (the “weather”) and output labels (the forecast) shifts over time.

*Detecting it*: Imagine you keep a thermometer on your window. Every day you record the reading and compare it to yesterday’s prediction of how hot it will be tomorrow. If the thermometer shows a systematic difference—say, the predictions are always 5 °C too low—you notice a drift. In practice we monitor model performance (accuracy, error rate) on fresh data streams; a steady drop signals drift.

*Addressing it*: Once drift is spotted, treat your model like a gardener who replants when soil changes. Options include:

1. **Retrain from scratch** with recent data, giving the model new “roots.”
2. **Incremental learning** – gradually update the model as new examples arrive.
3. **Ensemble methods** – keep older models for past patterns and newer ones for current trends.

By continuously watching performance (the thermometer) and updating the model (replanting), we keep predictions reliable even when the world changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
