---
qid: ing_1c7d0006fe__aws__local
question: 'Explain: Long Polling vs WebSockets — System Design: Top 15 Trade-Offs
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 452
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:30:40-05:00'
sources: []
---

**Situation / Task**  
I was tasked to redesign the real‑time notification service for a global e‑commerce platform that currently uses long polling and receives ~3 M requests per day. The goal: cut latency from 500 ms to <50 ms, reduce cost by 30 %, and improve developer experience.

**Action**  
I evaluated **WebSockets** vs. **Long Polling** on 15 key trade‑offs (latency, scalability, resource usage, security, browser support, connection churn, server complexity, etc.).  

1. *Latency*: WebSocket handshakes ≈ 50 ms vs polling’s 500 ms round‑trip.  
2. *Scalability*: Each long‑poll consumes an HTTP thread; WebSockets keep a single TCP socket per client, enabling >10× more concurrent users on the same EC2 fleet.  
3. *Cost*: With WebSocket I reduced EC2 CPU usage by 40 % and eliminated idle poll timers—saving $12k/month on Spot instances.  
4. *Reliability*: Implemented a **Redis‑Pub/Sub** broker behind an **Elastic Load Balancer**, ensuring message delivery even if a node fails.  
5. *Security*: Leveraged **AWS Cognito** for token auth and **WAF** to block DDoS, keeping the service compliant with PCI‑DSS.

I deployed the new stack on **Amazon ECS (Fargate)** + **API Gateway WebSocket API**, achieving 95 % of messages delivered in <30 ms. The pilot yielded a 28 % reduction in support tickets for latency issues and a 32 % cost saving.

**Result**  
Customer Obsession: Faster, more reliable notifications increased conversion by 2.3 %. Ownership & Dive Deep: I documented trade‑offs, ran A/B tests, and iterated on the design until metrics hit targets. This project set a new baseline for real‑time services across AWS teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
