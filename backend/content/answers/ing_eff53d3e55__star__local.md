---
qid: ing_eff53d3e55__star__local
question: 'Explain: HTTP: — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 307
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:28:13-05:00'
sources: []
---

**Situation:**  
While leading the backend team for a real‑time stock trading platform, our RESTful API was hitting a bottleneck during peak market hours—each price update required an HTTP request, causing latency spikes and throttling from upstream data feeds.

**Task:**  
I needed to redesign the data delivery pipeline so that every client received live tick updates with sub‑second latency, while keeping server resources efficient and ensuring backward compatibility for legacy browsers.

**Action:**  
I introduced WebSockets by upgrading our Node.js server (using `ws` library) to maintain a persistent TCP connection per user. I added an event‑driven message broker (Redis Pub/Sub) so that when the upstream feed pushed new prices, all subscribed sockets received the payload instantly. To handle load spikes I implemented horizontal scaling with sticky sessions and used a CDN edge cache for static assets. I also added graceful fallbacks: clients without WebSocket support automatically downgraded to long‑polling via Express routes.

**Result:**  
The change cut average update latency from 250 ms (REST) to under 30 ms, boosting user engagement by 35% and reducing server CPU usage by ~20%. I learned the importance of choosing the right transport layer for event‑driven data and how to design a hybrid approach that preserves legacy support while delivering modern real‑time experiences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
