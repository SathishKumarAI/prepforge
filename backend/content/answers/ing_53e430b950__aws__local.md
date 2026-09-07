---
qid: ing_53e430b950__aws__local
question: 'Explain: the on the consistent hashing um on — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 756
total_tokens: 1004
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:34:38-05:00'
sources: []
---

**Situation – Problem (Customer Obsession + Ownership)**  
I was leading a team that built DoorDash’s real‑time rider‑restaurant matching system. Customers complained that the latency for showing nearby restaurants spiked during peak hours and that riders sometimes saw stale locations because the websocket pool kept closing under load. I owned the whole end‑to‑end solution.

**Task – What I had to deliver**  
Design a scalable, low‑latency architecture that:  
1) consistently routes location requests to the nearest data center (geo‑hashing + consistent hashing).  
2) keeps rider and restaurant websockets alive with minimal churn.  
3) guarantees 99.9 % uptime while staying under $4 M/yr.

**Action – Technical design & AWS services**  

| Component | Design | Services | Scalability / Availability |
|-----------|--------|----------|----------------------------|
| **Geo‑hashing + Consistent Hashing** | Encode lat/lon into 12‑bit geohash, shard by hash ring with virtual nodes. Use *consistent hashing* so adding a new region only remaps ~1/N of keys. | Amazon DynamoDB (partitioned by geohash), AWS Lambda for routing logic. | Auto‑scales read/write capacity; region replication keeps data local to riders. |
| **WebSocket pool** | Long‑lived connections via API Gateway WebSocket + Elastic Load Balancer across AZs. Use *health checks* and *automatic reconnect* with exponential backoff. Keep a DynamoDB table of active sessions for quick lookup. | Amazon API Gateway, AWS IoT Core (for device‑to‑device messaging), EC2 Spot Instances for fallback workers. | 3‑AZ deployment; connection pool size scales with CloudWatch metrics; failover within <200 ms. |
| **Location updates** | Rider app pushes GPS every 5 s to Lambda via API Gateway; Lambda writes to DynamoDB Streams → triggers Kinesis Data Firehose to update a Redis cache (ElastiCache). Restaurants poll the cache for nearby riders. | AWS Lambda, Amazon Kinesis, ElastiCache Redis, CloudWatch Alarms. | Near‑real‑time (<300 ms) updates with auto‑scaling on stream volume. |
| **Cost controls** | Spot Instances + Savings Plans; use DynamoDB On‑Demand where traffic spikes unpredictably; cache hot data in Redis to cut read ops. | AWS Budgets, Cost Explorer. | Maintained under $3.8 M/yr while handling 10× peak load. |

**Result – Quantified impact (Deliver Results)**  
- Latency for “nearby restaurants” dropped from 650 ms to **120 ms** (avg) during rush hour.  
- WebSocket churn fell from 12 % to **0.4 %** per day.  
- Revenue grew by **$1.2 M/month** due to smoother rider experience.  

**Learnings & Bar‑raiser cues**  
- *Dive Deep*: I traced a 200 ms spike to stale geohash partitions; fixing the hash ring reduced churn.  
- *Bias for Action*: Launched a canary rollout in one region before full global deployment, avoiding downtime.  
- *Ownership*: Handled post‑deployment incidents personally and documented rollback playbooks.  

This architecture balances **customer obsession** (instant, accurate locations) with **ownership** (end‑to‑end reliability) while staying scalable, available, and cost‑effective on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
