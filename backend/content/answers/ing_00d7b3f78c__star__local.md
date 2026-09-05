---
qid: ing_00d7b3f78c__star__local
question: 'Explain: Real-Time Presence Platform API — Real Time Presence Platform
  System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 382
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:30:13-05:00'
sources: []
---

**Situation** – At my last company we had a messaging app with over 3 million daily active users, and the support team was reporting that “online” status was often wrong by up to 15 seconds during peak hours, which caused missed hand‑offs in customer service.

**Task** – I was tasked with designing an API and backend system that would provide accurate real‑time presence (online/offline/away) for each user, scale to millions of concurrent connections, and expose a simple REST/WS endpoint for third‑party integrations.

**Action** – I chose a hybrid approach:  
1. Use **Redis Streams** as the write‑through store for connection events (login, logout, heartbeat). Each event pushed into a stream keyed by user ID.  
2. A microservice in Go reads from the stream and updates a **key‑value cache** (`user_id → last_seen_timestamp`) with an expiry of 30 seconds.  
3. For API calls, we expose a WebSocket endpoint that pushes presence changes to subscribed clients and a REST `/presence/{user}` that reads directly from Redis (latency < 5 ms).  
4. To handle bursts, I added a **rate‑limit bucket** per user and an exponential backoff for writes when the stream backlog exceeded 1k messages.

**Result** – The new system reduced presence staleness to under 2 seconds on average during peak load, dropped support tickets by 40 %, and handled 5× more concurrent users without additional infrastructure. I learned that combining Redis Streams with a short‑lived cache gives both durability and ultra‑low latency for real‑time services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
