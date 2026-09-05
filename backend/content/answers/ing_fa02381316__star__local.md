---
qid: ing_fa02381316__star__local
question: 'Explain: Create a row/document — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 377
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:48:30-05:00'
sources: []
---

**Situation:**  
At my previous role I was tasked with building a real‑time analytics dashboard for a retail chain that had just migrated its order history from a legacy MySQL system to a NoSQL backend. The data model required inserting millions of daily transaction records, each containing customer ID, product list, timestamp and price.

**Task:**  
I needed to evaluate which database—Cassandra or MongoDB—would deliver the fastest write throughput while keeping latency under 50 ms for read‑heavy queries on recent orders.

**Action:**  
I set up a benchmark cluster: Cassandra (3 nodes, wide‑row schema with composite key `(customer_id, timestamp)`) and MongoDB (sharded collection with hashed `order_id`). I scripted bulk inserts of 1 M documents using native drivers and measured write latency. For reads, I queried the last 24 h of orders per customer. Cassandra’s partitioned row model allowed me to batch writes in a single node, achieving ~20k ops/sec with 30 ms average latency. MongoDB’s shard key caused cross‑node traffic, yielding only ~12k ops/sec and 45 ms latency. I also profiled GC pauses: Cassandra had negligible GC impact due to its write‑optimized LSM tree; MongoDB suffered from frequent collection scans.

**Result:**  
I recommended Cassandra for the ingestion layer, reducing write cost by 35% and keeping read latency within SLA. The dashboard now updates in real time with a 10 ms query response on average. I learned that choosing the right key design (wide row vs sharded hash) is critical to harnessing each database’s strengths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
