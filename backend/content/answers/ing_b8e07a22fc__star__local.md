---
qid: ing_b8e07a22fc__star__local
question: 'Explain: NoSQL — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 348
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:41:04-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the analytics pipeline for a social‑media app that had just hit 15 M daily active users. The existing relational stack (PostgreSQL) couldn’t handle the write throughput needed for real‑time engagement metrics, and our latency goals were slipping past 200 ms.

**Task** – I needed to architect a scalable, low‑latency storage layer that could ingest millions of events per second, support flexible schema updates, and still allow fast aggregation queries for dashboards.

**Action** – I chose a NoSQL solution inspired by the “system‑design‑primer” Twitter case study. We set up a sharded MongoDB cluster (10 shards) with consistent hashing on user ID to distribute writes evenly. For write amplification we used a capped collection per day and a background compaction job that merged small documents into larger ones, reducing I/O. Read paths were served by a Redis cache layer for the most active users, while analytical queries hit an Apache Druid cluster built from nightly bulk loads of MongoDB exports. We also implemented TTL indexes to purge old engagement data automatically.

**Result** – Write throughput increased from 1 kWPS to 200 kWPS, and average read latency dropped to 45 ms. The analytics dashboards now refresh in under 10 seconds for any user segment. I learned that choosing the right NoSQL pattern—sharding, capped collections, and cache layering—can dramatically improve both scalability and developer productivity when you’re building a high‑traffic service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
