---
qid: ing_5a57cf2113__fp__local
question: 'Explain: Feed Service — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 496
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:16:20-05:00'
sources: []
---

**Feed Service – why it must be a “write‑heavy, read‑optimized cascade”**

At its core an Instagram feed answers the query *“show me what my followees posted most recently”*.  
The **fundamental problem** is to deliver, in near real‑time, a ranked list of items that satisfies three constraints:

1. **Freshness** – new posts must appear within seconds.
2. **Scalability** – millions of users issue feeds every minute.
3. **Personalization** – the order depends on user interests and social graph.

From these constraints we derive the architecture:

| Step | Reasoning |
|------|-----------|
| **Ingest → User‑Feed Queue** | Each post is pushed to a *fan‑out* queue for all followers (write‑heavy). This decouples posting from feed generation, allowing linear scalability. |
| **Materialized Views per User** | A background worker consumes the queue and builds a sorted list of candidate post IDs in Redis or RocksDB. Sorting uses a composite key: `timestamp` + *interest score* (computed offline via collaborative filtering). This gives O(1) read latency. |
| **Cache‑First Serve** | The feed service first checks an LRU cache; if hit, it returns the pre‑ranked list instantly. Cache misses trigger a “rebuild” that pulls the latest 200 IDs from the materialized view and enriches them with media URLs. |
| **Consistency Layer** | A small window of eventual consistency (≤ 5 s) is acceptable: we use optimistic locking on the per‑user key so multiple workers don’t overwrite each other. |

**Non‑obvious insight:**  
The *fan‑out* should be *lazy*: instead of pushing every post to all followers immediately, push only to a “hot” subset (e.g., those who interacted with the poster in the last 24 h). The rest are fetched on demand via a secondary “cold” queue. This dramatically reduces write amplification and keeps cold users’ feed latency low without sacrificing freshness for engaged audiences.

Thus, by turning the problem into *write‑heavy fan‑out + read‑optimized materialized view*, we satisfy freshness, scale, and personalization with minimal latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
