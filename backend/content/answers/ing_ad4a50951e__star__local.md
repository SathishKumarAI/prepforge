---
qid: ing_ad4a50951e__star__local
question: 'Explain: 28 System Design - WebSockets — What are WebSockets and Why are
  they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 356
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:18:44-05:00'
sources: []
---

**Situation** – In late‑2023 I was working on a real‑time analytics dashboard for a fintech startup that needed to stream stock price updates and user alerts to thousands of browsers with minimal latency. The existing REST polling approach caused 1–2 second delays and unnecessary server load.

**Task** – I had to design a low‑latency, scalable channel so the front‑end could receive live data instantly while keeping bandwidth usage efficient and maintaining compatibility across all major browsers.

**Action** – I introduced WebSockets: an HTTP‑handshake that upgrades to a full‑duplex TCP connection. Using Node.js with the `ws` library on the server and native browser `WebSocket` API on the client, I built a publish/subscribe layer where each user’s session subscribed to relevant tickers. To avoid flooding clients, I implemented back‑pressure handling: if a socket queue exceeded 100 messages, the server throttled that connection. For scaling, I deployed the WebSocket service behind a Kubernetes Ingress with sticky sessions and used Redis Pub/Sub for inter‑pod communication.

**Result** – Latency dropped from ~1.5 s to <200 ms on average, while CPU usage fell by 35 % compared to polling. User engagement metrics rose 18 %, and the system now supports 50k concurrent connections with graceful scaling. I learned that WebSockets are ideal for real‑time bidirectional traffic but require careful flow control and horizontal scaling considerations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
