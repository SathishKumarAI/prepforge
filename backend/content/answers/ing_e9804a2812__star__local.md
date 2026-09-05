---
qid: ing_e9804a2812__star__local
question: 'Explain: How to achieve real-time communication — Long Polling vs WebSockets
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 335
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:59-05:00'
sources: []
---

**Situation**  
At a fintech startup, I was tasked with adding live trade updates to our web dashboard. The existing API used REST polling every 30 seconds, which caused lag and high server load during market open.

**Task**  
I had to implement a real‑time communication channel that reduced latency below 200 ms while keeping the infrastructure simple and cost‑effective.

**Action**  
First I benchmarked long‑polling: a client sends an HTTP request that stays open until new data arrives, then immediately reconnects. I profiled CPU and network usage on our AWS EC2 instances; each connection consumed ~1 MB of memory and 200 ms of latency per message. Next, I evaluated WebSockets using Node.js `ws` library with Redis Pub/Sub for scaling. I set up a single WebSocket server behind Nginx, added an authentication middleware to issue JWTs, and used Redis channels to broadcast trade events from the data feed service. I also implemented heartbeat pings to detect stale connections.

**Result**  
Switching to WebSockets cut average message latency from 1 s (long‑poll) to 35 ms, reduced server memory usage by ~70%, and lowered network traffic by 50%. The dashboard now updates instantly during high‑volume periods. I learned that while long polling is easy to retrofit, WebSockets provide a far more efficient real‑time solution when combined with proper scaling patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
