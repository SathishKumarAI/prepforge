---
qid: ing_99c5512c0f__star__local
question: 'Explain: Two-Tiered Caching — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 353
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:40:18-05:00'
sources: []
---

**Situation** – At my last role I was tasked with reducing latency for a real‑time recommendation engine that served 2 M requests per day. The first tier was an in‑memory Redis cache, and the second tier was a local SSD cache on each inference node.  

**Task** – I had to design a coherent eviction policy so that frequently used feature vectors stayed in Redis while less critical data moved to SSD, without exceeding 2 GB of memory per node or hitting disk read limits.

**Action** – I mapped the top eight eviction strategies: LRU, LFU, FIFO, ARC, Clock, Random, Least Recently Used with expiration (LRU‑TTL), and Weighted LRU. For Redis I enabled *volatile-lru* with a 30 s TTL for hot embeddings; for SSD I implemented a custom ARC layer in Go that promoted items back to Redis when access patterns changed. I monitored hit ratios via Prometheus, tuned the weight between LRU‑TTL and ARC based on traffic bursts, and added a “cold cache” flag to bypass eviction during nightly batch jobs.

**Result** – The hybrid policy raised overall cache hit rate from 62 % to 87 %, cutting inference latency by 35 ms (average) and reducing CPU usage by 18 %. I learned that combining multiple strategies across tiers can adapt to both short‑term spikes and long‑term trends, and that real‑time telemetry is essential for fine‑tuning eviction parameters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
