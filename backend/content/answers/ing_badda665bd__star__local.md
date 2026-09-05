---
qid: ing_badda665bd__star__local
question: 'Explain: public endpoints um that we''ve sort of — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 362
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:44:47-05:00'
sources: []
---

**Situation:**  
At my last company we had a downtown multi‑storey parking garage that was consistently overbooked during lunch hours and underutilized late at night. The management wanted to reduce wait times and increase revenue without adding more space.

**Task:**  
I was tasked with designing an end‑to‑end system that could predict real‑time occupancy, recommend dynamic pricing, and provide a public API for the city’s mobile app so drivers could see available spots before arriving.

**Action:**  
I built a supervised learning pipeline using Python and scikit‑learn. Historical sensor data (entry/exit timestamps, weather, local events) fed into a Gradient Boosting Regressor to forecast occupancy 15 minutes ahead. The model ran on an AWS SageMaker endpoint that updated every minute. I exposed this via a RESTful API on Amazon API Gateway, throttled with Cognito for authentication. For pricing, I added a rule engine that adjusted rates by ±10% based on predicted fill‑rate thresholds. We deployed the solution using Docker containers on ECS and monitored latency (<200 ms) with CloudWatch.

**Result:**  
Within three months we saw a 30 % reduction in average driver wait time, a 12 % lift in revenue during peak periods, and a 15 % increase in overall occupancy. The project taught me how to blend statistical forecasting with real‑time API design while keeping latency low for end users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
