---
qid: ing_5709c3dcf1__faang__local
question: What is a Leaderboard? — Leaderboard System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 498
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:06:33-05:00'
sources: []
---

**1️⃣ Clarify**  
A leaderboard displays ranked scores of users (or models) in real‑time, e.g., game points or ML challenge accuracy.  
Assumptions: *Real‑time updates*, *high write volume*, *fast reads for top‑k*, *large user base* (~10M+), *scores monotonically increase*.  

**2️⃣ Approach**  
1. **Write path:** ingest score events → validate → update per‑user aggregate in a fast key‑value store (Redis or DynamoDB).  
2. **Rank path:** maintain an index of scores to rank order using a sorted set (Redis ZSET) or a secondary table with score as sort key.  
3. **Read path:** serve top‑k via range queries on the sorted set; serve individual user rank via `ZREVRANK` + `ZSCORE`.  

**3️⃣ Depth**  
- *Write complexity:* O(log N) for Redis ZSET updates (or O(1) for DB write + async background sort).  
- *Read complexity:* O(k) for top‑k, O(log N) for rank lookup.  
- Use **sharding** by score buckets to avoid hot spots; keep a global “global leaderboard” shard and per‑region shards for locality.  
- Persist the sorted set to disk (Redis RDB/AOF or DynamoDB streams → S3) for durability.  

**4️⃣ Edge Cases**  
- Duplicate score updates → idempotent writes.  
- Score overflow → use 64‑bit ints.  
- Users with no scores → default rank = null.  
- Periodic cleanup of stale users to keep size bounded.  

**5️⃣ Optimize & Communicate**  
- Batch writes (e.g., every 100 ms) to reduce latency and network cost.  
- Cache the top‑k in a CDN for ultra‑fast global reads.  
- Monitor hot shards; auto‑scale partitions.  
Explain trade‑offs: in‑memory sorted set gives sub‑millisecond reads but requires memory; DB + background job trades write speed for persistence. This structured plan shows clear problem framing, design choices, complexity, and edge‑case handling—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
