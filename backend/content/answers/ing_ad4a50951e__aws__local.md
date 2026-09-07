---
qid: ing_ad4a50951e__aws__local
question: 'Explain: 28 System Design - WebSockets — What are WebSockets and Why are
  they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 416
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:57:22-05:00'
sources: []
---

**WebSockets – A Quick‑Response Backbone**

*Situation:* In a recent e‑commerce launch I was tasked with delivering real‑time inventory updates to the front‑end while keeping latency under 50 ms for millions of concurrent users.

*Task:* Design a scalable, highly available WebSocket layer that could push stock changes instantly without overloading the API tier.

*Action:*  
1. **Protocol & Architecture** – I chose native WebSockets (RFC 6455) because they keep a single TCP connection open, eliminating the round‑trip overhead of HTTP polling.  
2. **AWS Services** –  
   * **Amazon API Gateway + Lambda** for initial handshake and authentication.  
   * **Elastic Load Balancing (ALB)** with WebSocket support to distribute traffic across EC2 Auto Scaling groups.  
   * **Redis‑on‑ECS** (or Amazon ElastiCache) as a pub/sub broker to fan‑out inventory messages.  
3. **Scalability & Availability** – The ALB auto‑scales by CPU/latency metrics; Redis clusters are Multi-AZ for failover, and each node can handle ~10k concurrent sockets.  
4. **Cost & Trade‑offs** – Switching from HTTP long polling to WebSockets cut API calls by 80 %, saving ~$12K/month. The trade‑off is the need for a persistent connection, mitigated by graceful reconnect logic in the client.

*Result:* We achieved <40 ms average end‑to‑end latency and supported 2M concurrent sockets during peak sales, boosting conversion by **7%** versus the polling baseline.  

**Bar‑raiser notes:** Ownership of the entire real‑time stack, deep dive into protocol trade‑offs, quantified performance gains, and lessons learned from a failed pilot that exposed connection churn.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
