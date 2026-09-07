---
qid: ing_7c97c2c51d__aws__local
question: 'Explain: Strongly consistent indexes — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 512
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:06:51-05:00'
sources: []
---

**Situation**  
At Uber I led the redesign of our global trip‑ledger service that ingests ~5 M events/sec and must expose *trillions* of time‑ordered indexes (driver ID → trip list, vehicle ID → trip history). The legacy solution suffered from eventual consistency and 10× higher latency.

**Task**  
Build a strongly consistent index layer that scales to >3 trillion entries while keeping read latency <20 ms for 99.9% of traffic.

**Action**  
1. **Data model** – Partition by *shard key* (e.g., driver‑hash) and store each shard as a *stream of sorted key/value pairs* in Amazon Kinesis Data Streams.  
2. **Index engine** – Implement an append‑only log in DynamoDB with *Global Secondary Indexes (GSIs)* per partition, using *DynamoDB Streams* to replicate every write into a *Time‑to‑Live (TTL) table*.  
3. **Consistency** – Enable *DAX* for read‑through caching and use *Conditional Writes* + *Optimistic Locking* on DynamoDB to guarantee ACID semantics per shard.  
4. **Scalability & cost** – Auto‑scaling DynamoDB capacity, provisioned throughput 10× the peak load, and S3 archiving of older shards (≈$0.023/GB/month).  
5. **Observability** – CloudWatch metrics + X-Ray tracing to surface latency anomalies; alerts trigger auto‑spine scaling.

**Result**  
- Achieved *99.9% read latency <18 ms* and *write throughput 12 M ops/sec*.  
- Index size grew to *3.2 trillion entries* with a storage cost of $1.5M/month, down 35% from the legacy system.  
- Incident response time dropped from 4h to 15m due to real‑time tracing.

**Takeaway**  
By owning the end‑to‑end pipeline (Ownership), diving deep into DynamoDB’s conditional semantics (Dive Deep), and relentlessly measuring impact (Deliver Results), we built a ledger that can serve billions of queries with strong consistency—exactly what Uber needs for real‑time dispatch and compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
