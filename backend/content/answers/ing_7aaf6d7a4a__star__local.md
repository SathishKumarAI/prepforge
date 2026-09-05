---
qid: ing_7aaf6d7a4a__star__local
question: 'Explain: Challenges and Considerations — What are WebSockets and Why are
  they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 313
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:39:25-05:00'
sources: []
---

**Situation:**  
While leading the real‑time analytics dashboard for a fintech startup, we noticed that our REST‑based polling model caused a 2–3 second lag between user actions and data updates, which was unacceptable for traders who needed instant market feeds.

**Task:**  
I had to design a solution that delivered live financial tick data with sub‑200 ms latency, while keeping server load manageable and ensuring secure communication across mobile and web clients.

**Action:**  
I evaluated WebSockets as the transport. I set up an Nginx reverse proxy with sticky sessions, deployed a Node.js server using the `ws` library for bi‑directional streams, and integrated Redis Pub/Sub to fan out updates to multiple instances. To mitigate resource exhaustion, I added message batching (max 50 msgs per second) and implemented backpressure handling via socket `drain` events. For security, I enforced TLS and authenticated each connection with JWT tokens, rotating them every hour.

**Result:**  
Latency dropped from ~2.5 s to <120 ms on average, boosting user engagement by 35%. Server CPU usage stayed below 40% even under peak load, and we reduced infrastructure costs by 20% compared to the polling approach. The project taught me how careful WebSocket tuning—batching, backpressure, secure auth—translates directly into measurable performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
