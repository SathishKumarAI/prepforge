---
qid: ing_7ab2243a4b__eli5__local
question: 'Explain: High-Level Architecture (10 minutes) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 243
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:51:19-05:00'
sources: []
---

Imagine you’re building a smart city’s traffic‑control center. The **high‑level architecture** is the blueprint that shows how all the parts talk to each other without getting lost in the details.

1. **Data Ingestion Layer** – Like road sensors, it collects raw vehicle data (camera feeds, GPS logs).  
2. **Feature Store** – Think of a parking garage where you keep neatly labeled cars (features) ready for quick access.  
3. **Model Training Service** – The city’s research lab where engineers design traffic‑flow models using the stored features.  
4. **Inference API** – A control tower that takes live sensor data, plugs it into the trained model, and outputs predictions (e.g., “reduce speed on Main St.”).  
5. **Monitoring & Feedback Loop** – Dashboards that watch the system’s health and feed new data back to retrain models.

Each layer has a clear job, just as every part of a traffic‑control center must communicate smoothly for the city to move efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
