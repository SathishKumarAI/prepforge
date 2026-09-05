---
qid: ing_4fc8b7971b__star__local
question: 'Explain: RDB (Redis Database) — How Does Redis Persist Data?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 389
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:07:37-05:00'
sources: []
---

**Situation** – In my last role I was building a recommendation engine for an e‑commerce platform that served millions of users per day. The model outputs had to be cached in real time, so we chose Redis as the in‑memory store. However, the team was worried about data loss during node restarts or power failures.

**Task** – My job was to design a persistence strategy for Redis that guaranteed minimal downtime while keeping read performance high for our ML inference pipeline.

**Action** – I set up Redis with both RDB and AOF persistence. For RDB, I configured `save 900 1` (snapshot every 15 min if at least one key changed) and `save 300 10` to capture more frequent changes during traffic spikes. For AOF, I enabled `appendonly yes` and set `appendfsync everysec` so the log was flushed once per second, balancing durability with write latency. I also implemented a background fork for RDB snapshots (`bgsave`) to avoid blocking clients. Finally, I automated backup rotation using Redis‑CLI scripts and stored the dumps in S3 for disaster recovery.

**Result** – After deployment, we saw no data loss during a production outage; the AOF recovered the last second of writes within 0.8 s. Read latency remained under 1 ms, and the combined persistence strategy reduced our recovery time objective from 10 min to 2 min. I learned that combining RDB snapshots for bulk safety with AOF’s fine‑grained logs gives a robust, low‑impact solution for ML workloads that demand both speed and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
