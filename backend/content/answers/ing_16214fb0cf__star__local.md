---
qid: ing_16214fb0cf__star__local
question: 'Explain: think about it um why would we — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 344
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:12:43-05:00'
sources: []
---

**Situation** – In my last role at a smart‑city startup, the city council asked us to redesign a downtown parking garage that was consistently overbooked during rush hours and underutilized on weekends. The existing manual reservation system had a 15 % error rate in predicting demand.

**Task** – I needed to build an ML‑driven allocation engine that could forecast hourly occupancy, adjust dynamic pricing, and suggest real‑time parking spot assignments, all while keeping latency below 200 ms for the mobile app.

**Action** – First, I collected six months of sensor data (vehicle counts, entry/exit timestamps) and merged it with external variables (weather, public events). Using a gradient‑boosted tree model in XGBoost, I trained hourly occupancy forecasts. I then built an online inference service on AWS Lambda, caching predictions with Redis to meet latency targets. For pricing, I implemented a reinforcement‑learning policy that adjusted rates based on predicted demand and current fill rate. Finally, I integrated the system into the existing REST API using FastAPI and deployed via Docker on ECS.

**Result** – The new model reduced booking errors from 15 % to 3 %, increased revenue by 12 % during peak hours, and improved overall garage utilization from 68 % to 82 %. I learned that coupling robust feature engineering with a lightweight inference pipeline is key for real‑time urban infrastructure solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
