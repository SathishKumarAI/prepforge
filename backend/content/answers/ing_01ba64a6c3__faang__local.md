---
qid: ing_01ba64a6c3__faang__local
question: 'Explain: Type of data store — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 542
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:48:01-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Build a high‑throughput leaderboard that ranks millions of users in real time (e.g., gaming scores).  
*Assumptions I’d confirm:*  
- Update frequency: how many score submissions per second?  
- Read latency requirement for the top‑N view.  
- Persistence vs. cache trade‑off, eventual consistency tolerance.  
- Size of each rank entry (userID + score).

**2️⃣ Approach**  
1. **Write‑through architecture:**  
   - *Ingest layer* → Kafka / Kinesis stream to buffer updates.  
   - *Compute layer* → Stream processor (Kafka Streams/ Flink) aggregates per user and emits to a key‑value store.  
2. **Data stores:**  
   - *Primary:* Distributed KV store (Cassandra, DynamoDB) keyed by `userID`, storing latest score.  
   - *Secondary:* Sorted set cache (Redis sorted sets or ElasticSearch index) for fast top‑N queries.  
3. **Refresh strategy:**  
   - Periodic batch job (every 1–5 s) reads KV store, rebuilds the sorted set in the cache.  
4. **API layer** → Serve GET `/leaderboard?limit=N` from the cache; POST `/score` writes to Kafka.

**3️⃣ Depth & Complexity**  
- *Write path:* O(1) per update (Kafka + KV).  
- *Read path:* O(log N) for top‑N on Redis sorted set.  
- Consistency: eventual (updates propagate in ~1 s).  
- Partitioning: shard KV by hash of userID; cache shards by range of scores.

**4️⃣ Edge Cases**  
- Duplicate score submissions → deduplicate using last‑write‑wins or timestamps.  
- Score decreases (e.g., penalties) → handle negative deltas in stream processor.  
- Cache miss on first read → fallback to KV store and populate cache lazily.  
- Shard rebalancing during scaling → propagate new partitions to both KV and cache.

**5️⃣ Optimize & Communicate**  
- *Latency:* Use Redis for hot reads; avoid scanning the entire dataset.  
- *Throughput:* Kafka decouples ingestion from storage, allowing burst handling.  
- *Reliability:* Replicate KV store; use Redis cluster with persistence (RDB/AOF).  
I’d present this diagrammatically in an interview and iterate on each layer based on interviewer feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
