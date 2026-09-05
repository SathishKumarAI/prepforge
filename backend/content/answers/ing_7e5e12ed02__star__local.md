---
qid: ing_7e5e12ed02__star__local
question: 'Explain: point so instead of doing one range — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 350
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:46:26-05:00'
sources: []
---

**Situation:**  
While leading the backend team at a food‑delivery startup, we hit a bottleneck: our real‑time driver‑to‑customer matching lagged by 3–5 seconds during peak hours, hurting ETA accuracy and increasing cancellations.

**Task:**  
Redesign the location service so that driver positions update in sub‑second latency, while keeping database reads below 10 ms for every rider request and scaling to 50k concurrent drivers.

**Action:**  
I introduced a two‑layer architecture:  
1. **Geo‑hashing with H3** – we partitioned the city into hexagonal cells (resolution 9) and stored driver IDs in Redis sorted sets keyed by cell ID, allowing O(1) range queries for nearby drivers.  
2. **WebSocket‑based push** – each driver’s app opens a persistent WebSocket to our edge servers; position updates are batched every 200 ms and broadcast only to clients subscribed to the same cell.  
I also implemented a “cell lock” mechanism to prevent race conditions when drivers cross boundaries, and used Redis pub/sub for intra‑cluster sync.

**Result:**  
Latency dropped from ~4 s to under 300 ms on average; ETA predictions improved by 25 %, leading to a 12 % reduction in cancellations. The system comfortably handled 80k concurrent connections with CPU usage staying below 60 %. I learned that combining spatial indexing (geo‑hashing) with real‑time push channels is essential for scalable location services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
