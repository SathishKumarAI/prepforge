---
qid: ing_25d9f9c492__aws__local
question: 'Explain: Choosing the Right Solution — Long Polling vs WebSockets - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 388
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:51:50-05:00'
sources: []
---

**Situation / Task**  
I was leading a data‑science team that needed real‑time model inference for an e‑commerce recommendation engine. The client required sub‑50 ms latency and 99.9% availability across 3 AZs.

**Action – Solution Design**  
1. **WebSocket (AWS IoT Core + Lambda Authorizer)** – provided bi‑directional, persistent connections; each device kept a single TCP socket open, eliminating per‑request overhead.  
2. **Long Polling (API Gateway + DynamoDB Streams)** – simpler to implement but introduced a 5 s poll interval and higher latency.

I performed a *dive deep* analysis: measured connection churn, CPU utilization on Lambda, and network costs. WebSocket kept 90% fewer TCP handshakes (≈ 70 % cost savings) and reduced average round‑trip time from **120 ms** to **28 ms**. Long Polling hit the 99.9% SLA only after adding a second Lambda concurrency tier, increasing spend by **$0.08 per inference**.

**Result**  
We chose WebSockets, delivering **<30 ms latency**, 99.97% availability, and cutting operational cost by **$3K/month** versus the polling alternative. I documented the trade‑offs in a post‑mortem; the team now uses the same pattern for all real‑time inference services.

**Leadership Principles**  
- *Customer Obsession* – prioritized user latency and reliability.  
- *Ownership* – drove the end‑to‑end decision, from requirement gathering to cost analysis.  

Bar‑raiser cues: clear ownership, quantitative impact, deep technical dive, learning from a failed polling prototype.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
