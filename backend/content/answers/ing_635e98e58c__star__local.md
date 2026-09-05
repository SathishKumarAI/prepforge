---
qid: ing_635e98e58c__star__local
question: 'Explain: NoSQL Data Models — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 399
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:46:32-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the user‑feed service for a rapidly growing photo‑sharing app that had hit 15 million active users. The legacy relational schema couldn’t handle the write throughput required for real‑time likes, comments and story updates.

**Task** – Build a NoSQL data model that would support low‑latency reads of a user’s feed while scaling to millions of concurrent writes, without compromising eventual consistency or violating GDPR requirements.

**Action** – I chose Cassandra as the primary store because of its linear scalability and tunable consistency. Each user row stored a sorted set of post IDs keyed by timestamp; we used materialized views to pre‑compute “top posts” per hashtag for quick lookup. For likes/comments, I introduced a separate column family with a composite key (post_id|user_id) to enable fast aggregation via Cassandra’s built‑in counters. To keep the data model flexible, I employed a JSON blob for each post to hold dynamic metadata (tags, geolocation), and used the driver’s batch API to atomically update feed entries when a user posted or liked something. We also set up read repair and anti‑entropy jobs to maintain consistency across replicas.

**Result** – After deployment, read latency dropped from 350 ms to under 50 ms for 95% of requests, while write throughput increased from 4 kW/s to 18 kW/s. The system handled a sudden spike of 2 M concurrent likes during a viral campaign without outages. I learned that careful key design and leveraging built‑in NoSQL features can dramatically improve performance in social‑network workloads, but only when paired with rigorous monitoring and iterative tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
