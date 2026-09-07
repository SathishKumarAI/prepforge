---
qid: ing_1dcd0f12cb__faang__local
question: 'Explain: Good Shard Key: user_id — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 438
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:54:29-05:00'
sources: []
---

**Clarify**  
You’re asked why `user_id` is a “good shard key” in a sharded database (e.g., MongoDB, Cassandra). I’ll assume the goal is to distribute user‑centric data evenly while keeping related rows local.

**Approach**  
1. Define what makes a shard key effective: uniform distribution, locality of reference, minimal cross‑shard traffic.  
2. Map `user_id` against these criteria.  
3. Explain trade‑offs and edge cases.

**Depth**  
- **Uniformity:** User IDs are typically sequential or hashed, giving an even spread across shards; each shard receives ~1/|S| of the rows.  
- **Locality:** All data for a single user (profile, posts, messages) shares the same key, so queries that target one user hit only one shard, reducing latency and network hops.  
- **Scalability:** Adding a new shard simply re‑hashes `user_id`; no need to migrate large partitions of unrelated data.  
- **Write amplification:** High write traffic is balanced because each write maps deterministically to a shard.

**Edge Cases**  
- **Hot users:** Very active accounts can create hotspots; mitigated by using a hash prefix or “shard key salting.”  
- **Secondary indexes:** If queries need other keys (e.g., email), secondary indexes may span shards, incurring extra cost.  
- **Schema evolution:** Adding new fields that are not keyed on `user_id` doesn’t affect sharding.

**Optimize & Communicate**  
I’d suggest a *hashed* shard key (`hash(user_id)`) to avoid sequential ID clustering and keep the distribution uniform. I would also propose monitoring write hotspots and, if detected, introduce a “shard‑by‑prefix” scheme. In conversation, I’d emphasize that choosing `user_id` aligns with both data locality (fast reads per user) and balanced writes—two core goals in large‑scale system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
