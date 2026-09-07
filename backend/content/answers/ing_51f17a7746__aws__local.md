---
qid: ing_51f17a7746__aws__local
question: 'Explain: Types of Indexes — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 474
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:30:22-05:00'
sources: []
---

**Situation** – At Uber we had a global *LedgerStore* that needed to expose **trillions of indexes** (user, ride, payment, driver‑location) while keeping query latency under 200 ms for every request.

**Task** – Design an indexing architecture that scales horizontally, remains cost‑effective, and gives us full ownership over data quality.

**Action**  
1. **Sharded, columnar storage** on **Amazon S3** (Parquet) for cold analytics; each shard is a *ledger segment* keyed by time window.  
2. For hot reads we used **DynamoDB Global Secondary Indexes (GSIs)** with *partition key = index type + hash of key* and *sort key = timestamp*.  
3. To reduce write amplification, we employed **Amazon Kinesis Data Streams** to batch‑upsert into DynamoDB via a Lambda that applies idempotent merge logic (ensuring eventual consistency).  
4. A nightly **AWS Glue** job scans S3 shards, aggregates statistics and writes *compact index snapshots* back to S3, which are then used by the **Amazon Athena** layer for ad‑hoc reporting.  

**Result** – The system handled 5 trillion indexed rows with <200 ms read latency, a 30 % reduction in DynamoDB write costs versus naive per‑record updates, and a 99.999% availability SLA achieved through multi‑AZ deployments and automatic failover.

> **Leadership Principles:**  
> *Customer Obsession* – instant access to accurate ride data for drivers and passengers.  
> *Ownership* – end‑to‑end pipeline from ingestion to analytics with clear SLAs.  
> *Dive Deep* – profiled hot paths, tuned GSI cardinality, and measured cost per GB.  

**Bar‑raiser notes:** Look for ownership of the entire flow, deep dive into partitioning strategy, quantified performance gains, and lessons learned when the first prototype hit 400 ms latency due to uneven shard sizing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
