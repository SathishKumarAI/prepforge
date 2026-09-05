---
qid: ing_01ba64a6c3__star__local
question: 'Explain: Type of data store — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 345
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:31:48-05:00'
sources: []
---

**Situation** – While leading the backend team for a mobile gaming startup, our weekly leaderboards were lagging behind real‑time gameplay. The live score updates were arriving in bursts, causing our Redis cache to flush and users saw stale rankings during peak hours (≈20 k concurrent players).

**Task** – I had to redesign the data store layer so that leaderboard queries stayed under 50 ms, while still handling high write throughput and guaranteeing eventual consistency across global shards.

**Action** – I introduced a hybrid storage pattern:  
1. **Write‑through cache** using Redis Streams to buffer incoming scores per region.  
2. A **time‑partitioned Bigtable table** (or DynamoDB with composite keys) for durable, append‑only logs, keyed by `region#timestamp`.  
3. Periodic **batch aggregation jobs** in Dataflow that compute top‑N per region and write the results to a read‑optimized **Cassandra super table**.  
4. Implemented a *read‑through* API that first hits Cassandra for the cached ranking; if it’s older than 5 s, triggers a lightweight recompute using the stream buffer.

**Result** – Latency dropped from ~200 ms to <45 ms under peak load, and write throughput increased by 3× without affecting game performance. The system now scales horizontally with new regions, and we gained confidence in data consistency across shards. I learned how combining streaming buffers with time‑partitioned logs can deliver both speed and durability for real‑time leaderboards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
