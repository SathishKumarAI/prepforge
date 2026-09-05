---
qid: ing_f4ec0df62e__star__local
question: 'Explain: 5.2 Follow a User — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 351
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:38:14-05:00'
sources: []
---

**Situation** – While working on a startup that was scaling to millions of users, we noticed the “Follow” button was lagging during peak traffic. Our goal was to design an efficient follow‑user service that could handle billions of follow actions per day without compromising latency.

**Task** – Build a system that lets any user follow or unfollow another in under 200 ms, supports real‑time feed updates, and scales horizontally with minimal cost.

**Action** – I chose a microservice architecture: a stateless REST API backed by a sharded PostgreSQL for consistency and a Redis cache for hot follower lists. To avoid lock contention, I used optimistic concurrency control with version columns. For the follow graph, I stored adjacency lists in a column‑family store (Cassandra) keyed by user ID, enabling fast read of followers/following sets. I added a Kafka stream to publish follow events to downstream services (feed generator, notifications). Rate limiting was enforced via token buckets per IP and per account. For cold starts, I pre‑seeded Redis with the top 100k most followed users.

**Result** – Post‑deployment latency dropped from 600 ms to 120 ms on average, while throughput increased from 10K to 200K follows/sec during traffic spikes. The system handled 1.2 B follow actions in a month with <0.5 % failure rate. I learned that balancing ACID guarantees for user data with eventual consistency for feeds is key to high‑scale social features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
