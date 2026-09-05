---
qid: ing_49f3db0fc4__star__local
question: 'Explain: Handshake — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 296
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:56:17-05:00'
sources: []
---

**Situation:** While developing a real‑time recommendation engine for an e‑commerce platform, we noticed the latency between user interaction and model inference was creeping above 500 ms during peak traffic, causing a 12% drop in conversion rates.

**Task:** I had to reduce round‑trip time for sending user actions to the inference microservice and receiving predictions back, all while keeping the system horizontally scalable and fault‑tolerant.

**Action:** I introduced WebSockets as the transport layer. Using Node.js with `ws` on the front end and a Python FastAPI server behind an Nginx reverse proxy, we established persistent bi‑directional connections. Instead of polling every 2 seconds, each client sends events over the open socket; the server streams predictions back instantly. I also added Redis Pub/Sub to broadcast model updates to all connected sockets whenever we retrained the ML pipeline, ensuring zero downtime. We monitored latency with Grafana dashboards and performed A/B tests.

**Result:** Latency dropped from 500 ms to under 80 ms on average, boosting conversions by 9%. The system now handles 10k concurrent users with minimal infrastructure cost. I learned that WebSockets eliminate request‑response overhead and are ideal for ML workloads requiring low‑latency, real‑time data flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
