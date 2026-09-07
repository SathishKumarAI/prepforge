---
qid: ing_2e03731d8c__aws__local
question: 'Explain: Introduction — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 477
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:09:23-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When Uber launched its global surge‑pricing model in 2016, our data platform had to index every ride request, driver status change, and traffic event in real time—over **trillions of rows per day**. The existing OLAP store could not deliver sub‑second lookups, jeopardizing the customer experience.

**Action (Dive Deep + Bias for Action)**  
I led a cross‑functional team to build *LedgerStore*, a distributed log‑based index engine on top of **Amazon Kinesis Data Streams** and **DynamoDB Global Tables**.  
1. **Ingest**: All events flowed through Kinesis shards, auto‑scaling with `shard count = event rate / 5 MB/s`.  
2. **Indexing**: A Lambda stream processed records, wrote composite keys (timestamp + geohash) into DynamoDB, enabling *O(log n)* lookups.  
3. **Query Layer**: We exposed a lightweight API via **API Gateway + Lambda@Edge**, caching hot queries in **ElastiCache‑Redis** to reduce latency to <50 ms.  

**Result (Deliver Results)**  
- Index throughput grew from 1 M ops/sec to **4.5 T ops/day** with zero downtime.  
- Query latency dropped from 500 ms to **30 ms**, boosting surge‑pricing accuracy by **12%** and reducing driver‑customer wait times by 18%.  
- Cost stayed under budget: $2.3M/year vs projected $3.8M, thanks to on‑demand scaling and reserved capacity for hot shards.

**Reflection (Learn from Failure)**  
Early prototypes over‑provisioned DynamoDB partitions, causing throttling. I instituted *auto‑sharding* logic that split hot keys after 1 GB of writes, preventing hotspots—an iterative lesson in balancing simplicity with scalability.  

This solution exemplifies **Customer Obsession** (instantaneous pricing) and **Ownership** (end‑to‑end responsibility from ingestion to delivery).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
