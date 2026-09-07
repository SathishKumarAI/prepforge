---
qid: ing_df73fe51f3__aws__local
question: 'Explain: Tiered storage — Time-Series PostgreSQL at Petabyte Scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 432
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:44:49-05:00'
sources: []
---

**Situation / Task**  
When my team was tasked to ingest and serve petabyte‑scale IoT telemetry for a global smart‑factory client, the existing PostgreSQL cluster could not meet 10 000 TPS with <5 s latency. I owned the solution architecture.

**Action**  
I designed a *tiered storage* pipeline:  
1. **Hot tier – Amazon Aurora Serverless v2 (PostgreSQL)** for real‑time ingestion and OLTP queries, auto‑scaling up to 32 k RCU/RCU.  
2. **Warm tier – Amazon Timestream** for time‑series compression and down‑sampling (1‑hour aggregates).  
3. **Cold tier – S3 with Athena & Redshift Spectrum** for long‑term archival and analytical workloads.  

Data flows through an event‑driven Lambda pipeline that writes to Aurora, triggers a Kinesis Data Firehose to Timestream, and periodically snapshots the raw stream to S3. I added a *deduplication layer* using DynamoDB streams to prevent duplicate records.

**Result**  
Latency dropped from 15 s to <2 s for ad‑hoc queries; cost per TB reduced by 60% versus a monolithic Aurora cluster. The system handled 12 k TPS spikes with zero outages over 18 months, meeting the SLA of 99.99 %.  

**Reflection**  
I *dive deep* into each service’s cost model and failure modes, learning that Timestream’s retention policies can be tuned to avoid unnecessary S3 writes. The bar‑raiser will note my ownership (full lifecycle), quantified impact (latency & cost), and lessons from a failed initial attempt where we over‑provisioned Aurora without tiering.  

> **Leadership Principles:** Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
