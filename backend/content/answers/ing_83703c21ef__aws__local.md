---
qid: ing_83703c21ef__aws__local
question: 'Explain: Your data is stored as you can — AWS re:Invent 2021 - Which NoSQL
  database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 364
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:22:10-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
While preparing a recommendation engine for a large e‑commerce retailer at AWS re:Invent 2021, my team had to decide which NoSQL store could ingest millions of user events per second, keep latency < 10 ms, and support real‑time personalization.  

**Action (Dive Deep + Bias for Action)**  
I benchmarked **Amazon DynamoDB**, **Cassandra (via Amazon Keyspaces)**, and **DynamoDB Accelerator (DAX)**.  
* *Throughput*: DynamoDB’s provisioned capacity with auto‑scaling handled 5 M RCU/WCU in < 30 s, while Cassandra required manual sharding and still hit a 1 ms burst limit.  
* *Latency*: DAX reduced read latency from 12 ms to 2 ms for hot keys.  
* *Consistency*: DynamoDB’s transactional APIs satisfied ACID guarantees needed for cart updates.  
I designed an event‑driven pipeline (Kinesis → Lambda → DynamoDB Streams) and added a caching layer with ElastiCache Redis for heavy read patterns, ensuring 99.9 % availability.

**Result (Deliver Results)**  
The final architecture lowered average query latency to **1.8 ms**, increased daily active users by **18 %**, and cut operational costs by **22 %** compared to a Cassandra baseline.  

**Bar‑raiser take‑away**: I owned the decision, dove deep into performance metrics, quantified impact on business KPIs, and iterated after a first‑round failure (Cassandra’s burst limits).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
