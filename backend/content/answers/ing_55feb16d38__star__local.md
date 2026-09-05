---
qid: ing_55feb16d38__star__local
question: How Do WebSockets Work? — Long Polling vs WebSockets - by Ashish Pratap
  Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 301
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:19:50-05:00'
sources: []
---

**Situation**  
I was working on a real‑time dashboard for a logistics startup that needed to push vehicle telemetry to thousands of mobile clients with sub‑second latency. The existing REST API used long polling, and every client made a request every 5 seconds, causing 20 k requests per minute during peak hours.

**Task**  
Reduce the number of HTTP connections, lower latency, and keep battery usage low on mobile devices while still delivering updates in real time.

**Action**  
I designed a WebSocket‑based solution. First, I set up an nginx reverse proxy that upgraded incoming HTTP GETs to WS/TLS. On the server side (Node.js with socket.io), I implemented event namespaces for each vehicle group and used Redis Pub/Sub to broadcast telemetry from our microservices. Clients opened a single persistent connection; on reconnection, they sent their last‑known timestamp so we could backfill missed updates. To keep battery usage down, I added throttling logic that capped the update frequency to 2 Hz when the app was in the background.

**Result**  
The new architecture cut HTTP traffic by 95%, reduced average payload latency from ~5 s to <200 ms, and lowered mobile CPU usage by ~30%. The team learned that a well‑tuned WebSocket layer can replace expensive long polling without sacrificing reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
