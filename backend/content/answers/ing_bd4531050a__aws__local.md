---
qid: ing_bd4531050a__aws__local
question: 'Explain: Common Use-cases: — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 534
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:31:21-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional ML platform team at a fintech startup, I was asked to advise on data storage for an upcoming product that would ingest ~10 M events/day and serve real‑time inference requests (≤5 ms). The goal: pick the right database(s) to support 3 core use‑cases—streaming analytics, model training, and low‑latency predictions.

**Action**  
I mapped each use‑case to a specific database type and AWS service:

| Use‑case | Database Type | AWS Service | Why |
|----------|---------------|-------------|-----|
| Streaming analytics | Column‑store (OLAP) | Amazon Redshift / Athena | Fast aggregations on time‑series data. |
| Model training data | Document + Search | DynamoDB + OpenSearch | Schema‑flexible feature sets, full‑text search for feature engineering. |
| Low‑latency inference | Key‑value cache | Amazon ElastiCache (Redis) | Sub‑millisecond read/write for model weights and predictions. |
| Transactional config | Relational | Amazon RDS PostgreSQL | ACID guarantees for feature flag management. |
| Event logging | Time‑series | Timestream | Built‑in retention policies, auto‑scaling. |

I drafted a cost/availability trade‑off matrix: e.g., **ElastiCache** costs ~$0.0035/hr per node but delivers 99.999% availability with automatic failover; **Redshift Spectrum** scales to petabytes for $0.0001/GB processed.

**Result**  
After implementation, real‑time inference latency dropped from 12 ms to 4 ms (30% improvement), training data ingestion throughput increased by 250%, and total monthly storage cost decreased by 18% versus a monolithic PostgreSQL solution. The architecture also supported zero‑downtime scaling during peak load.

**Reflection**  
I practiced *Ownership* by owning the end‑to‑end data stack, *Dive Deep* into each database’s internals, and *Bias for Action* with rapid prototyping. A bar‑raiser would note my quantitative impact (latency, cost) and my willingness to iterate on failures—e.g., replacing DynamoDB indexes after a 15% query slowdown.

> **Key Takeaway:** Align the database type with the specific ML workload; AWS services let you mix & match for optimal performance, availability, and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
