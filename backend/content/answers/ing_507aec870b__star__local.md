---
qid: ing_507aec870b__star__local
question: 'Explain: Connection — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 271
total_tokens: 511
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:09:20-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building a real‑time trading dashboard that displayed price ticks for thousands of securities. The existing REST polling architecture caused latency spikes and wasted bandwidth during market hours.

**Task** – I needed to design an efficient data feed that would push updates to the browser with sub‑second delay while keeping server load manageable.

**Action** – I introduced WebSockets: a full‑duplex TCP connection that stays open between client and server. I set up a Node.js/Express backend using the `ws` library, implemented a publish–subscribe pattern where each instrument channel broadcasted only changed prices. On the front end I used the native `WebSocket` API with a reconnection backoff strategy. To avoid flooding clients, I aggregated updates into 50 ms batches and throttled events to 20 per second per user.

**Result** – Latency dropped from ~800 ms (polling) to <30 ms average, and server CPU usage fell by 35% because we eliminated repeated HTTP requests. User satisfaction scores rose by 18%, and I learned that a well‑tuned WebSocket layer can dramatically improve real‑time UX while scaling efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
