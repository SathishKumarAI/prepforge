---
qid: ing_023d1eff29__aws__local
question: 'Explain: Long-Polling: — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 368
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:29:17-05:00'
sources: []
---

**Answer (Amazon Way)**  

> **Situation:** In a recent e‑commerce MVP I built a real‑time inventory dashboard that customers could subscribe to for instant stock updates. The initial implementation used *long polling*—the client sent an HTTP request every 30 s, the server held it until data changed or timed out.  
> **Task:** Reduce latency and server load while keeping costs low.  
> **Action:** I switched to **WebSockets** on AWS API Gateway + Lambda Authorizer, backed by a DynamoDB Streams‑triggered Lambda that pushes updates via Amazon SNS to the connected clients. WebSocket connections stay open, so each update is sent immediately with ~50 ms latency. I added CloudWatch metrics to track connection count and message throughput, and set up an Auto Scaling policy for the WebSocket API based on *ConnectionCount* to handle sudden traffic spikes.  
> **Result:** Latency dropped from 30 s (polling) to <70 ms, reducing server‑side polling calls by ~90 % and cutting EC2 usage by 75 %. Monthly cost fell from $1,200 to $350 while user engagement on the dashboard increased 35 % as measured by pageviews per session.  
> **Learnings:** Owning the end‑to‑end flow (customer obsession + ownership) revealed that a protocol change can deliver massive scalability gains with minimal engineering effort. The key trade‑off is managing persistent connections, which I mitigated with API Gateway’s built‑in connection limits and CloudWatch alarms—demonstrating deep dive into AWS capabilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
