---
qid: ing_66e2137a87__faang__local
question: 'Explain: DB Shards - Recommendations — Shardsrecommendations'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 594
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:43:35-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking how to shard a database that stores user‑item recommendations (e.g., “X is recommended to Y”). I’ll assume:  
* Millions of users, billions of items, high write/read throughput.  
* Recommendations are pre‑computed and refreshed nightly.  
* Reads dominate writes; latency < 100 ms.

**2️⃣ Approach**  
1. Identify the access pattern – most queries fetch recommendations for a single user.  
2. Choose a sharding key that keeps related rows together: *user_id*.  
3. Define shard boundaries (range or hash) to balance load and avoid hotspots.  
4. Add replication per shard for fail‑over and read scaling.  
5. Build a routing layer that maps a user_id → shard endpoint.

**3️⃣ Depth**  
* **Sharding key:** `user_id` (or hash(user_id)). Guarantees all of a user’s recommendations stay on one node, so a single query hits only one shard.  
* **Partitioning scheme:**  
  * *Range:* Users 1–10⁶ → Shard A, 10⁶+1–2×10⁶ → Shard B, etc. Simple but can skew if certain user ranges are hot.  
  * *Hash:* `hash(user_id) % N`. Even distribution; easier to add new shards via consistent hashing (e.g., Ketama).  
* **Replication:** 3‑node replica set per shard gives read‑scaling and high availability.  
* **Routing layer:** A lightweight service (or client‑side logic) that computes the hash and forwards the request. Keeps application code simple.  
* **Schema:** `recommendations(user_id PK, item_id, score, last_updated)`. Index on `(user_id)` for fast scans.

**4️⃣ Edge Cases**  
* *Hot users:* If a few users generate many reads/writes, consider per‑user caching or secondary indexing (e.g., materialized view).  
* *Shard rebalancing:* When adding shards, migrate only affected key ranges to minimize downtime.  
* *Data skew during initial load:* Pre‑populate shards in parallel and monitor write distribution.

**5️⃣ Optimize & Communicate**  
* **Cache Layer:** Use Redis or Memcached per shard for the hottest recommendations.  
* **Batching writes:** Nightly bulk refreshes can be pipelined to each shard, reducing lock contention.  
* **Monitoring:** Track query latency per shard; auto‑scale read replicas if threshold exceeded.  

By sharding on `user_id` and using consistent hashing with replication, we achieve horizontal scalability, low latency reads, and graceful fault tolerance—exactly what a FAANG recommendation service demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
