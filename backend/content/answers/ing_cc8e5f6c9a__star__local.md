---
qid: ing_cc8e5f6c9a__star__local
question: 'Explain: Pros of Horizontal Scaling — Vertical vs Horizontal Scaling |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 309
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:18:02-05:00'
sources: []
---

**Situation:** While leading the backend team for our e‑commerce platform, we hit a traffic spike during a flash sale that pushed our database to 90 % CPU and doubled read latency.

**Task:** I had to keep the site responsive under load without blowing up infrastructure costs or compromising data consistency.

**Action:** I proposed a horizontal scaling strategy: sharding the product catalog across multiple read replicas, implementing a connection pool with automatic fail‑over, and using a distributed cache (Redis Cluster) for session data. We also re‑architected our write path to use eventual consistency on non‑critical metrics, allowing writes to be queued in Kafka before persisting to the master node. I coordinated with DevOps to set up auto‑scaling policies in Kubernetes, so new pods spun up when CPU exceeded 70 % and scaled down during off‑peak hours.

**Result:** During the next sale we handled a 3× traffic increase while keeping average latency below 200 ms; our error rate dropped from 2.5 % to <0.1 %. Cost savings of ~35 % were realized compared with scaling vertically, and the architecture now supports seamless future growth. I learned that horizontal scaling, when paired with thoughtful data partitioning and graceful degradation, delivers elasticity, resilience, and cost efficiency over vertical upgrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
