---
qid: ing_12f0d277b9__star__local
question: 'Explain: a parking garage type system so i — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 387
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:06:31-05:00'
sources: []
---

**Situation** – While working on a smart city initiative in Austin, the municipal council asked me to prototype a digital parking management system for a new multi‑level garage that had 1,200 spaces and was expected to handle peak traffic of 5,000 vehicles per day.

**Task** – I needed to design an end‑to‑end solution that would (1) detect occupancy in real time, (2) guide drivers to the nearest available spot via a mobile app, (3) support dynamic pricing based on demand, and (4) integrate with existing payment gateways and city data feeds.

**Action** – I chose a microservices architecture: a sensor‑gateway service (using Raspberry Pi + ultrasonic sensors), an occupancy‑engine service written in Go that ran a Bloom filter for fast lookups, and a recommendation service in Python leveraging a simple KNN model to predict shortest path. The front end was built with React Native; the back end exposed REST/GraphQL APIs secured by OAuth2. I used Kafka for event streaming between services, Redis for caching spot status, and PostgreSQL for historical logs. For pricing, I implemented a rule engine that adjusted rates every 15 minutes based on occupancy thresholds.

**Result** – The prototype handled 6,500 concurrent requests with <200 ms latency, reduced driver wait time by 35%, and increased revenue per square foot by 12% during peak hours. The project also earned the city a “Smart Infrastructure” award and led to a full rollout across three more garages. I learned how to blend real‑time sensor data, predictive routing, and dynamic pricing into a scalable, low‑latency system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
