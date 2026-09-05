---
qid: ing_bc5dbdcd95__star__local
question: What is a shard? — How many shards should I have in my Elasticsearch cluster?
  | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 418
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:48:02-05:00'
sources: []
---

**Situation:**  
In a recent e‑commerce project I was responsible for migrating our product catalog from a legacy SQL database to an Elasticsearch cluster. The catalog had grown to over 12 million items, and the business required near‑real‑time search with sub‑second response times during peak holiday traffic.

**Task:**  
I needed to design the shard layout: decide how many primary shards per index and whether to use replicas, balancing query speed against disk usage and cluster stability. The goal was to keep indexing throughput above 1,500 docs/sec while ensuring that a single node failure wouldn’t bring down search service.

**Action:**  
I started by measuring the total data size (≈ 200 GB) and the number of shards used in our test environment (5 primary shards per index). I ran a sharding simulation with the Elastic “shard sizing” tool, which suggested 3–4 primary shards for this volume to keep each shard under ~50 GB. I also added one replica per primary for high availability. I then performed load testing on the staging cluster, monitoring JVM GC pause times and search latency. When latency spiked at 5 ms on a 6‑shard configuration, I reduced to 4 shards, which brought latency back to ~1 ms while keeping GC pauses below 20 ms.

**Result:**  
The final production cluster used 4 primary shards per index with one replica, achieving an average search latency of 0.8 ms and indexing throughput of 2,200 docs/sec. The cluster handled a 30% traffic surge during the holiday season without downtime. I learned that shard sizing is data‑driven: keep each shard under ~50 GB, balance query load, and always validate with real‑world performance tests before finalizing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
