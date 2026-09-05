---
qid: ing_2f7076701d__star__local
question: 'Explain: Directory sharding — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 355
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:03:36-05:00'
sources: []
---

**Situation:**  
While leading the migration of our legacy on‑prem MySQL monolith to a cloud‑native architecture for the new e‑commerce platform, we hit a scalability wall: read traffic spiked during flash sales and the single database instance couldn’t keep up with 200 k concurrent sessions.

**Task:**  
Design and implement a sharding strategy that would distribute user data across multiple database nodes while keeping query latency under 50 ms and preserving ACID guarantees for order processing.

**Action:**  
I scoped the data model, chose horizontal sharding by `customer_id` using MySQL Group Replication on AWS Aurora. I wrote a custom shard router in Node.js that hashed `customer_id` with a modulo function, routed queries to the appropriate RDS instance, and cached routing metadata in Redis for 5 s to reduce lookup overhead. For cross‑shard analytics, I set up an EMR Spark job that pulled snapshots from each shard via S3 export. We also added a global secondary index on `order_date` to support reporting without hitting every node.

**Result:**  
Post‑migration, read throughput increased 4× (from 5 k RPS to 20 k RPS), and latency dropped to an average of 32 ms under peak load. The system handled a 1.2M order burst during the holiday sale with zero timeouts. I learned that proper shard key selection, coupled with intelligent routing cache, can turn a monolith bottleneck into a horizontally scalable service without sacrificing consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
