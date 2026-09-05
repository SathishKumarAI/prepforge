---
qid: ing_d7dfda3cc1__star__local
question: 'Explain: Push Notification Processor — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 393
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:40:44-05:00'
sources: []
---

**Situation** – At my previous company we had a mobile app with over 3 million active users. The existing push system was a monolithic server that sent notifications one at a time, causing high latency and occasional crashes during peak usage (e.g., holiday sales).  

**Task** – I needed to design a scalable Push Notification Processor that could handle millions of events per second, deliver messages with <200 ms latency, guarantee at‑least‑once delivery, and support feature flags for A/B testing.  

**Action** – I broke the system into three layers:  
1) **Event ingestion** using Kafka topics (one per notification type) to decouple producers from consumers.  
2) **Processing workers** built with Go and gRPC that pull batches of events, enrich them with user segment data from Redis cache, and apply rate‑limiting rules. I added a retry queue in SQS for failed deliveries.  
3) **Delivery layer** where each worker sends to APNs/FCM via HTTP/2 multiplexed connections, using a pool of TLS sockets to reduce handshake overhead. I implemented exponential backoff and dead‑letter queues. For monitoring, I exposed Prometheus metrics (queue depth, delivery success rate) and set alerts for >5 % failure rates.  

**Result** – The new system handled 1.2 million notifications per minute with a 95th‑percentile latency of 180 ms. Delivery reliability improved from 92 % to 99.7 %, and we reduced infrastructure costs by 35 % by shifting from a single VM to serverless workers during low traffic periods. I learned the importance of decoupling, backpressure handling, and continuous observability in real‑time systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
