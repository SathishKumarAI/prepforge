---
qid: ing_b991a296cf__star__local
question: 'Explain: When Not to Shard — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 352
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:42:27-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the recommendation engine for a media streaming platform that had just crossed 20 million active users. The data pipeline was built on Spark and served millions of feature vectors per day, but latency kept creeping above our 200 ms SLA during peak hours.

**Task** – My goal was to reduce query latency by at least 30% without breaking the real‑time inference flow or inflating costs beyond a 15% budget increase.

**Action** – I first profiled the workload and discovered that most read traffic hit a narrow “hot” set of user segments (≈ 5 %) while the rest was fairly evenly distributed. Instead of sharding the entire feature store across dozens of nodes, I applied *read‑through caching* with Redis for those hot keys and kept the bulk of data on a single PostgreSQL cluster. I also added a lightweight sharding layer only for the infrequently accessed historical logs that fed offline model training. This hybrid approach avoided the overhead of full horizontal scaling—no need to maintain consistency across shards, reduced replication lag, and simplified backup.

**Result** – Query latency dropped from 260 ms to 170 ms (a 35% improvement). Operational costs fell by 12%, and we avoided the complexity of sharding a mixed read/write workload. I learned that sharding is most beneficial for workloads with high cardinality, evenly distributed access patterns; otherwise targeted caching and selective sharding can yield better ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
