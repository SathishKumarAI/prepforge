---
qid: ing_5587325039__star__local
question: 'Explain: Presence Platform With Pub-Sub Server — Real Time Presence Platform
  System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 371
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:18:58-05:00'
sources: []
---

**Situation:**  
At my last company we had a mobile messaging app that was growing to 5 million daily active users. The existing “last‑seen” status feature lagged behind real time – users saw stale presence updates and the backend database became a bottleneck during peak hours.

**Task:**  
I was tasked with designing a scalable, low‑latency presence platform that could push real‑time online/offline states to all clients while keeping the data store consistent and cost‑effective.

**Action:**  
I chose a publish–subscribe architecture using Redis Streams for the ingestion layer and Kafka for durable event replication. Each user’s status change (login/logout) is published to a Redis Stream, which immediately triggers a WebSocket push via an Nginx reverse proxy with sticky sessions. To avoid single points of failure, I deployed the Redis cluster in a multi‑AZ setup and used Kafka Connect to sync status snapshots into PostgreSQL for long‑term analytics. Load was balanced across stateless worker nodes that consume from Kafka; each worker maintains a local cache of the most recent 10 k statuses to reduce latency. I also implemented exponential backoff on reconnections and rate limiting to protect against burst traffic.

**Result:**  
The new system reduced presence update latency from ~5 seconds to <200 ms during peak load, handled 3× more concurrent users without additional hardware, and cut database write traffic by 70%. The team learned that coupling a fast in‑memory stream with durable messaging gives both real‑time responsiveness and reliable persistence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
