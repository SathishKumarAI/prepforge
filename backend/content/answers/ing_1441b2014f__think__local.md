---
qid: ing_1441b2014f__think__local
question: 'Explain: Database Design — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 524
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:03:25-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
*Ask what “design an Instagram‑style database” really means:* are we modeling posts, users, likes, comments, stories, feeds? Assume a simplified version: Users ↔ Posts ↔ Likes/Comments. Assume horizontal scalability (many users) and read‑heavy traffic.

**2️⃣ Pick a mental model / framework**  
Use the **Entity–Relationship (ER)** diagram → **Normalization** → **Denormalization for reads**. For scale, think of *partitioning* (sharding), *caching*, and *replication*. Also consider the trade‑off between consistency and latency (CAP theorem).

**3️⃣ Step‑by‑step reasoning**  
1. Identify core entities: `User`, `Post`, `Like`, `Comment`.  
2. Define primary keys (`user_id`, `post_id` etc.) and foreign keys.  
3. Normalize to 3NF to avoid update anomalies.  
4. Spot hot spots (e.g., a user’s timeline). Denormalize by storing a “feed” table or materialized view per user.  
5. Decide on sharding key: shard `Post` by `user_id` or time window; shard `Like/Comment` by `post_id`.  
6. Add indexes on columns used for joins and filters (`created_at`, `author_id`).  
7. Plan caching (e.g., Redis) for feeds, popular posts, user profiles.  
8. Consider eventual consistency: use write‑through cache or async replication.

**4️⃣ Common traps to avoid**  
- *Over‑normalizing*: leads to many joins and latency.  
- *Sharding on the wrong key*: causes hot shards (e.g., all popular users).  
- *Ignoring read patterns*: design for writes only, then hit performance walls.  
- *Underestimating data volume*: ignore storage costs of denormalized feeds.

**5️⃣ Sanity‑check & communicate**  
- Verify cardinalities: one user → many posts; one post → many likes/comments.  
- Check that each table can be partitioned without cross‑partition joins.  
- Walk through a sample query (e.g., “get my timeline”) and ensure it hits at most two shards + cache.  
- Present the ER diagram, explain shard key choices, and outline caching strategy clearly.  

Repeat this cycle until every assumption is validated and trade‑offs are transparent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
