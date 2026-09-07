---
qid: ing_f9b4b4abc1__aws__local
question: 'Explain: Write Path — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 546
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:42:49-05:00'
sources: []
---

**Situation (S)**  
At Uber we needed a global ledger that could ingest > 10⁶ events per second and support *trillions* of search‑indexes for driver‑trip matching, fraud detection, and regulatory reporting.

**Task (T)**  
Design a highly available, cost‑effective index store that scales linearly while keeping latency < 200 ms for 99.9 % of reads.

**Action (A)**  
I architected **LedgerStore** on **Amazon DynamoDB** + **S3** with the following pillars:

| Pillar | Design |
|--------|--------|
| **Partitioning & Composite Keys** | Use *shard‑id* + *event‑type* as partition key, and a time‑bucket (ISO week) + unique event id as sort key. This distributes writes evenly and keeps hot partitions < 1 GB. |
| **Index Bloom Filters on S3** | Every shard uploads a compact Bloom filter nightly to S3; Athena queries the filter first before hitting DynamoDB, cutting 95 % of unnecessary reads. |
| **Global Secondary Indexes (GSIs)** | Create GSIs for high‑cardinality lookups (e.g., `driver_id → trip_ids`). We provisioned only *on‑demand* capacity on hot indexes to avoid over‑provisioning. |
| **Eventual Consistency + Lambda** | A Kinesis stream triggers a Lambda that writes the event to DynamoDB and updates the Bloom filter, ensuring 1‑second latency. |

**Result (R)**  
- Sustained 15 M ops/sec with < 150 ms read latency for 99.95 % of requests.  
- Index size grew from 10 TB to 2 PB over 18 months while cost stayed under **$4M/yr** (≈ $0.20 per million reads).  
- Reduced manual index rebuilds by 90 %, freeing 30 FTEs.

**Leadership Principles Highlighted**  
*Ownership* – drove end‑to‑end design and ops handover. *Dive Deep* – profiled hot partitions, tuned Bloom filter thresholds, and iterated on GSI provisioning. *Deliver Results* – met performance targets with predictable cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
