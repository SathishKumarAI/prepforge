---
qid: ing_48dde520d5__star__local
question: 'Explain: Horizontal Scaling (Scale Out) — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 376
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:54:13-05:00'
sources: []
---

**Situation:**  
I was part of a product team at a startup that had just hit 2 M daily active users on our photo‑sharing app. The existing monolithic backend was struggling with latency spikes during peak hours, and our single database instance could no longer handle the write load for user uploads.

**Task:**  
Redesign the system to support horizontal scaling—adding more machines instead of upgrading a single server—to ensure sub‑200 ms response times even during 24/7 traffic surges while keeping costs under $5k/month.

**Action:**  
I proposed a microservices architecture: split user profiles, media storage, and feed generation into independent services. For the media service I introduced a sharded NoSQL store (Cassandra) with consistent hashing to distribute uploads across nodes. The feed service used a pre‑computed “fanout” queue in Redis Streams, pushing new posts to followers’ queues that were replicated across 3 replicas for high availability. Load balancers (NGINX) routed traffic based on request type, and auto‑scaling groups spun up or down EC2 instances according to CPU/memory thresholds. We also added a CDN (CloudFront) to cache static images globally.

**Result:**  
After rollout, read latency dropped from 450 ms to 120 ms during peak, while write throughput increased by 4× without exceeding the budget. The system now scales linearly: adding another node adds roughly 20% capacity. I learned that careful sharding and pre‑computed fanouts are critical for a high‑traffic social app, and that monitoring metrics must guide auto‑scale decisions to avoid over‑provisioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
