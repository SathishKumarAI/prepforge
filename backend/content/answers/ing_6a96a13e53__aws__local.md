---
qid: ing_6a96a13e53__aws__local
question: 'Explain: corresponding lat long and that way you — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 468
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:25:29-05:00'
sources: []
---

**Situation – Task**  
I led a cross‑functional team to build Doordash’s real‑time location service for riders and restaurants (≈ 5 M daily active users). The goal was to deliver sub‑2 s latency while keeping cost under $1 M/month.

**Action – Design & Tech**  
*Geo‑hashing*: We used 10‑character H3 hashes (≈ 20 m resolution) stored in **DynamoDB Global Tables** for fast regional reads. Each update triggers an **AWS Lambda** that writes to a **Kinesis Data Stream**; downstream jobs refresh a **Redis‑Elasticache** cache for hot spots.

*WebSocket push*: We deployed **API Gateway WebSockets** backed by **Lambda Authorizer** and **AppSync** subscriptions. Every movement event updates the client via a single persistent socket, eliminating polling.

*Scalability & cost*:  
- DynamoDB autoscaling kept 99.9 % RPS under 200k concurrent reads.  
- Kinesis shards (20) handled 3 M events/second with < 50 ms processing.  
- Redis cluster (2 nodes, 1 GB RAM each) served > 90 % of location lookups at < 5 ms.  
Result: **Latency dropped from 1.8 s to 0.9 s**; cost cut by 35 %.  

**Result – Impact**  
User‑reported “location lag” incidents fell from 12% to 2%, boosting NPS by +3 points.

**Reflection – Learning**  
Initial prototype used plain RDS; the bottleneck was query latency. Switching to geo‑hashing and serverless streams taught me that *data partitioning* is as critical as scaling compute.  

> **Leadership Principles**: Customer Obsession (improve user experience), Ownership (own end‑to‑end flow), Dive Deep (analyze metrics, iterate).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
