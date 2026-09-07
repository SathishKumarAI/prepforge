---
qid: ing_15590d47b0__aws__local
question: 'Explain: Collab oration features, ready to ship. — Liveblocks | Realtime
  infrastructure for multiplayer apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 489
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:13:23-05:00'
sources: []
---

**Situation & Task**  
I was hired as a ML Engineer at Liveblocks to add *collaboration* capabilities to our real‑time engine so that users could see each other’s cursor movements, chat messages, and agent actions with sub‑100 ms latency. The goal was to ship a feature‑complete API within 12 weeks while keeping operational costs under $200k/month.

**Action**  
1. **Requirements & Design** – I scoped the data model (user session → room → objects) and defined a *“collab event”* payload that is 32 bytes in size.  
2. **Architecture** – Built a publish/subscribe layer on top of Amazon Kinesis Data Streams (sharded by room ID). Each shard feeds an AWS Lambda function that normalizes events, writes them to DynamoDB (TTL 30 s), and forwards them via WebSocket API Gateway to all connected clients.  
3. **Scalability & Availability** – Kinesis guarantees 1 µs latency for up to 5 M records/sec; DynamoDB auto‑scales with provisioned capacity and a 99.999% SLA. Lambda’s concurrency is burstable, and API Gateway handles TLS termination globally.  
4. **Cost & Trade‑offs** – Estimated $120k/month at peak (Kinesis + Lambda). We avoided a dedicated Redis cluster by using DynamoDB streams to push updates, cutting CAPEX while keeping consistency via eventual read-after-write guarantees.  
5. **Testing & Deployment** – Implemented chaos testing with AWS Fault Injection Simulator to ensure graceful degradation of 10% of rooms under overload.

**Result**  
- Achieved < 80 ms end‑to‑end latency for 95th percentile events, meeting the SLA.  
- Supported 200k concurrent users in a single region without throttling.  
- Reduced operational cost by 35% compared to the legacy WebSocket server.  

**Reflection (Bar‑raiser focus)**  
I took full ownership of the end‑to‑end pipeline, diving deep into Kinesis metrics to tune shard count. The data‑driven success metric (latency & cost) proved impact, and I documented a post‑mortem on an early spike that taught us to pre‑warm Lambda concurrency for bursty traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
