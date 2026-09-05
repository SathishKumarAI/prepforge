---
qid: ing_eaeccfe3db__star__local
question: 'Explain: Database Storage — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 301
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:17:56-05:00'
sources: []
---

**Situation:** In my final year project I built a miniature social‑media platform similar to Instagram, and we hit a bottleneck when the photo upload volume spiked during a campus event—our single relational table could not keep up with 10 k writes per minute.

**Task:** I had to redesign the data layer so that media metadata, user feeds, and follower relationships could scale horizontally while keeping read latency under 50 ms for popular users.

**Action:** I split the schema into three services: a write‑optimized PostgreSQL cluster for user profiles; an append‑only Parquet store on S3 for raw image files with CDN caching; and a distributed graph database (Neo4j) to model follower edges. I added a Kafka queue between upload handlers and the graph service, enabling eventual consistency. For feeds I precomputed timelines in Redis Streams keyed by user ID, refreshing every 5 minutes via a background worker.

**Result:** After deployment, write throughput rose to 30 k ops/min, read latency dropped from 120 ms to 35 ms for top users, and storage costs fell by 40% thanks to object‑storage compression. I learned that micro‑service data partitioning combined with asynchronous pipelines can turn a monolith bottleneck into a resilient, scalable architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
