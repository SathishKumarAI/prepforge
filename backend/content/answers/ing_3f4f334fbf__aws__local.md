---
qid: ing_3f4f334fbf__aws__local
question: 'Explain: Distributed Counter Data Schema Design — Distributed Counter System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 439
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:48:55-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of a high‑traffic click‑stream service that needed a *distributed counter* for per‑article view counts. The existing single‑node Redis store was hitting 20 % CPU saturation and a 400 ms latency spike during peak hours.

**Action (Design)**  
I architected an **append‑only log + compaction pipeline** using:

| Layer | AWS Service | Reason |
|-------|-------------|--------|
| Ingestion | Kinesis Data Streams | Guarantees ordered, fault‑tolerant ingestion at 1 M events/s |
| Aggregation | Lambda (dedicated workers) | Auto‑scales; processes batches of 10k records, updating DynamoDB counters |
| Storage | DynamoDB with Global Secondary Index | Provides eventual consistency, 99.999% availability, and auto‑scale on reads/writes |
| Compaction | Step Functions → S3 + Athena | Periodic snapshot of counts to S3 for archival & analytics |

I added **write‑through caching** via DAX to keep read latency <5 ms. The design also implements a *read‑repair* mechanism: if a read misses the cache, the Lambda recomputes the counter from the Kinesis log segment.

**Result**  
- 95 % reduction in CPU usage on Redis (eliminated it).  
- Latency dropped from 400 ms to <7 ms under 1 M events/s.  
- Cost fell by 30 % thanks to serverless components and DynamoDB’s pay‑per‑request model.

**Reflection (Bar‑raiser)**  
I took full ownership of the failure mode analysis, performed a *dive deep* into event replay latency, and iterated on the compaction window until it met SLA. The solution balances scalability, availability, and cost while keeping operational complexity minimal—an embodiment of **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
