---
qid: ing_c0e965ab90__fp__local
question: 'Explain: User Base — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 381
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:52:54-05:00'
sources: []
---

## Why “User Base” matters in an Instagram‑style system

At its core, the *user base* is a **dynamic graph** of accounts linked by follow edges.  
The system must support three operations with sub‑millisecond latency:

1. **Create / update user profile** – O(1) write to a key/value store (e.g., DynamoDB).  
2. **Follow / unfollow** – an edge insertion/deletion that must keep the adjacency list consistent across replicas; we model it as a *wide‑row* partition on `user_id` with a secondary index for followers.  
3. **Feed generation** – the heavy hitter: for each user, pull the most recent N posts from all followed accounts.

The graph’s skew (some users have millions of followers) forces a **partitioned fan‑out model**. We pre‑compute “push” feeds into per‑user queues (Kafka → Redis Streams), while also supporting “pull” queries that merge live timelines on demand. This hybrid satisfies both low latency for popular users and scalability for the long tail.

### Non‑obvious insight  
The *follow graph* is not just a data structure; it is an **information bottleneck**. By caching the fan‑out in a distributed stream, we trade storage (duplicate posts per follower) for bandwidth savings—each post travels once instead of once per follower. The key principle: **entropy minimization** – reduce repeated transmission of identical data across a highly connected network. This is why Instagram’s “push” feed is favored over pure pull; the system leverages graph theory, streaming, and information‑theoretic compression to keep latency low while scaling to billions of users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
