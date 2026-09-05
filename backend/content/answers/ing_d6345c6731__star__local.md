---
qid: ing_d6345c6731__star__local
question: 'Explain: TripsDB - RDBMS — Driverallocationubergojek'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 376
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:37:01-05:00'
sources: []
---

**Situation:**  
At a ride‑hailing startup we had an old PostgreSQL table holding all historical trip logs—pick‑ups, drop‑offs, driver locations, and fares. The fleet was growing to 10 k vehicles, but our dispatch algorithm was still a round‑robin that ignored real‑time demand patterns, leading to a 12 % increase in passenger wait times during peak hours.

**Task:**  
Redesign the driver allocation system so it could predict which drivers should be sent to which zones within 30 seconds, using only data stored in TripsDB while keeping latency under 200 ms per request.

**Action:**  
I extracted a daily snapshot of TripsDB and built a supervised model (gradient‑boosted trees) that learned the probability of a driver accepting an ETA based on zone, time, driver rating, and recent surge. The model was serialized to ONNX and deployed in a lightweight Go service that queried PostgreSQL for current driver positions via indexed “drivers_current” view. I added a caching layer (Redis) for the top‑10 high‑probability zones per driver, ensuring sub‑100 ms inference. We also introduced a feedback loop: each dispatched trip’s outcome fed back into TripsDB nightly for model retraining.

**Result:**  
After rollout, passenger wait times dropped by 18 %, and driver idle time fell from 22 % to 14 %. The system handled 50 k dispatch requests per minute with an average latency of 85 ms. I learned how to marry relational data stores with ML inference at scale, balancing model complexity against strict real‑time constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
