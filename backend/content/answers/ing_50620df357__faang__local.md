---
qid: ing_50620df357__faang__local
question: 'Explain: Terminology — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 497
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:51:32-05:00'
sources: []
---

**Clarify**  
We need a scalable *leaderboard* for an online ML competition (e.g., Kaggle‑style). The system must ingest user scores, keep the top N per problem, support real‑time queries, and handle millions of submissions daily. Confirm assumptions:  
- Max users ≈ 10M, max contests ≈ 1K, leaderboard depth N≈ 1000.  
- Scores are numeric (lower is better).  
- Submissions arrive at ~1k/s.  

**Approach**  
1. **Data ingestion layer**: REST/GRPC API + message queue (Kafka) to buffer submissions.  
2. **Scoring engine**: Stateless microservice that pulls batches from Kafka, computes score, writes to a write‑through cache (Redis).  
3. **Persistent store**: PostgreSQL for audit/history; materialized view table `leaderboard(user_id, contest_id, score, rank)`.  
4. **Cache layer**: Redis sorted sets per contest (`ZADD`, `ZRANGE`) for O(log N) top‑N retrieval.  
5. **Refresh strategy**: Every minute sync cache → DB; use eventual consistency for UI freshness.  

**Depth**  
- Ingestion: `O(1)` per submission.  
- Ranking: Redis sorted set gives `O(log N)` insertion, `O(N)` to fetch top N.  
- Persistence: Batch writes reduce I/O overhead.  
Trade‑offs: Cache may be stale by <1 min; DB keeps exact state but slower for reads.

**Edge Cases**  
- Duplicate submissions → dedupe by (user_id, contest_id) before scoring.  
- Ties in score → secondary sort by timestamp or user ID.  
- Contest closure → lock leaderboard to prevent further writes.

**Optimize & Communicate**  
- Use read‑replica shards for PostgreSQL to handle query bursts.  
- Cache warming on contest start improves first‑query latency.  
- Monitor queue depth and backpressure to avoid data loss.  
Explain each component, justify chosen technologies, and discuss how you’d monitor health (latency, cache hit ratio). This showcases structured problem solving, clear communication, and deep technical insight—key for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
