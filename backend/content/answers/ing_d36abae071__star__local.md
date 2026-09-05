---
qid: ing_d36abae071__star__local
question: 'Explain: Availability — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 402
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:32:18-05:00'
sources: []
---

**Situation** – At my previous company we had to migrate a real‑time analytics pipeline from an on‑prem MySQL cluster to a distributed NoSQL store. The service needed 99.9% uptime while handling 1 M writes per second and supporting geo‑replicated dashboards for our EU customers.

**Task** – I was tasked with evaluating Cassandra versus MongoDB for this workload, focusing specifically on their availability guarantees under network partitions and node failures, and recommending a production architecture that would meet the SLA.

**Action** – First, I set up two 12‑node clusters in AWS (3 AZs each) and used the `cassandra-stress` tool and `mongodump/mongorestore` benchmarks. For Cassandra I enabled QUORUM writes/reads, tuned `read_repair_chance`, and used the `hinted handoff` feature to buffer lost replicas during a simulated 10 min AZ outage. For MongoDB I ran a sharded cluster with replica sets per shard, enabled majority‑write concern, and used the `wiredTiger` engine’s built‑in write-ahead logging. I then introduced controlled network partitions using AWS VPC route tables and measured operation latency, consistency drift, and recovery time. Cassandra maintained 99.9% availability during the partition but exposed stale reads at QUORUM; MongoDB stayed consistent but had a ~200 ms read lag due to majority‑read requirement.

**Result** – Based on these tests I recommended a hybrid approach: use Cassandra for high‑write, low‑latency ingestion with eventual consistency, and MongoDB for the analytics dashboards where strong consistency is critical. Post‑migration, we achieved 99.95% uptime, reduced read latency by 30 ms for the dashboards, and learned that tuning write concern versus availability trade‑offs is key in distributed NoSQL systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
