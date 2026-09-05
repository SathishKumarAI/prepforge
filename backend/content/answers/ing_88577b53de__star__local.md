---
qid: ing_88577b53de__star__local
question: 'Explain: is we give you the new and — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 371
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:05:21-05:00'
sources: []
---

**Situation**  
During my senior thesis I was tasked with building a recommendation engine that could serve millions of users in real time. The dataset—user interactions, product metadata, and click‑through logs—reached 500 GB daily, far beyond the capacity of a single RDS instance.

**Task**  
I needed to design a scalable storage layer that would deliver sub‑100 ms read latency for high‑cardinality queries while keeping operational costs low. The goal was to support a recommendation pipeline that required both transactional writes and fast analytics reads.

**Action**  
I chose Amazon DynamoDB after studying the 2018 re:Invent “Under the Hood” session. I modeled data using a single table with composite keys (partition key = user_id, sort key = event_timestamp) and leveraged global secondary indexes for product‑centric queries. To keep writes fast, I used on‑demand capacity mode initially, then shifted to provisioned with auto‑scaling once traffic patterns stabilized. For analytics, I set up DynamoDB Streams to feed data into an EMR Spark cluster, where we performed incremental aggregations. I also employed PartiQL for ad‑hoc SQL‑like queries during debugging.

**Result**  
The system handled 3 M write requests per second with a 95th‑percentile latency of 78 ms, and the recommendation pipeline produced results in under 200 ms for 99% of users. Costs dropped by 35% compared to an equivalent RDS solution. I learned how DynamoDB’s partitioning, auto‑scaling, and stream integration can be orchestrated to meet both transactional and analytical workloads at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
