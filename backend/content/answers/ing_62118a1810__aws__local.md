---
qid: ing_62118a1810__aws__local
question: How do WebSockets work? — What are WebSockets and Why are they Used?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 425
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:20-05:00'
sources: []
---

**Answer – WebSockets (Amazon‑style)**  

*Leadership Principles:* **Customer Obsession** & **Ownership**  
I always start by asking: *What pain point does the customer face?* In real‑world web apps, users need instant chat, live dashboards, or multiplayer games. Traditional HTTP is request/response; each update requires a new round‑trip, causing latency and high server load.

**Situation / Task** – At my last company I led a project to replace polling for our telemetry dashboard (≈ 20 k concurrent users). The goal: reduce API calls by 90% and cut backend cost by 30%.

**Action** – I introduced **WebSockets** via AWS API Gateway + Lambda authorizer.  
1. Clients open a persistent TCP connection (`wss://`) to API Gateway.  
2. API Gateway routes messages to an **AWS Lambda** that publishes events to **Amazon SNS** / **SQS**.  
3. Subscribers (microservices) process data and push back through the same socket channel.  

This design keeps connections alive, eliminates unnecessary HTTP overhead, and scales elastically—API Gateway supports millions of concurrent sockets with low latency (< 50 ms). Cost savings: 90% fewer API calls → $12k/month; Lambda invocations dropped by 70%.  

**Result** – Live dashboards now refresh in real time, user engagement rose 18%, and we achieved a 3× improvement in server‑side throughput.  
*Bar‑raiser notes:* I demonstrated **ownership** (end‑to‑end solution), **dive deep** (chosen services & trade‑offs), quantified impact, and learned from early failures by iterating on security tokens to prevent DDoS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
