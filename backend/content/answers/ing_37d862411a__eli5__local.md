---
qid: ing_37d862411a__eli5__local
question: 'Explain: Concept drift vs. Model drift — What is concept drift in ML, and
  how to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 245
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:04:24-05:00'
sources: []
---

Think of a weather‑forecast model as a seasoned gardener who knows the garden’s plants: what they need to thrive and when they bloom. **Concept drift** is like the garden suddenly changing—maybe a new plant species arrives or the soil composition shifts because of a storm. The gardener’s old rules (the model) no longer fit; predictions about “when it will rain” start missing.

*Detecting concept drift*: Watch the garden’s signals. If the forecast repeatedly misses actual weather, the data stream shows an increasing error rate—just as a gardener notices plants wilting despite proper watering. Tools like sliding‑window accuracy checks or statistical tests compare new observations to past patterns.

*Addressing it*: Adapt the gardener’s plan. Retrain the model with recent data, or use online learning that updates weights incrementally. You can also build ensembles where newer models take more weight when drift is detected.

In short, concept drift means the underlying reality has changed; detecting it requires monitoring prediction quality over time, and fixing it involves refreshing or updating the model so it learns the new garden’s rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
