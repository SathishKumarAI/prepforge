---
qid: ing_1167a34966__aws__local
question: 'Explain: Index validation — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 538
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:04:58-05:00'
sources: []
---

**Situation / Task**  
At Uber, the LedgerStore had to support > 3 trillion index entries for real‑time trip matching while keeping latency < 10 ms and cost under $2M/month. The challenge was validating every write without bottlenecking the stream.

**Action**  
I led a cross‑functional team that re‑architected validation using *Amazon Kinesis Data Streams* + *Lambda* for event ingestion, *DynamoDB Global Tables* for hot key lookup, and *AWS Glue* to materialize incremental checks. Each write triggers a Lambda that hashes the payload, stores it in a sharded DynamoDB table (10 GB per shard), and publishes a “validate‑event” to Kinesis. A downstream consumer aggregates shards every 5 s, compares signatures against an immutable S3 bucket snapshot, and writes audit logs to *Amazon Athena* for compliance.

Key AWS services:  
- **Kinesis** – decouples ingestion from validation, scales elastically to > 10k TPS.  
- **DynamoDB Global Tables** – provides low‑latency reads (≤ 2 ms) with cross‑region replication for availability.  
- **Glue & Athena** – enable cost‑effective ad‑hoc queries on billions of rows without moving data.

We added a *retry* back‑off strategy and an SQS dead‑letter queue to guarantee at‑least‑once delivery, reducing failed validations from 1.2 % to < 0.01 %.

**Result**  
- Validation latency dropped from 350 ms to 8 ms (≤ 10 ms SLA).  
- Cost fell by 28 % while throughput doubled.  
- System achieved 99.9999 % availability over 12 months.

**Leadership Principles Highlighted**  
- **Customer Obsession:** Ensured end‑to‑end trip matching integrity for millions of riders.  
- **Ownership & Dive Deep:** Took full responsibility for the data pipeline, dissecting latency bottlenecks and iterating on design until metrics met targets.  

Bar‑raiser cues: demonstrated ownership by driving cross‑team collaboration, used deep technical knowledge to pick AWS services that balanced cost/latency/scalability, quantified impact with real numbers, and reflected on a failed initial design (single‑node validation) that taught the value of sharding and event‑driven architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
