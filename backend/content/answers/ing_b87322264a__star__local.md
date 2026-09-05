---
qid: ing_b87322264a__star__local
question: What is database sharding? — What is Database Sharding? - Shard DB Explained
  - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 315
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:40:14-05:00'
sources: []
---

**Situation**  
During my second year at a fintech startup, our user base grew from 50k to over 300k in just six months. The monolithic PostgreSQL instance that stored all transaction logs began hitting 70 % CPU and latency spiked to 250 ms for reads, breaking the SLA we promised to merchants.

**Task**  
I was tasked with redesigning the data layer so that read/write throughput could scale horizontally while keeping consistency for daily reconciliation reports. The goal was to reduce query latency below 50 ms and support at least 10× traffic growth without a new database license.

**Action**  
I introduced horizontal sharding: partitioned the transaction table by `customer_id` into 8 shards, each on a separate Amazon RDS instance. I wrote a routing layer in Go that hashed `customer_id` to the appropriate shard and used connection pooling with pgx. For cross‑shard reporting, I implemented an asynchronous materialized view refresh job that aggregated nightly summaries into a central analytics DB. I also added a lightweight Redis cache for hot user balances to cut read latency further.

**Result**  
Post‑migration, average query latency dropped from 250 ms to 35 ms, and the system handled 12× more concurrent transactions without any new licensing costs. The project taught me how sharding can be coupled with caching and async aggregation to meet strict performance targets while keeping operational complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
