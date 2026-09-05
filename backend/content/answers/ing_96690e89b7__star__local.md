---
qid: ing_96690e89b7__star__local
question: 'Explain: Stage 5: Read Replicas (2M-10M users) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 305
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:33:39-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were scaling our fraud‑detection engine from 2 million to 10 million active users. The core model served predictions in real time via a REST API backed by PostgreSQL, and read traffic had ballooned to over 3 M queries per second.

**Task**  
I needed to redesign the database layer so that each request still hit the latest model parameters without creating a bottleneck or sacrificing data freshness.

**Action**  
We introduced a read‑replica architecture: a primary node handled writes and model updates, while five synchronous replicas served reads. Using PostgreSQL’s streaming replication with logical decoding, we streamed only the parameter tables to the replicas. To keep latency low, I implemented a lightweight caching layer (Redis) in front of the replicas for the most frequently accessed features. We also added query routing logic in our API gateway that directed read traffic based on user locality and replica health, ensuring even load distribution.

**Result**  
Read throughput rose from 3 M to 12 M QPS with sub‑10 ms latency. The system sustained a 95 % uptime during peak fraud seasons, and the cost of additional replicas stayed below 15 % of our DB budget. I learned that coupling logical replication with selective caching can deliver both scalability and freshness in high‑traffic ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
