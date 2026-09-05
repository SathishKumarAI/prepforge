---
qid: ing_41042b72a6__star__local
question: 'Explain: Databases — System Design was HARD until I Learned these 30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 374
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:38:37-05:00'
sources: []
---

**Situation** – In a fintech startup we were building an ML‑powered fraud detection engine that ingested millions of transaction records per day. The existing PostgreSQL cluster kept choking on join and aggregation queries, causing our model inference latency to spike from 50 ms to over 2 s during peak hours.

**Task** – I had to redesign the data layer so that feature extraction for the ML pipeline stayed under 200 ms while still supporting real‑time analytics and audit trails. The goal was a scalable schema, efficient indexing, and minimal operational overhead.

**Action** – First, I mapped out 30 core database concepts: normalization vs denormalization trade‑offs, columnar storage, materialized views, partitioning (range & hash), data locality, query plan caching, index compression, Bloom filters, sharding strategies, read/write replicas, CAP considerations, ACID vs BASE tuning, and the importance of proper statistics. I chose a hybrid approach: a PostgreSQL cluster for transactional writes, a columnar TimescaleDB extension for time‑series analytics, and Redis streams for feature flags. I implemented partitioned materialized views on high‑cardinality columns, used partial indexes on hot keys, and set up automatic vacuuming with autovacuum delay tweaks. I also added an async worker that pre‑aggregated features into a cache layer exposed via gRPC to the ML inference service.

**Result** – The feature extraction latency dropped from 2 s to 180 ms, throughput increased by 4×, and our fraud detection accuracy improved by 3 % due to fresher data. I learned that mastering these 30 concepts turns a monolithic database into an adaptive, performance‑optimized system that scales with ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
