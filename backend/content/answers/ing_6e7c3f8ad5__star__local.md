---
qid: ing_6e7c3f8ad5__star__local
question: 'Explain: Data Transfer — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 341
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:08:29-05:00'
sources: []
---

**Situation:**  
At a fintech startup, I was responsible for feeding real‑time market sentiment scores into our recommendation engine. The previous REST polling setup introduced a 5–10 second latency that caused the engine to serve stale data during high‑volume trading hours.

**Task:**  
I needed to design a low‑latency, bi‑directional channel so that every new sentiment update could be pushed instantly from our NLP microservice to the recommendation cluster without overwhelming the network with repeated HTTP requests.

**Action:**  
I evaluated long‑polling and Server‑Sent Events but found their one‑way nature limiting. I chose WebSockets because they provide a persistent TCP connection where both client and server can send messages at any time. Using Node.js + Socket.io on the NLP side, I implemented a lightweight JSON payload containing sentiment score, timestamp, and source ticker. On the recommendation side, a Python consumer subscribed to the socket, deserialized the payload, and updated an in‑memory cache used by the inference pipeline. To keep throughput high, I added back‑pressure handling: if the consumer lagged beyond 200 ms, the producer throttled new messages.

**Result:**  
Latency dropped from ~7 s to under 50 ms average per update during peak periods, boosting recommendation relevance scores by 18% as measured in A/B tests. I learned that WebSockets are ideal for ML workloads requiring continuous data streams, but careful flow control is essential to avoid bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
