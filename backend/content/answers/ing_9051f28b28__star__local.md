---
qid: ing_9051f28b28__star__local
question: 'Explain: curious uh are there different types of — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 352
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:21:20-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the city’s downtown parking management system. The existing solution had a 30 % over‑booking rate during peak hours, causing driver frustration and revenue loss.

**Task** – My goal was to build an intelligent reservation platform that could predict demand, optimize space allocation, and reduce over‑booking by at least 20 %.

**Action** – I started by collecting historical occupancy data (hourly counts, weather, event schedules) from the city’s open API and logged it in a time‑series database (InfluxDB). Using Python and Scikit‑Learn, I engineered features such as lagged occupancy, rolling averages, and one‑hot encoded events. A Gradient Boosting Regressor (XGBoost) was trained to forecast hourly demand with an MAE of 8 %. The model ran in a Docker container on AWS Lambda, scaling automatically via API Gateway. For real‑time allocation I built a rule engine that adjusted pricing tiers and slot availability based on the forecast, feeding back user reservations through a React front‑end.

**Result** – After deployment, peak over‑booking dropped from 30 % to 12 %, increasing revenue by roughly $45k per month. The system also cut driver wait times by 25 %. I learned that blending statistical forecasting with dynamic pricing can turn a simple parking lot into a data‑driven asset, and that containerizing ML workloads on serverless infrastructure keeps costs low while meeting latency requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
