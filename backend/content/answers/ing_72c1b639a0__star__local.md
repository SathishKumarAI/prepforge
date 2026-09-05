---
qid: ing_72c1b639a0__star__local
question: How does database sharding work? — What is Database Sharding? - Shard DB
  Explained - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 353
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:17:09-05:00'
sources: []
---

**Situation** – In my last role I was tasked with scaling a real‑time analytics platform that was hitting a 2 GB RAM ceiling on our single PostgreSQL instance. The user base doubled overnight and latency jumped from 120 ms to over 1 s during peak hours.

**Task** – My goal was to design a sharding strategy that could distribute the data across multiple nodes, keep read/write throughput high, and allow us to add more shards without downtime or complex migrations.

**Action** – I chose hash‑based horizontal partitioning on the `customer_id` field because our queries were almost always customer‑centric. Using AWS RDS Aurora with the “Aurora Serverless v2” feature, I created three write clusters and a read replica cluster for each shard. I wrote a thin routing layer in Node.js that hashed incoming requests to determine the correct shard endpoint, using the Murmur3 algorithm to avoid hotspots. For cross‑shard reporting I added an external analytics service (Amazon Redshift) that ingested logs via Kinesis Data Firehose; this allowed us to run aggregate queries without hitting our OLTP shards.

**Result** – After deploying the sharded architecture, write latency dropped from 1 s to under 200 ms and we could scale horizontally by adding a fourth shard in just an hour. Our read throughput grew from 500 QPS to over 5,000 QPS, and we avoided any single‑point failures during the migration. I learned that careful choice of hash key, consistent routing, and decoupling analytics workloads are critical for robust sharding at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
