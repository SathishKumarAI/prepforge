---
qid: ing_32ef239765__star__local
question: 'Explain: MongoDB database sharding strategies — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 347
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:10:22-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time recommendation engine that ingested millions of user interactions per day. The training dataset lived in MongoDB, and by the end of Q2 our single shard was hitting 70 GB, causing 4‑second query latencies for model updates.

**Task** – I had to redesign the database so that read/write throughput stayed under 1 ms while keeping data locality for the feature store used by our TensorFlow models. The goal was a cost‑effective sharding strategy that would scale horizontally as traffic doubled.

**Action** – I chose a **range‑based shard key** on `user_id` because user features are naturally partitioned by ID and this keeps related documents together, reducing cross‑shard joins for feature retrieval. I enabled **chunk migration** with automatic balancing and set the chunk size to 64 MB to avoid hot spots. To further optimize, I added a **hashed index on `event_timestamp`** within each shard so that time‑series queries stayed local. Finally, I scripted a nightly compaction job that moved older logs into a separate “archive” collection on cheaper storage.

**Result** – After deployment the average query latency dropped to 0.8 ms, and we scaled from 2 to 6 shards without any service interruption, reducing our monthly cost by ~15%. I learned that choosing the right shard key—balancing data locality against write amplification—is critical for ML pipelines that depend on low‑latency feature access.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
