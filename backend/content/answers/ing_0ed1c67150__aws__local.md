---
qid: ing_0ed1c67150__aws__local
question: 'Explain: area and converting it into all of — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 490
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:59:00-05:00'
sources: []
---

**Situation & Task** – While leading the ML‑ops team at DoorDash I was tasked to overhaul the real‑time location service that feeds rider‑driver proximity alerts. The goal: reduce latency from **>200 ms** to **<50 ms**, cut infrastructure costs by 30 % and ensure 99.9 % uptime for 15 M active users.

**Action (Technical)**  
1. **Geo‑hashing with DynamoDB Global Tables** – Split the map into 10 m² cells, store `driver_id → geo_hash` in a partitioned table. Use *DynamoDB Streams* + Lambda to push updates to an **Elasticache Redis Cluster** for fast read‑writes.  
2. **WebSocket API via API Gateway + Lambda** – Each rider opens a persistent WebSocket; the Lambda authorizer checks JWT, then routes messages through a *Kinesis Data Stream* that feeds the Redis cluster.  
3. **Back‑pressure & Scaling** – Auto‑scaling for Elasticache nodes (on-demand) and Lambda concurrency limits tied to Kinesis shard count.  
4. **Observability** – CloudWatch metrics + X-Ray traces; 5 s “time‑to‑first‑byte” SLA.

**Result** – Latency dropped from 200 ms to **48 ms** on average, cost fell by **32 %**, and the system handled a peak of **250k concurrent WebSocket connections** with 99.97 % availability. The real‑time distance calculation accuracy improved from 120 m to 15 m, boosting rider‑driver match rates by **12 %**.

**Leadership Principles** – *Customer Obsession* (improved matching), *Ownership* (owning the end‑to‑end pipeline), and *Dive Deep* (profiling every hop). I documented failure scenarios (e.g., Redis eviction) and introduced a rollback plan, which was later used as a playbook for other services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
