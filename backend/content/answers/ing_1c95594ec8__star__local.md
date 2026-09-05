---
qid: ing_1c95594ec8__star__local
question: 'Explain: Real-Time Presence Platform High-Level Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 422
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:26:39-05:00'
sources: []
---

**Situation**  
At my previous startup we had a real‑time messaging app with 4 M daily active users. The existing presence system was batch‑processed, so users saw “online” status with a 30‑second lag—unacceptable for voice calls and gaming features.

**Task**  
I was tasked to design a scalable, low‑latency Presence Platform that could deliver per‑user status updates within 200 ms while handling peak traffic of 1 M concurrent connections and supporting future features like “away” or “do‑not‑disturb”.

**Action**  
I broke the system into three layers:  

1. **Ingestion** – a WebSocket gateway built on Netty that forwards connection events to Kafka topics with minimal serialization (Avro).  
2. **State Store** – an in‑memory distributed cache using Redis Cluster (with read replicas) for O(1) status lookups, backed by a persistent write‑ahead log to PostgreSQL for durability. I used Lua scripts to atomically update status and publish change events.  
3. **Delivery** – a push service written in Go that consumes the Kafka “presence updates” topic, pushes notifications via Firebase Cloud Messaging or APNs, and keeps a short‑lived “heartbeat” window (5 s) for stale detection.

I also introduced an exponential backoff for reconnections and added metrics to Prometheus: average latency, cache hit ratio, and error rates. All components were containerized with Docker Compose for rapid iteration.

**Result**  
Within two sprints we reduced presence update latency from 30 s to <200 ms under peak load. Cache hit ratio exceeded 95%, cutting database traffic by 70%. The system handled a sudden spike of 500 k concurrent connections during a product launch with no outages. I learned that coupling fast in‑memory state with reliable persistence, and using Kafka for decoupled ingestion, is key to building real‑time services at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
