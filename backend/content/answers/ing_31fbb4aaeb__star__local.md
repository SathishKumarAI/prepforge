---
qid: ing_31fbb4aaeb__star__local
question: 'Explain: Live Notifications — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 306
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:08:07-05:00'
sources: []
---

**Situation**  
At my last startup we built a real‑time dashboard for field technicians. The existing polling API was adding 1 ms latency per device and the backend cost shot up to $3K/month because every technician’s app pinged the server twice a minute.

**Task**  
I had to cut notification latency below 200 ms, reduce server load, and keep costs under our $2.5K budget while supporting 10,000 concurrent users.

**Action**  
I introduced WebSockets with Node.js and Socket.IO. First I set up an Nginx reverse‑proxy that upgraded HTTP requests to WS connections, then rewrote the notification microservice to publish events on Redis Pub/Sub. Each client subscribed to a personal channel; when a job status changed, the service pushed the payload instantly over the socket. I also added heartbeat pings and automatic reconnection logic so users stayed connected during network hiccups.

**Result**  
Latency dropped from 1.2 s to 45 ms on average. Server CPU usage fell by 70 %, cutting monthly costs to $1.8K. We handled 15,000 concurrent connections without scaling the instance count. I learned that a well‑tuned WebSocket layer can dramatically improve UX while keeping infrastructure lean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
