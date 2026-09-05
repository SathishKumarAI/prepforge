---
qid: ing_4ae1d99b58__star__local
question: 'Explain: Candidate — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 304
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:58:00-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a messaging app that needed to show “online/offline” status for millions of users in real‑time. The existing solution was a polling API that caused high latency and bursty database traffic, leading to a 30 % spike in response times during peak hours.

**Task:**  
I had to redesign the presence system so it could deliver sub‑200 ms updates to clients while keeping operational costs below our budget of $5k/month and ensuring at least 99.9% availability.

**Action:**  
I introduced a publish/subscribe architecture using Redis Streams for event ingestion, then built a lightweight Go service that writes presence changes to an in‑memory cache (Redis) and pushes updates via WebSocket to subscribed clients. To avoid overloading the DB I used a write‑through cache with periodic snapshotting to Cassandra for durability. I also implemented sharding by user ID hash and rate‑limit per client, plus health checks that auto‑failover to a standby Redis node.

**Result:**  
The new system cut latency from 1.2 s to 150 ms on average, reduced database writes by 70%, and kept the monthly cost under $3k. I learned how careful choice of caching + event streaming can turn a heavy polling service into a scalable real‑time platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
