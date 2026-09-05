---
qid: ing_ab627122c3__star__local
question: 'Explain: Then how do you actually calculate the — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 339
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:15:31-05:00'
sources: []
---

**Situation** – While working on a ride‑hailing feature for our app, we noticed that driver ETA predictions were off by an average of 3 minutes during rush hour. The team needed a more accurate way to estimate travel time between any two coordinates on the map.

**Task** – My goal was to design a lightweight module that could calculate real‑time route distances and expected times using our existing traffic data, without overloading the backend or requiring costly external API calls.

**Action** – I started by modeling the road network as a weighted graph where each edge weight represented average speed from recent telemetry. Using Dijkstra’s algorithm with a min‑heap priority queue in Python, I computed the shortest path between two points on demand. To keep it fast, I cached sub‑routes and refreshed them every 30 seconds. For the travel time, I multiplied the path length by the inverse of the speed limit, then applied a dynamic multiplier derived from live congestion scores (derived via a simple linear regression on historical delay data). I wrapped this logic in an async microservice using FastAPI, exposing a `/estimate` endpoint that returned ETA in milliseconds.

**Result** – After deployment, ETA accuracy improved by 42 % during peak periods, reducing driver‑customer complaints by 27 %. I also learned how to balance graph‑based routing with real‑time traffic signals and the importance of caching for latency‑sensitive services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
