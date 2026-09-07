---
qid: ing_e62bb200f0__faang__local
question: 'Explain: In-App Notification Processor — Design Notification Service |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 499
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:33:33-05:00'
sources: []
---

**Clarify**

We need a scalable *In‑App Notification Processor* that pushes real‑time alerts to millions of users across devices (web, iOS, Android).  
Assumptions:  
1. Notifications are event‑driven and can be batched per user.  
2. Latency ≤ 200 ms for single‑user alerts; ≈ 5 s acceptable for bulk pushes.  
3. Users may opt out or have per‑channel preferences (push, email, in‑app).  

**Approach**

1. **Event ingestion** – Kafka topic “notification_events”.  
2. **Pre‑processing service** – enriches payload, resolves user preferences, writes to a per‑user queue in Redis Streams.  
3. **Delivery workers** – pull from the stream, route to device SDKs via WebSocket or native push APIs (APNs/FCM).  
4. **Persistence & retries** – store metadata in Cassandra; use dead‑letter queues for failures.  
5. **Monitoring** – Prometheus metrics + alerting on delivery latency and error rates.

**Depth**

- *Kafka* provides horizontal scaling, fault tolerance, and backpressure handling.  
- *Redis Streams* give low‑latency per‑user ordering while allowing horizontal worker pools.  
- *Cassandra* stores idempotent notification records (PK=user_id+timestamp) enabling deduplication.  
- Workers use a token bucket algorithm to respect per‑device rate limits.  
- Complexity: Ingestion O(1); delivery O(k) where k is messages per user; storage O(N).

**Edge Cases**

- Sudden spike (flash sale): Kafka partitions auto‑scaling, workers rebalance via consumer group.  
- User offline: store in Redis until heartbeat; fallback to email after 30 min.  
- Permission revoked mid‑stream: worker checks flag before send.

**Optimize & Communicate**

Future improvements: implement a *Feature Flag* layer for AB testing notification types; use a serverless Lambda for bursty events to avoid overprovisioning. I would present this architecture diagram, walk through data flow, justify each tech choice with trade‑offs (latency vs cost), and finish by outlining key SLAs and how we measure them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
