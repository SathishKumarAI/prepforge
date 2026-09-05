---
qid: ing_37bc888437__star__local
question: 'Explain: Partitioning — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 384
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:19:54-05:00'
sources: []
---

**Situation:**  
During a migration of our e‑commerce analytics platform from a single MySQL instance to a sharded PostgreSQL cluster, we hit a 4 × slowdown in nightly aggregation jobs that generated the daily sales dashboard. The raw logs were 500 GB per day and the query engine was choking on table scans.

**Task:**  
I had to redesign the data layout so that each shard could process its slice of the workload independently, reduce I/O contention, and keep the ETL pipeline under the 30‑minute SLA.

**Action:**  
1. **Range partitioning by date**: I added a `date_trunc('day', event_ts)` column as the primary key for a daily partitioned table.  
2. **Hash partitioning on user_id** within each day’s range to spread hot keys (high‑traffic users) across shards.  
3. Leveraged PostgreSQL’s native `PARTITION BY RANGE` and `HASH` clauses, then wrote a simple Python script to automate the creation of partitions for the next 90 days.  
4. Updated our query planner hints to use `SET enable_seqscan = off;` only when necessary, letting the engine pick index scans on the partitioned keys.  
5. Added materialized views per shard to pre‑aggregate daily totals, refreshed nightly via a lightweight cron job.

**Result:**  
The nightly aggregation time dropped from 2 hours to under 25 minutes—an 8× speedup—and CPU usage fell by ~40 %. The new partitioning scheme also cut storage costs by 20 % because we could archive and drop old partitions automatically. I learned that combining range and hash partitioning, aligned with real access patterns, can deliver dramatic performance gains without rewriting application logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
