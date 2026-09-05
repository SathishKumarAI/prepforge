---
qid: ing_c5226d7099__eli5__local
question: 'Explain: Prediction drift — What is concept drift in ML, and how to detect
  and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 226
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:48:21-05:00'
sources: []
---

**Prediction drift** is like a weather forecast that keeps getting wrong because the climate has changed.  
In machine learning, *concept drift* means the relationship between input data (features) and output (label) changes over time—just as seasons change what plants grow or what clothes people wear.

**Detecting it**:  
Think of a thermometer reading temperature every hour. If the numbers suddenly rise without an obvious cause, you know something changed. In ML we watch performance metrics (accuracy, error rate) on fresh data streams; a steady decline signals drift.

**Addressing it**:  
1. **Retrain** the model with recent data, just as a meteorologist updates models when new patterns appear.  
2. **Incremental learning** lets the algorithm adjust gradually, like a gardener trimming plants that grow faster.  
3. **Drift‑aware monitoring** alerts you early, so you can intervene before predictions become useless.

By treating concept drift like evolving weather, we keep our models accurate and relevant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
