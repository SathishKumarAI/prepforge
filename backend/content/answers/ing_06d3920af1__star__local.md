---
qid: ing_06d3920af1__star__local
question: 'Explain: Application complexity — What is Database Sharding? - Shard DB
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 337
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:42:40-05:00'
sources: []
---

**Situation:**  
In late 2023 our e‑commerce platform hit a critical traffic spike during the holiday season—orders per minute jumped from 4K to over 30K, and our single PostgreSQL instance was throttling on CPU and I/O, causing latency to climb above 500 ms.

**Task:**  
I needed to scale read/write throughput without rewriting the entire codebase or compromising data consistency, all while staying within our AWS budget and keeping downtime under five minutes.

**Action:**  
I designed a horizontal sharding strategy: split the customer table by hashed `customer_id` into eight shards hosted on separate RDS Aurora PostgreSQL clusters. I implemented a lightweight routing layer in Node.js that used consistent hashing to direct each request to its shard, added cross‑shard replication for read scaling, and updated our ORM mappings to be shard‑aware. To keep the transition smooth, I ran a phased migration script that copied data incrementally while mirroring writes with logical replication, ensuring zero data loss.

**Result:**  
Post‑migration, read latency dropped from 480 ms to 120 ms, write throughput doubled, and we handled peak traffic without any service interruption. The cost increased by only 12% due to the added replicas, but overall user satisfaction improved, reflected in a 15% uplift in conversion rate during the next sales window. I learned that thoughtful sharding combined with consistent hashing can deliver elastic scalability while preserving application integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
