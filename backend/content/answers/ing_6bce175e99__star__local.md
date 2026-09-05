---
qid: ing_6bce175e99__star__local
question: 'Question 4: How Will This Memory Be Retrieved?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 333
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:02:48-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building an AI‑driven fraud detection system that needed to remember transaction patterns over the past 12 months. Our database was growing rapidly, and a simple SQL join would have taken minutes, breaking our real‑time alert pipeline.

**Task** – I had to design a memory retrieval mechanism that could quickly pull the relevant historical features for each new transaction while keeping latency under 50 ms and storage costs manageable.

**Action** – I implemented a hybrid approach: first, I used Redis as an in‑memory cache with LRU eviction keyed by customer ID. For longer‑term retention, I built a time‑partitioned Parquet store on S3 and maintained a lightweight Bloom filter index to avoid scanning irrelevant partitions. During retrieval, the system queried Redis; on a miss it fetched only the necessary partition from S3, updated the cache, and then ran a vector similarity search using Faiss to find the top‑k most similar past transactions for context. I also added an incremental update job that refreshed the Bloom filter nightly.

**Result** – Retrieval latency dropped from 1.2 s to 35 ms on average, boosting our alert throughput by 3× while keeping storage costs under $0.02 per GB/month. I learned how to combine in‑memory caching with disk‑based indexing and vector search to meet strict real‑time constraints in a production AI system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
