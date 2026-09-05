---
qid: ing_902e9bbd9c__star__local
question: 'Explain: System Components: — Parking Lot System Design | Notion'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 293
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:21:06-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building an AI‑driven parking management app for a downtown mall that had a 5,000‑space lot and a 30% occupancy drop during peak hours. The existing manual slot allocation led to long queues and frustrated customers.

**Task** – My goal was to design a system that could predict real‑time space availability, suggest optimal entry points, and reduce wait times by at least 25 %.

**Action** – I architected a modular stack: an edge camera network feeding into a lightweight CNN for vehicle detection; the detections were streamed to a Kafka pipeline where a Spark streaming job aggregated occupancy data. For forecasting, I trained a Prophet model on historical hourly counts and fed its predictions into a reinforcement‑learning agent that chose entry gates based on current load and predicted arrivals. The front end used React with WebSocket updates so drivers saw live slot maps.

**Result** – After deployment, average wait time dropped from 7 minutes to 2.5 minutes—a 64% reduction—and occupancy rose by 18 %. I learned the importance of decoupling perception, analytics, and decision layers, and that a small RL policy can bring measurable gains when integrated with reliable forecasts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
