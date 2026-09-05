---
qid: ing_023d1eff29__star__local
question: 'Explain: Long-Polling: — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 381
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:32:47-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we built a real‑time dashboard that displayed stock tickers and trade alerts to traders in the office. The existing REST API gave us a 30 % latency spike during market opens, so our users complained about “stale” data.

**Task:**  
I had to reduce the round‑trip time for updates from several seconds to under 200 ms while keeping the system scalable and not overloading the servers with constant polling requests.

**Action:**  
I evaluated long‑polling first: the client would send an HTTP request that the server kept open until new data arrived, then immediately close it. This cut down on needless traffic but still relied on the stateless HTTP stack and introduced a small latency window between each poll. I decided to move to WebSockets, which establish a single TCP connection that stays alive for bi‑directional streaming. Using Node.js with `ws` on the backend and the browser’s native WebSocket API, I set up a publish/subscribe pattern: every time the market data feed pushed a new price, the server broadcasted it to all connected clients. I also added heartbeats and graceful reconnection logic to handle network hiccups.

**Result:**  
Latency dropped from ~3 s (polling) to <200 ms with WebSockets, and bandwidth usage fell by 70% because we eliminated repeated HTTP headers. User satisfaction scores rose by 25%, and the system now comfortably scales to 5,000 concurrent traders without hitting our server limits. I learned that choosing the right transport—stateless polling versus stateful sockets—can dramatically change both performance and developer ergonomics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
