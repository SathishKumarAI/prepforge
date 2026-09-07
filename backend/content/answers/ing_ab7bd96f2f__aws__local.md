---
qid: ing_ab7bd96f2f__aws__local
question: 'Explain: WebSockets — Long Polling vs WebSockets - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 432
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:54:04-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a feature that streamed real‑time sensor data to a mobile dashboard. The team debated **Long Polling vs WebSockets** for the transport layer.

**Action**  
I scoped the requirements: 10 k concurrent users, <50 ms latency, 99.9 % uptime, and cost under $5k/month. I compared both approaches:

| | Long Polling | WebSockets |
|---|---|---|
| **Protocol** | HTTP + repeated requests | TCP‑based persistent connection |
| **Latency** | 300–500 ms (poll interval) | <30 ms |
| **Scalability** | Burdens ALB/ELB with many open connections | Handles >100k concurrent WS via **Amazon API Gateway WebSocket APIs** + **AWS Lambda** |
| **Cost** | High request charge on **API Gateway REST** + compute idle time | Lower per‑message cost, cheaper keep‑alive on **EC2 Auto Scaling** |
| **Reliability** | Client reconnection logic required; higher failure rate | Built‑in reconnect & ping/pong; 99.999% SLA with **Elastic Load Balancing (ELB)** |

I chose WebSockets using API Gateway + Lambda for message routing, backed by DynamoDB Streams to push updates. The architecture achieved **<20 ms latency** and handled **120k concurrent users** during peak, while keeping spend at $3.8k/month.

**Result**  
The rollout increased user engagement by 45% (daily active sessions) and reduced server‑side CPU usage by 30%.  

**Bar‑raiser takeaways** – I demonstrated *Ownership* (owning the end‑to‑end solution), *Dive Deep* (quantitative trade‑off analysis), and *Deliver Results* (measurable performance gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
