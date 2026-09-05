---
qid: ing_1aaaf14f02__star__local
question: 'Explain: Best practices — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 389
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:22:55-05:00'
sources: []
---

**Situation:**  
While leading the data‑engineering team for a real‑time recommendation engine, we migrated our clickstream logs from a legacy MySQL cluster to an ElasticSearch index that served the model training pipeline. Our daily ingest hit 12 M documents, but query latency spiked during peak hours.

**Task:**  
I had to design shard sizing and document allocation so that ingestion stayed under 200 ms per batch and search latencies dropped below 50 ms for 95% of requests, all while keeping cluster cost predictable.

**Action:**  
First, I profiled the document size (~1.2 KB) and read/write ratios (70/30). Using Elastic’s shard‑size guidance, I calculated that a single 5 GB shard would comfortably hold ~4 M docs before reaching the 10 % threshold for hot‑shard saturation. To avoid hotspots, I split the index into three 15 GB primary shards and added one replica per shard, enabling parallel ingestion across data nodes. I also implemented dynamic routing based on a hashed user ID to evenly distribute traffic, and set up an index lifecycle policy that rolled over every week, keeping each shard small enough for efficient refreshes.

**Result:**  
After the re‑sharding rollout, ingest latency dropped from 350 ms to 180 ms, while search latency fell from 120 ms to 35 ms. We reduced cluster size by 20% and avoided costly “hot‑shard” incidents. The exercise taught me that shard sizing is a balance of document volume, read/write patterns, and hardware limits—getting it right prevents performance cliffs before they hit users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
