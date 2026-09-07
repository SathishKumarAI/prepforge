---
qid: ing_12ea4c0014__faang__local
question: 'Explain: Real-Time Gaming Leaderboard — Leaderboard System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 484
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:27:39-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a real‑time leaderboard for an online game that updates instantly as players finish matches and supports:  
- Low latency reads (≤50 ms) for millions of concurrent users.  
- Write throughput ≈10k ops/sec (match results).  
- Top‑N queries, pagination, and per‑region or global views.  
Assumptions: data is write‑heavy, read‑light, we can use eventual consistency, and we have a cloud provider with managed services.

**2️⃣ Approach**  
1. **Data model:** store `(player_id, score)` in an append‑only log (e.g., Kinesis).  
2. **Real‑time aggregation:** stream into a *sorted set* index in Redis/ElasticSearch; use a background worker to recompute scores per player.  
3. **Cache tier:** keep the top 10k entries in a distributed cache (Redis Cluster) for instant reads.  
4. **Persistence:** write final aggregates to DynamoDB / Bigtable for durability and backup.  
5. **API layer:** expose REST/GRPC endpoints that read from cache first, fallback to DB if stale.  

**3️⃣ Depth**  
- **Write path:** ingest → stream → worker → update sorted set (O(log N)).  
- **Read path:** query cache → O(1) for top‑N; pagination via cursor in sorted set.  
- **Consistency:** eventual, acceptable for leaderboards.  
- **Scalability:** horizontal scaling of workers and Redis nodes handles growth.  

**4️⃣ Edge Cases**  
- Score spikes causing cache churn: use rate limiting & batched updates.  
- Player deletion or bans: remove from all tiers.  
- Clock skew between services: normalize timestamps before aggregation.  

**5️⃣ Optimize & Communicate**  
- Add a *stale‑read* flag to let clients show “just updated” data.  
- Use Bloom filters in Redis to quickly reject absent players.  
- Periodically snapshot Redis into S3 for disaster recovery.  

This design balances low latency, high throughput, and fault tolerance—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
