---
qid: ing_94d6452d2c__star__local
question: 'Explain: Conclusion — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 346
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:30:31-05:00'
sources: []
---

**Situation** – In my last role, our internal ticketing system needed a live updates feature so that support agents could see new tickets pop up instantly without refreshing the page. The existing polling approach was causing a 30 % spike in server load and noticeable latency for users.

**Task** – I had to design a solution that reduced bandwidth usage, cut response time below 200 ms, and scaled to 5,000 concurrent agents while keeping our infrastructure cost‑effective.

**Action** – I introduced WebSockets using Node.js with the `ws` library. First, I set up an HTTP upgrade handler on our Express server, then established a persistent TCP connection per agent. On ticket creation, the backend pushed a JSON payload over the socket to all connected clients. To keep memory usage low, I implemented a simple publish‑subscribe pattern with Redis pub/sub for cross‑instance scaling and added heartbeat pings to detect stale connections. I also configured TLS termination at our load balancer to secure data in transit.

**Result** – Real‑time updates arrived within 120 ms on average, cutting server CPU usage by 45 % compared to polling. Agent satisfaction scores rose from 3.8/5 to 4.6/5, and we avoided the need for a costly third‑party push service. I learned that WebSockets are ideal when you need low‑latency, bidirectional communication without the overhead of repeated HTTP requests, especially in real‑time dashboards or collaborative tools.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
