---
qid: ing_cd2fef78d6__star__local
question: 'Explain: thing that you again mentioned here is — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 351
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:19:17-05:00'
sources: []
---

**Situation:**  
While leading a feature‑driven sprint at my previous company, we were tasked with building a real‑time delivery tracking dashboard for a food‑delivery partner similar to DoorDash. The client needed drivers’ locations to appear on the map within two seconds of movement and required low latency updates even when thousands of orders ran simultaneously.

**Task:**  
Design an architecture that could ingest GPS data from each driver, distribute it to clients in real time, and scale horizontally without blowing up costs or introducing jitter.

**Action:**  
I chose a hybrid approach:  
- **Geo‑hashing** with H3 to bucket driver coordinates into hexagonal cells, enabling efficient range queries for nearby customers. We stored the hash + timestamp in Redis, which served as a fast lookup layer and prevented duplicate updates.  
- For real‑time push, I implemented **WebSocket** connections between our backend (Node.js/TypeScript) and front‑end dashboards. The server used an event‑driven pub/sub model with Redis Streams to fan out location changes to only the relevant client rooms. Load balancers were set up behind a WebSocket‑compatible API gateway to maintain session persistence.

**Result:**  
The system delivered location updates in under 1 s for 95% of events, reduced bandwidth usage by ~30% compared to polling, and handled peak loads of 50k concurrent drivers with no single point of failure. I learned that combining spatial indexing with a lightweight pub/sub model is often the sweet spot for high‑scale location services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
