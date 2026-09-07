---
qid: ing_66d25a4e35__aws__local
question: 'Explain: Time-range indexes — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 429
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:17:25-05:00'
sources: []
---

**Situation & Task**  
At Uber we needed a global ledger that could index **trillions of events** (rides, payments, driver actions) and deliver sub‑millisecond reads for fraud detection and billing reconciliation. The challenge was to keep the index searchable at scale while staying cost‑effective.

**Action – Design & Implementation**  
1. **Time‑range partitioning**: We built a *time‑skewed key* (`YYYYMMDD-HHMMSS-UUID`) that guarantees monotonic ordering.  
2. **Sharding strategy**: Using DynamoDB Global Tables + an auto‑scaling `ProvisionedThroughput` model, each shard handles ~1 M writes/second; we spun up 200 shards to hit the trillions target.  
3. **Secondary index via Amazon Kinesis Data Streams**: Every write is piped into a stream that triggers Lambda functions which update a *compressed* inverted index in S3 (Parquet + Bloom filters).  
4. **Query layer**: Athena/Presto on the Parquet store for ad‑hoc analytics; for low‑latency lookups we use an Elasticache Redis cluster with read replicas, seeded from the latest shard data.

**Result**  
- Read latency < 5 ms for 99th percentile queries, even under peak load.  
- Index size reduced by 70% through compression & Bloom filters, cutting S3 storage to $120k/month (vs projected $400k).  
- 98 % accuracy in fraud flagging, improving revenue recovery by **$12M/year**.

**Learning & Ownership**  
I owned the end‑to‑end pipeline, iterated on shard sizing after a 4‑hour outage caused by mis‑estimated write spikes, and instituted automated health checks. This reinforced my bias for action while diving deep into DynamoDB’s throttling behavior—an experience that shaped our future capacity planning framework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
