---
qid: ing_59f0d89e22__faang__local
question: 'Explain: Leaderboard API — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 432
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:12:43-05:00'
sources: []
---

**Clarify**  
*Goal:* Build a public leaderboard that shows the top N participants for each challenge (e.g., Kaggle).  
Assumptions:  
- Many concurrent score submissions per second.  
- Scores are immutable once posted.  
- Leaderboards need near‑real‑time updates but can tolerate slight staleness.  

**Approach**  
1. **Data model** – `Submission(id, user_id, challenge_id, score, ts)`.  
2. **Storage layers** – write‑through to a relational DB for durability; cache in Redis sorted sets (`zset`) per challenge for fast reads.  
3. **Write path** – API receives submission → validate → insert into DB → `ZADD` score to Redis set.  
4. **Read path** – client requests top N → `ZRANGE` with scores from Redis; fallback to DB if cache miss.  
5. **Background job** – periodically (e.g., every minute) persist the in‑memory leaderboard back to a read‑optimized store (Cassandra/Bigtable) for analytics and audit.  

**Depth**  
- **Complexity:** Write O(log M) in Redis (`M` submissions per challenge); Read O(N).  
- **Consistency:** Strong consistency on write path via DB; eventual consistency on reads from cache.  
- **Scalability:** Shard by `challenge_id`; use a CDN for static assets.  

**Edge Cases**  
- Duplicate submissions: reject or keep highest score.  
- Very high traffic spikes: employ rate limiting, queue writes (Kafka).  
- Cache evictions: ensure graceful fallback to DB.  

**Optimize & Communicate**  
- Use read‑replica clusters to offload queries.  
- Monitor cache hit ratios; auto‑scale Redis nodes.  
- Explain trade‑offs: faster reads vs eventual consistency, cost of additional caching layer.  
- Highlight observability: metrics on latency, error rates, and leaderboard freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
