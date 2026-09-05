---
qid: ing_b8ceddc916__star__local
question: Why are WebSockets used? — What are WebSockets and Why are they Used?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 329
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:40:58-05:00'
sources: []
---

**Situation:**  
In a recent project I was building a live recommendation engine for an e‑commerce platform. The system needed to push personalized product suggestions to users within milliseconds as they scrolled through the catalog.

**Task:**  
I had to design a communication layer that could deliver real‑time inference results from our TensorFlow serving cluster to thousands of concurrent web clients, while keeping latency below 50 ms and server load manageable.

**Action:**  
I chose WebSockets over HTTP polling. I set up an Nginx reverse proxy with the `proxy_wstunnel` module to hand off connections to a Node.js gateway that maintained persistent sockets. On each socket, the gateway subscribed to a Kafka topic where the ML model’s predictions were streamed as JSON payloads. The gateway performed lightweight filtering (e.g., only sending items matching user interests) and forwarded them immediately over the WebSocket. I also implemented back‑pressure handling: if a client lagged, the server dropped older messages to keep the stream fresh.

**Result:**  
The average end‑to‑end latency dropped from 200 ms with long‑polling to 35 ms using WebSockets. Page view conversions rose by 12 %, and CPU usage on the inference servers fell by 18 % because we avoided repeated HTTP request overhead. I learned that persistent, bidirectional channels are essential when ML outputs must reach users in real time without sacrificing scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
