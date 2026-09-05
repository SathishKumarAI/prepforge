---
qid: ing_1441b2014f__star__local
question: 'Explain: Database Design — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 404
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:08:48-05:00'
sources: []
---

**Situation**  
When I joined a fast‑growth startup that was pivoting to a photo‑sharing platform, the founders wanted an “Instagram‑like” system that could serve millions of users while keeping latency under 100 ms for the feed. The existing data store was a single MySQL instance that quickly became a bottleneck.

**Task**  
I had to design a scalable database layer that supported user profiles, photo uploads, comments, likes, and an efficient news‑feed query, all with eventual consistency but minimal read latency.

**Action**  
I chose a polyglot persistence approach:  
1. **PostgreSQL** for relational data (users, relationships, comments) using partitioned tables on `user_id`.  
2. A **NoSQL key‑value store (Cassandra)** for the feed: each user’s timeline stored as a wide‑row with columns keyed by timestamp, enabling O(log n) reads of the latest N posts.  
3. **Redis** caches hot feeds and recent like counts to hit sub‑10 ms read paths.  
4. Implemented a background worker (Kafka + Spark) that pre‑computes follower streams and writes them into Cassandra.  
5. Employed eventual consistency with conflict resolution via vector clocks for likes/comments, ensuring no data loss during network partitions.

**Result**  
Within three months, the platform supported 2 M active users with an average feed latency of 65 ms and a 99.9% uptime SLA. The read amplification dropped from 10× to 1.5× compared to the monolithic design, and storage costs were reduced by 35%. I learned that blending relational integrity with NoSQL scalability, backed by smart caching and pre‑aggregation, is key for high‑traffic social feeds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
