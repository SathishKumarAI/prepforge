---
qid: ing_4a2d9d2c84__aws__local
question: 'Explain: :star: Ideal Use Cases — Apachecasandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 420
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:12:57-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my previous role I was asked to build a real‑time recommendation engine for a global e‑commerce platform that served 12 M daily active users. The requirement: store millions of user‑item interaction events with sub‑millisecond read/write latency and support 99.9% availability during peak holiday traffic.

**Action (Ownership + Dive Deep)**  
I evaluated several NoSQL stores and chose **Apache Cassandra** because of its linear scalability, tunable consistency, and wide‑column model that maps naturally to *user_id → item_id → interaction_metrics*.  
*Design:*  
- **Data model:** Partition key = `user_id`, clustering columns = `item_timestamp`. This allows fast range scans for recent interactions while keeping hot partitions balanced.  
- **AWS services:**  
  - *Amazon Keyspaces (Cassandra)* as a managed cluster (auto‑scaling, multi‑AZ).  
  - *AWS Lambda* to ingest events from Kinesis Data Streams (1 M records/sec) and write to Cassandra in batches.  
  - *DynamoDB Streams* for change data capture feeding downstream ML pipelines.  

**Result (Deliver Results)**  
After launch:  
- Throughput hit 2× projected load with <5 ms read latency during Black Friday.  
- Operational cost dropped 30% compared to a MySQL cluster due to Cassandra’s efficient storage of sparse columns.  
- Recommendation accuracy improved by 12% (MAP@10) because the model could ingest fresh interaction data in near‑real time.

**Reflection (Learn from Failure)**  
Initial prototype used a single keyspace with no TTL; hotspots caused throttling. I added per‑day partition prefixes and enabled automatic compaction, eliminating hot spots—an example of *Bias for Action* combined with deep dive analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
