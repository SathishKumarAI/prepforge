---
qid: ing_62118a1810__star__local
question: How do WebSockets work? — What are WebSockets and Why are they Used?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 293
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:44:19-05:00'
sources: []
---

**Situation:**  
At my last startup we built a real‑time analytics dashboard for IoT sensors. The existing REST API was pulling data every 5 seconds via polling, causing latency and a spike in server load when the number of devices doubled.

**Task:**  
I had to replace the polling mechanism with something that could push sensor updates instantly while keeping the backend lightweight and scalable.

**Action:**  
I introduced WebSockets. I set up an `express-ws` middleware on Node.js, configured the server to upgrade HTTP connections to a persistent TCP socket. On the client side, I used the native `WebSocket` API with reconnection logic via `reconnecting-websocket`. Each sensor’s data was serialized as JSON and sent over the socket; the server broadcasted updates only to subscribed clients using Redis Pub/Sub for horizontal scaling. To keep bandwidth low, I added a compression layer (permessage-deflate) and implemented message batching every 200 ms.

**Result:**  
Latency dropped from ~5 s to <300 ms, and CPU usage on the backend fell by 40% because we eliminated repeated HTTP requests. The dashboard now updates in real time for over 10,000 concurrent users without extra infrastructure. I learned that choosing the right protocol (WebSocket vs REST) can drastically affect both performance and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
