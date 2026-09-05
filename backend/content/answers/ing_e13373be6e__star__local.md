---
qid: ing_e13373be6e__star__local
question: 'Explain: Database Schema Design — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 361
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:59:08-05:00'
sources: []
---

**Situation**  
In my last role at a video‑streaming startup, we were rolling out a new live‑comment feature for our flagship app. The existing database was optimized for static posts, so real‑time comment load (≈10k comments/s during premieres) caused 40 % latency spikes and occasional timeouts.

**Task**  
I had to redesign the schema to support sub‑second read/write throughput, enable efficient pagination, and keep storage costs in check while preserving user metadata and moderation flags.

**Action**  
I introduced a sharded NoSQL layer (Cassandra) for comment ingestion: each shard keyed by `video_id` + hour bucket. The schema had columns for `comment_id`, `user_id`, `content_hash`, `timestamp`, `likes`, `is_moderated`. To support live feeds, I added a time‑series index and used Cassandra’s built‑in TTL to auto‑expire comments after 30 days. For moderation and analytics, I replicated key data into a relational Postgres table with a materialized view on `video_id` for quick reporting. I also implemented optimistic locking on the `likes` counter using lightweight transactions to avoid write contention.

**Result**  
Latency dropped from 350 ms to under 80 ms during peak events; throughput scaled to 20k comments/s without errors. Storage grew by only 12 % compared to the old design, and moderation queries became 5× faster. I learned how hybrid storage balances speed and durability, and that careful sharding plus TTL can dramatically simplify real‑time workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
