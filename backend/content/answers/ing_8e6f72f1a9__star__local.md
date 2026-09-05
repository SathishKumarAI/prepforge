---
qid: ing_8e6f72f1a9__star__local
question: 'Explain: User Service — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 341
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:17:37-05:00'
sources: []
---

**Situation:**  
When I joined a fast‑growth social media startup, the “User Service” had to handle millions of concurrent logins and real‑time profile updates while keeping latency under 100 ms. The existing monolith was choking on write traffic, causing 15% of sign‑ups to timeout during peak hours.

**Task:**  
I needed to redesign the user service as a scalable microservice that could process 200k writes per second, provide eventual consistency for profile data, and support real‑time presence updates without exceeding our budget.

**Action:**  
I split the service into three components: an API gateway with gRPC + load balancing, a write‑optimized PostgreSQL cluster using partitioned tables, and a Redis cache for hot user sessions. For profile changes I implemented an event‑driven architecture—updates were written to Kafka topics, then consumed by a background worker that applied transformations and wrote back to both the DB and a read replica. Presence data was pushed through WebSocket connections backed by a Pub/Sub layer on Google Cloud Pub/Sub. To keep costs down, I used spot instances for workers and auto‑scaling groups for the API tier.

**Result:**  
After deployment, write latency dropped from 250 ms to 70 ms, uptime rose to 99.9%, and we handled a 3× traffic spike during a viral campaign without any outages. The exercise taught me how to balance consistency, performance, and cost when scaling user‑centric services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
