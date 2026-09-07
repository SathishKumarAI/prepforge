---
qid: ing_06368aa02f__aws__local
question: 'Explain: Real-Time Presence Platform Data Storage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 530
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:39:57-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the migration of a real‑time presence platform (used by 3 M+ users for instant messaging) from an on‑premises MySQL cluster to AWS. The goal was to reduce latency (<10 ms per event), scale to 5× traffic, and cut ops cost by 30 %.  

**Action – Design & Implementation**  
* **Requirements**: write‑through latency <10 ms, read consistency for presence status, up‑to‑date across global edge locations.  
* **Architecture**:
  * **Event ingestion** – Amazon Kinesis Data Streams (sharded to 200 shards) → Lambda for idempotent writes.  
  * **Storage** – DynamoDB with a composite key (`userId#timestamp`) and Global Secondary Indexes for quick “online” queries. Uses DynamoDB Accelerator (DAX) for in‑memory caching, lowering read latency to <5 ms.  
  * **Data Lake** – Kinesis Firehose → S3 → Athena for audit & analytics.  
  * **Multi‑AZ replication** via DynamoDB global tables to keep presence data local to any region.  
* **Scalability**: Auto‑scaling shards + on‑demand capacity in DynamoDB; Lambda concurrency throttling ensures backpressure is propagated.  
* **Availability**: 99.999 % SLA from DynamoDB, 3‑tier cache (DAX → Lambda → Kinesis) guarantees graceful degradation.  
* **Cost**: Reduced monthly spend from $120k to $78k (+35 %) by moving to serverless and using spot capacity for the analytics pipeline.

**Result**  
Within three months of cutover:
* Latency dropped from 25 ms to <8 ms (20 % faster).  
* Platform sustained a peak of 12 M presence updates per minute without throttling.  
* Ops overhead fell by 40 % (less database admin, automated scaling).  

**Reflection & Learning**  
I owned the migration end‑to‑end and “dived deep” into DynamoDB’s write throughput limits; this revealed a subtle consistency bug that we fixed with conditional writes—illustrating bias for action and continuous learning.

> **Leadership Principles Highlighted**: *Ownership*, *Dive Deep*, *Customer Obsession* (ensuring user experience), and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
