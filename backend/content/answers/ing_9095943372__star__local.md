---
qid: ing_9095943372__star__local
question: 'Explain: 6.4 Like, Comments and Shares — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 519
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:21:49-05:00'
sources: []
---

**Situation**  
While working on a social‑media MVP at a startup, we noticed that user engagement was stagnating: the daily active users (DAU) were only 12 % of our target, and session length hovered around 3 minutes. The product team decided to add comment threads, likes, and share buttons to mimic Instagram’s core interactions.

**Task**  
I had to design a scalable system that could handle millions of posts with real‑time like counts, support nested comments, and allow users to share content across the platform without compromising latency or consistency.

**Action**  
1. **Data model & storage** – I chose a hybrid approach: a relational DB (PostgreSQL) for user metadata and likes (to enforce uniqueness), and a NoSQL store (Cassandra) for comment trees, using a parent‑child key schema to enable efficient pagination.  
2. **Real‑time updates** – Implemented an event‑driven pipeline with Kafka. Like events are published to a “likes” topic; a consumer aggregates counts into Redis as a cache layer, exposing a fast read API (`GET /posts/{id}/like_count`).  
3. **Comment sharding & pagination** – Stored comments per post in a partitioned table keyed by `post_id`, with `created_at` for ordering. For deep threads I used a materialized path stored in Cassandra to retrieve sub‑threads without recursive queries.  
4. **Share handling** – Created a “share” microservice that records share events and propagates them to the user’s feed via a push queue, ensuring eventual consistency while keeping read latency under 50 ms.  
5. **Testing & monitoring** – Deployed Chaos Monkey for the like service, added Prometheus metrics (`like_event_latency`, `comment_fetch_time`), and set up alerts when latency exceeded 200 ms.

**Result**  
Within two months of launch, DAU rose to 27 % and average session time increased from 3 min to 7 min. Like counts were served in <30 ms for 95 % of requests, and comment pagination remained under 150 ms even at depth 10. I learned the importance of separating consistency needs (likes) from high‑throughput, eventual‑consistency workloads (comments), and how an event‑driven architecture can keep user interactions fluid at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
