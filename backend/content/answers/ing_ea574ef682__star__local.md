---
qid: ing_ea574ef682__star__local
question: How Does the Presence Platform Identify Whether a User Is Online?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 374
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:17:04-05:00'
sources: []
---

**Situation** – At my previous company we built a real‑time collaboration suite for developers. One of the core features was a presence bar that showed who was actively editing a document at any given moment. The engineering team noticed that users were occasionally marked “offline” even though they still had an active browser tab, which caused confusion and reduced trust in our product.

**Task** – I was tasked with designing a robust mechanism to determine user online status with sub‑second accuracy while minimizing server load, ensuring the presence bar stayed consistent across multiple devices per user.

**Action** – I implemented a lightweight heartbeat system using WebSocket connections. Each client sent a “ping” every 5 seconds; if the server didn’t receive two consecutive pings within a 12‑second window, it marked the user offline. To handle tab loss or network hiccups, I added an idle timer that listened for browser `visibilitychange` events and paused heartbeats when the tab was inactive, resuming when visible again. On the backend, I used Redis pub/sub to broadcast presence updates to all subscribed clients in real time, and persisted the last‑seen timestamp in PostgreSQL for audit purposes. I also added a fallback REST endpoint that could be polled by mobile apps lacking persistent WebSocket support.

**Result** – The new system cut false‑offline detections from 12% down to <1%, improved latency of status updates to under 200 ms, and reduced server CPU usage by 35% thanks to the efficient heartbeat protocol. I learned that balancing real‑time accuracy with graceful degradation across device types is critical for user trust in collaborative tools.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
