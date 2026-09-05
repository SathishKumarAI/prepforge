---
qid: ing_ee44d5fd61__star__local
question: 'Explain: Different communication methods — Websockets'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 373
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:25:00-05:00'
sources: []
---

**Situation:**  
At my previous startup we built a real‑time recommendation engine that served personalized content to millions of users on a mobile app. The backend was a Python Flask service that pulled model predictions from a TensorFlow cluster and pushed them back to the client via HTTP REST endpoints. During beta testing, latency spikes were hitting 350 ms on average, causing noticeable lag in the user interface.

**Task:**  
I had to reduce end‑to‑end latency below 80 ms while keeping the system horizontally scalable and fault‑tolerant, all without rewriting the entire recommendation pipeline.

**Action:**  
I introduced WebSocket communication between the mobile app and a dedicated Node.js gateway. The gateway maintained persistent connections, subscribed each client to a Redis pub/sub channel that emitted new prediction vectors whenever the TensorFlow model updated. On the server side I wrapped the TensorFlow inference in an async worker pool (using Celery + RabbitMQ) so predictions could be streamed as soon as they were ready. To avoid over‑loading clients, I added back‑pressure logic: if a client’s receive buffer was full, the gateway paused publishing until it drained. I also implemented graceful reconnection with exponential back‑off to handle transient network drops.

**Result:**  
Latency dropped from 350 ms to an average of 45 ms, and user engagement metrics (time on app) increased by 18 %. The system now scales to 10⁶ concurrent connections with a single gateway instance. I learned that choosing the right transport protocol—WebSockets for low‑latency streaming—can be as critical as model optimization when delivering ML services at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
