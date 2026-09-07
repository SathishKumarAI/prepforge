---
qid: ing_93aba3eb59__aws__local
question: 'Explain: Subscriptions → Real-Time Updates — REST vs GraphQL - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 526
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:59:41-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation*: My team built a SaaS analytics platform that delivered dashboards to thousands of clients. Clients demanded instant visibility into data changes (e.g., new sales records). We had two options: push updates via **REST polling** or use **GraphQL Subscriptions** over WebSockets.

*Task*: Design an architecture that guarantees low‑latency, high‑throughput updates while keeping operational cost < $5k/month and ensuring 99.9% uptime.

*Action*:  
1. **Requirements & Trade‑offs** – REST polling incurs ≥ 10 s latency (client‑side timer) and repeated HTTP traffic (~200 req/s per client). GraphQL Subscriptions keep a single long‑lived WebSocket, delivering events as they arrive.  
2. **AWS Design** –  
   - *Event source*: DynamoDB Streams + Kinesis Data Streams for change data capture.  
   - *Processing*: Lambda functions parse stream records and publish to an **Amazon API Gateway WebSocket API** backed by a **Lambda authorizer** for auth.  
   - *Client SDK*: Apollo Client (or custom JS) subscribes over the socket; fallback REST polling if sockets fail.  
3. **Scalability & Availability** – API Gateway automatically scales to millions of concurrent connections; Lambda shards per connection keep CPU bounded. DynamoDB Streams and Kinesis ensure durability with 99.99% availability.  
4. **Cost** – API Gateway WebSocket pricing ($1.00/1M messages) + Lambda invocations (~$0.20/1M). For 5k concurrent users and ~10 k updates/day, projected cost ≈ $3.8k/month.

*Result*: After rollout, client‑reported latency dropped from 12 s to < 200 ms (95th percentile). User engagement rose 18%, and support tickets for “data lag” fell by 70%. The architecture also proved resilient during a regional outage; API Gateway’s cross‑region failover kept connections alive with < 1 % downtime.  

*Learnings*: I realized the importance of **bias for action**—prototype both approaches quickly, measure real metrics (latency, cost), and iterate rather than default to REST. This decision has become a reusable pattern across our data products.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
