---
qid: ing_f478d1133e__star__local
question: 'Explain: Choose the right database — Choose the Right Database for Metric
  Collection'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 359
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:37:14-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were launching a real‑time fraud detection service. The product needed to ingest millions of transaction logs per day and compute anomaly scores on the fly, all while keeping latency below 200 ms for end users.

**Task** – I had to pick a database that could handle high write throughput, support time‑series queries for rolling metrics, and allow us to scale horizontally without breaking consistency guarantees required by the fraud engine.

**Action** – I started by profiling our workload: ~10 M writes/day, 5 % read traffic, and heavy use of moving‑window aggregates. I compared three candidates: PostgreSQL (ACID but limited write scaling), InfluxDB (native TS support but no strong consistency across shards), and a distributed NoSQL store like Cassandra with CQL. After running benchmark tests on our test cluster, Cassandra gave us 1 M ops/sec writes at sub‑10 ms latency, while still supporting secondary indexes for our fraud rules. I also set up a time‑to-live (TTL) policy to auto‑expire old logs and used Spark streaming to materialize aggregated metrics into a read‑optimized columnar store.

**Result** – The system handled 12 M writes/day with 95 % of latency under 150 ms, cutting our fraud detection SLA from 250 ms to 120 ms. I learned that aligning database choice with the exact access patterns—writes, time‑series aggregation, and consistency needs—is crucial for ML‑driven services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
