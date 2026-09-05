---
qid: ing_83703c21ef__star__local
question: 'Explain: Your data is stored as you can — AWS re:Invent 2021 - Which NoSQL
  database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 310
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:56:13-05:00'
sources: []
---

**Situation:**  
During a cloud migration at my previous company, we had to move a real‑time analytics pipeline from an on‑premise relational store to AWS. The data set was highly variable: user session logs, clickstreams, and IoT sensor streams all arrived in near‑real time, each with different cardinalities and access patterns.

**Task:**  
I needed to pick a NoSQL database that could ingest millions of events per second, provide low‑latency reads for dashboards, and support flexible schema without complex joins.

**Action:**  
I evaluated DynamoDB, MongoDB Atlas, and Amazon DocumentDB. I benchmarked write throughput with 5 GB/s simulated traffic and read latency with a mix of point queries and aggregations. DynamoDB’s provisioned capacity model matched our bursty workload; its TTL feature automatically purged old session data. I also leveraged DynamoDB Streams to trigger Lambda functions for real‑time aggregation into Redshift, keeping the analytics layer fresh.

**Result:**  
The switch cut ingestion latency from 300 ms to under 50 ms and reduced operational overhead by 40 % (no sharding or manual scaling). The dashboards now refresh in seconds instead of minutes. I learned that aligning a database’s native features—like DynamoDB’s streams and TTL—to the specific data flow can deliver both performance and simplicity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
