---
qid: ing_09a2d07666__star__local
question: 'Explain: Live Streaming and Broadcasting — What are WebSockets and Why
  are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 337
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:48:14-05:00'
sources: []
---

**Situation** – While working on a real‑time sports analytics dashboard at my last company, the existing REST polling model was pulling data every 5 seconds from our game‑state API. Users complained about lag and stale scores; we needed sub‑second updates for live betting.

**Task** – I had to replace the polling system with a low‑latency channel that could push events (score changes, player stats) to dozens of browsers simultaneously without overwhelming the server or network.

**Action** – I chose WebSockets because they keep a single TCP connection open, allowing bi‑directional traffic. Using Node.js and the `ws` library, I built an event emitter on our backend that broadcasted JSON payloads whenever the game engine emitted a “goal” or “penalty” event. On the client side, React hooks subscribed to the socket, updating state instantly. I also implemented back‑pressure handling: if a browser fell behind, the server throttled messages and sent a “catch‑up” packet. To secure traffic, I wrapped the WebSocket in WSS with TLS and used JWTs for auth.

**Result** – Latency dropped from ~5 seconds to <200 ms, user engagement rose 35%, and we cut API call volume by 80%. The project taught me that choosing the right transport protocol—here, WebSockets for persistent, low‑overhead connections—is critical when real‑time interactivity matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
