---
qid: ing_ed70d4fa18__faang__local
question: 'Explain: Leaderboard high-level design — Leaderboard System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 552
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:52:36-05:00'
sources: []
---

**Clarify**  
We need an online leaderboard that shows real‑time rankings for millions of users (e.g., a game or coding platform). Key assumptions to confirm:  
• Updates arrive at ~10 k req/s, queries at ~1 k req/s.  
• Ranking is by a single numeric score; ties are broken by timestamp.  
• Data must be available within 200 ms and consistent across replicas.

**Approach**  
1. **Ingestion layer** – API gateway → rate‑limit → Kafka topic per game.  
2. **Processing** – stream processor (Kafka Streams/Flink) updates a fast key‑value store (Redis or DynamoDB) with the latest score.  
3. **Storage** – Persist full history in an OLAP system (Cassandra / Bigtable).  
4. **Ranking engine** – Periodic batch job (Spark) materializes sorted slices into a read‑optimized table (sorted set in Redis or a pre‑computed columnar store).  
5. **Serving layer** – API gateway → cache‑first lookup; fallback to Redis if miss.

**Depth**  
- Use *sorted sets* in Redis for O(log N) insert/update and O(log N + k) range queries, suitable for sub‑second latency.  
- For durability, write-through to Cassandra with a time‑to‑live of 30 days; use CDC to sync score changes back to Redis.  
- Batch jobs run every minute to refresh the top‑10k slice, keeping consistency without blocking real‑time updates.  
- Complexity: writes O(log N), reads O(log N + k); memory cost ≈ size_of_sorted_set.

**Edge Cases**  
- **Score spikes**: backpressure in Kafka → consumer lag; mitigate with auto‑scaling.  
- **Ties**: store (score, timestamp) as composite key to enforce deterministic ordering.  
- **Out‑of‑order events**: deduplicate by user ID and keep the max score.

**Optimize & Communicate**  
Explain that this hybrid real‑time + batch approach balances latency with consistency. Highlight trade‑offs: Redis offers speed but limited durability; Cassandra provides persistence but slower reads. Discuss monitoring (Lag, cache hit rate) and how you’d iterate on shard size or replication factor to scale. This narrative showcases structured thinking, clear communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
