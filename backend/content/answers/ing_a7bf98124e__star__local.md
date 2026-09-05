---
qid: ing_a7bf98124e__star__local
question: 'Explain: location that is the latest location of — UBER System design |
  OLA system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 339
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:21-05:00'
sources: []
---

**Situation:**  
In my last role as a senior backend engineer at a ride‑hailing startup, we were hitting a spike in driver‑passenger mismatch rates during peak hours—about 12 % of rides started with a driver that was over five minutes away from the passenger’s pick‑up point.  

**Task:**  
I needed to redesign our real‑time location service so we could reliably provide the *latest* GPS coordinates for each driver, reduce latency to under 200 ms, and scale to millions of concurrent updates without overwhelming our database layer.

**Action:**  
I introduced a hybrid approach: drivers streamed their positions via WebSocket to a Kafka topic; a lightweight consumer updated an in‑memory Redis cache with TTLs of 5 seconds. The ride‑matching microservice pulled the most recent location from Redis instead of querying PostGIS, dramatically cutting read latency. For persistence and analytics we persisted every update to a time‑series table in ClickHouse, partitioned by hour. I also added a fallback mechanism that used the last known GPS point if no new data arrived within 3 seconds, preventing stale matches.

**Result:**  
The average driver‑passenger distance at match time dropped from 12 % to 3 %, and latency for location lookups fell to 140 ms. The system handled a 4× increase in concurrent drivers during rush hour without any service degradation. I learned that coupling real‑time streams with an efficient cache layer can solve what seemed like a fundamental database bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
