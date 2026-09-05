---
qid: ing_115b6770f5__star__local
question: 'Explain: Non-Functional Requirements — Live Comment System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 337
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:03:26-05:00'
sources: []
---

**Situation** – I was hired by a media startup to overhaul their livestream chat that was crashing during peak viewership (10k concurrent viewers). The existing system had latency spikes above 3 s and could not scale beyond 5 k users.

**Task** – Build a live comment platform that guarantees <200 ms end‑to‑end latency, handles 50 k concurrent connections, supports real‑time moderation, and remains cost‑effective on AWS.

**Action** – I architected a microservice stack: a WebSocket gateway (Node.js + `socket.io`) behind an Application Load Balancer, a Redis cluster for pub/sub to distribute messages instantly, and a Kafka topic per channel for durability. For scaling I used Auto Scaling Groups with spot instances and leveraged Lambda for moderation rules (regex, ML‑based toxicity score). To meet the latency NFR, I kept user metadata in DynamoDB with TTL and employed CloudFront caching for static assets. I introduced a circuit breaker pattern to fallback to queued messages when Redis was overloaded.

**Result** – The new system supported 70 k concurrent viewers with <120 ms average latency under load tests. Downtime dropped from 30 % to <1 %. Costs were reduced by 35 % thanks to spot instances and efficient caching. I learned that balancing real‑time performance with fault tolerance often requires a hybrid of in‑memory pub/sub and durable messaging queues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
