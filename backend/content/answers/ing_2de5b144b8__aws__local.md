---
qid: ing_2de5b144b8__aws__local
question: 'Explain: Consistency — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 473
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:09:05-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a recommendation engine for an e‑commerce platform that served 8 M daily users. The model training pipeline needed to ingest user click logs, update feature tables, and write back predictions in one *atomic* step so the serving layer never saw stale or partially‑written data.

**Action – Design & Implementation**  
I built a *single transaction* workflow using **Amazon RDS (PostgreSQL) + Amazon DynamoDB Streams + AWS Lambda**:

1. **Batch Loader** – A Kinesis Data Firehose streams click events into an S3 landing zone, then triggers a Lambda that writes a *batch record* into PostgreSQL.
2. **Transactional Write** – The same Lambda performs an `INSERT … RETURNING` inside a database transaction and, on success, publishes a DynamoDB update via the Streams API.  
   *Why ACID?* PostgreSQL guarantees Atomicity, Consistency, Isolation, Durability for the write‑back; DynamoDB Streams ensures eventual consistency for downstream caches.
3. **Serving Layer** – A SageMaker endpoint reads from an Aurora Serverless DB that is a read replica of RDS, guaranteeing read‑your‑writes with minimal latency.

**Result**  
The end‑to‑end pipeline achieved < 2 s latency per batch, 99.9% success rate, and reduced prediction drift by **32 %** (measured via A/B test on conversion). Cost was capped at $0.12/GB due to serverless scaling.

---

### Leadership Principles Highlighted
- **Ownership** – I owned the end‑to‑end data flow, from ingestion to serving, ensuring reliability.
- **Dive Deep** – I analyzed latency traces and DB logs to pinpoint transaction bottlenecks, iterating until the system met SLAs.  

This approach demonstrates how ACID guarantees can be blended with AWS serverless primitives to deliver consistent, high‑performance ML services at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
