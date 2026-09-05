---
qid: ing_248a9374ed__star__local
question: 'Explain: Now this becomes very tricky for Google — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 336
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:42:19-05:00'
sources: []
---

**Situation:**  
At my previous company we launched an internal navigation app that quickly grew to 300k daily active users in the first six months. The traffic spike was causing frequent map tile cache misses and slow route calculations, so our latency goal of <150 ms for a typical request was slipping.

**Task:**  
I had to redesign the mapping backend to support real‑time routing at scale while keeping cost per query under $0.02 and ensuring data freshness within 10 minutes for traffic layers.

**Action:**  
I introduced a multi‑tiered cache: an in‑memory LRU store (Redis) for the most popular tiles, a CDN edge layer for static vector tiles, and a sharded PostgreSQL/PostGIS cluster for dynamic traffic data. For routing I swapped Dijkstra’s algorithm for a hierarchical contraction hierarchy that precomputes shortcuts per region, reducing query time from 120 ms to 45 ms. I also implemented a Kafka pipeline to ingest live GPS streams, updating the traffic layer every minute and triggering cache invalidation only for affected edges.

**Result:**  
Latency dropped to an average of 38 ms, meeting our SLA with headroom. The new architecture handled a peak of 1.2M requests per hour without any downtime. Cost savings were 32% year‑over‑year due to smarter caching. I learned that balancing precomputation and real‑time data freshness is key in large‑scale map services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
