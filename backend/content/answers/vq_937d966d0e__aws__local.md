---
qid: vq_937d966d0e__aws__local
question: What is Row Chaining, Row Migration?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 494
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:03:59-05:00'
sources: []
---

**Situation – Problem**  
When our analytics team moved from a legacy on‑prem SQL server to **Amazon RDS for PostgreSQL**, we hit a bottleneck: queries that joined large fact tables with sparse dimension data were returning millions of rows, many of which were useless “holes” in the join. The engineering lead asked me to investigate and propose a solution.

**Task – What I had to achieve**  
I needed to reduce query latency by an order of magnitude while keeping the data model flexible for future schema changes, all within our $200 k quarterly budget.

**Action – Technical & Design**  

1. **Row Chaining** – I introduced *partitioned indexes* on the fact table using `hash` partitions keyed by the foreign key to the dimension table. This allowed PostgreSQL to skip entire partitions that had no matching dimension rows, effectively “chaining” only relevant rows into the join path.

2. **Row Migration** – For legacy rows that were orphaned or duplicated across environments, I wrote a Lambda‑driven ETL (using `AWS Glue` for schema discovery) that migrated clean records to an *archival S3 bucket* and removed them from RDS. The migration job ran nightly with `AWS Step Functions` orchestrating retries and monitoring.

3. **Cost & Availability** – By moving stale rows out of the primary DB, we cut the instance size from `db.r5.large` to `db.r5.medium`, saving ~30 % annually. Partitioned indexes kept availability high (no downtime during re‑indexing) and improved read throughput by 12×.

4. **Metrics** – Post‑migration, join queries that previously took **9 s** now complete in **0.7 s** on average, a **94 % reduction**. Storage costs dropped from **$1,200/month** to **$840/month**.

**Result – Impact & Learning**  
The solution delivered measurable performance gains (94 % faster queries) and cost savings while preserving data integrity. It also highlighted the importance of *dive deep* into query plans and *ownership* over the entire data lifecycle—key Amazon Leadership Principles that guided my approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
