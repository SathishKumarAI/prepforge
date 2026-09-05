---
qid: ing_d505596867__star__local
question: 'Explain: Polling: — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 337
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:34:55-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with building a real‑time analytics dashboard for an e‑commerce platform that tracked live user interactions (clicks, add‑to‑carts, and purchases). The existing polling endpoint returned data every 15 seconds, causing noticeable lag during peak traffic.

**Task**  
I had to reduce latency so the front end displayed events within a few seconds of occurrence while keeping server load reasonable. The goal was to hit <2 second end‑to‑end response time for high‑volume periods without overwhelming our API layer.

**Action**  
I introduced WebSockets using Socket.io on Node.js. After setting up a dedicated `/realtime` endpoint, I migrated the client from AJAX polling to a persistent socket connection. On the server side I used Redis Pub/Sub to broadcast events from microservices to all connected clients, ensuring horizontal scalability. To avoid flooding, I implemented rate‑limiting per user and a “batch” payload format that aggregates up to 10 events before sending. I also added graceful reconnection logic so users never lost state during transient network hiccups.

**Result**  
Latency dropped from ~15 seconds to <1.5 seconds in production. We saw a 30 % increase in conversion rate for time‑sensitive offers and reduced API calls by ~70 %, freeing compute resources for other features. The exercise taught me the importance of choosing the right transport layer for real‑time data and how thoughtful back‑pressure handling keeps systems robust under load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
