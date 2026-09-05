---
qid: ing_4c19ade9db__eli5__local
question: 'Explain: So as in when something changes you — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 234
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:37:33-05:00'
sources: []
---

Imagine a weather‑reporting station that sends alerts when the sky turns stormy. At first it learns that a sudden drop in temperature and a rise in humidity usually mean rain. Later, a new city expands and starts planting rooftop gardens; now the same humidity pattern might just be mist from the gardens, not a storm.  

In machine learning, this is called **concept drift**—the relationship between input data (temperature, humidity) and output (rain) changes over time. A model that never updates will keep giving wrong alerts because it still believes the old rule applies.

To stay accurate, the system must **detect** when predictions become poor (e.g., many false alarms), then **re‑train** or adjust its rules using fresh data. Think of it as a weather station that periodically checks its own forecast accuracy and updates its algorithms whenever the climate in the city changes. This keeps the model reliable even as real‑world conditions evolve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
