---
qid: ing_96a28d5c39__star__local
question: 'Explain: Interviewer — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 426
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:34:21-05:00'
sources: []
---

**Situation** – While leading the backend team at a mobile gaming startup, we launched a new seasonal event that attracted 3 million concurrent users. The existing leaderboard service was a single monolith using MySQL; it couldn’t handle the spike and had latency >2 s for top‑10 queries.

**Task** – Design a scalable, real‑time leaderboard system that supports per‑region, per‑game leaderboards with sub‑second query times, while keeping memory usage under 4 GB per shard and ensuring eventual consistency across data centers.

**Action** – I broke the problem into three layers: ingestion, storage, and API. For ingestion, I built a Kafka producer pipeline that debounces updates and writes to an in‑memory Redis cache (LRU eviction) before persisting to Cassandra for durability. Leaderboards are stored as sorted sets per region/game, sharded by hash of user ID to balance load. To keep query latency low, we pre‑compute top‑N lists nightly into a read‑optimized S3 bucket and serve via CloudFront; the live API falls back to Redis if freshness <5 s. I added a lightweight “score delta” stream that triggers cache invalidation only on score changes >10% of rank shift, reducing churn. We also implemented a time‑to‑live (TTL) policy for stale entries to control memory.

**Result** – Post‑deployment, query latency dropped from 2 s to 120 ms average, and the system handled 200k RPS with no outages during peak usage. The leaderboard remained accurate within ±1 rank for 99.8% of users. I learned that combining real‑time in‑memory caching with batch recomputation balances freshness against cost, and that careful sharding plus selective invalidation is key to scaling a high‑traffic ranking service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
