---
qid: ing_d758df17f6__star__local
question: 'Explain: Geo sharding — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 314
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:39:36-05:00'
sources: []
---

**Situation:** In my last role at a global e‑commerce startup, our product catalog grew from 2 million SKUs in one region to over 15 million across six continents. The single PostgreSQL cluster was hitting 60 % CPU and latency spiked to 350 ms during holiday sales.

**Task:** I needed to design a sharding strategy that would keep query times under 120 ms, support real‑time inventory updates, and allow us to add new regions without downtime.

**Action:** I mapped each country’s catalog into its own shard on Amazon Aurora Serverless using the `pg_shard` extension. We applied a geo‑sharding key (country code) and used cross‑region read replicas for analytics. To keep writes consistent we implemented two‑phase commit via AWS DMS, and set up automated failover with Route 53 latency routing. I also introduced a global secondary index on `product_id` to enable fast lookups across shards.

**Result:** After deployment, read latency dropped to 95 ms, CPU usage fell below 30 %, and we scaled from 3 to 18 nodes in under an hour during the Black Friday surge. The architecture now supports seamless addition of new markets, and I learned that careful key design plus managed services can turn sharding into a maintenance‑free growth lever.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
