---
qid: ing_6701842dd1__star__local
question: 'Explain: Scalability — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 348
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:53:52-05:00'
sources: []
---

**Situation** – I was leading a data‑pipeline revamp for our real‑time ad‑tech platform. We had to ingest 30 M events per day and support sub‑second queries for campaign analytics, but the existing MongoDB cluster was throttling under peak load (latency spiked above 200 ms).  

**Task** – I needed to design a scalable NoSQL solution that could handle high write throughput, provide linear scaling with more nodes, and still allow flexible querying of nested JSON documents.  

**Action** – I benchmarked both Cassandra and MongoDB on our workloads. For Cassandra, I set up a 6‑node cluster using the **CQL** schema with a wide‑row design: each event keyed by `campaign_id|timestamp`. I enabled **read repair** and tuned **compaction strategy** to *LeveledCompactionStrategy* for predictable read latency. In MongoDB, I explored sharding on `campaign_id` but found the write amplification from document replication was a bottleneck. I also evaluated the new **MongoDB Atlas Serverless** option, but its autoscaling limits were insufficient for peak bursts.  

**Result** – Switching to Cassandra reduced average read latency to 25 ms and increased write capacity by 4× with linear scaling as we added nodes. The deployment cost dropped 15% due to lower storage overhead, and I learned the importance of matching data model to query patterns when choosing between NoSQL stores.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
