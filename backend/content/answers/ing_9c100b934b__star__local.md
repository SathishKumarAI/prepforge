---
qid: ing_9c100b934b__star__local
question: 'Explain: MongoDB sharded database architecture — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 390
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:44:08-05:00'
sources: []
---

**Situation:**  
At my last startup we built a real‑time analytics dashboard for IoT devices. By Q4 we were ingesting ~1 million events per minute and our single MongoDB replica set started to hit 2 GB RAM limits and write latency spiked to 300 ms.

**Task:**  
I was asked to redesign the data layer so it could scale horizontally, keep writes < 50 ms, and still support ad‑hoc aggregation queries across all devices.

**Action:**  
First I chose a shard key that balanced load—`device_id` combined with `timestamp` (hashed). I set up three shards, each a replica set of three nodes, plus two config servers and a router (`mongos`). Using the MongoDB Atlas CLI I scripted the deployment, enabled automatic balancer, and tuned chunk size to 64 MB. I added a global secondary index on `event_type` to accelerate the most common filters. During the migration I used `shardedCollection.moveChunk()` in small batches to avoid hot spots, monitored with Ops Manager, and adjusted oplog sizes to keep replication lag under 200 ms.

**Result:**  
After go‑live we saw write latency drop from 300 ms to ~35 ms, throughput scale linearly up to 10× the previous load, and query response time for aggregation pipelines fell by 70 %. I learned that choosing a good shard key and balancing chunk size are the most critical decisions—once those are right, MongoDB’s sharding engine does most of the heavy lifting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
