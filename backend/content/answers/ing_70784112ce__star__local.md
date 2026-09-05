---
qid: ing_70784112ce__star__local
question: 'Explain: Database Performance Cheatsheet — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 378
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:12:10-05:00'
sources: []
---

**Situation** – At my last role I was tasked with scaling a user‑activity log system that grew from 5 M rows/day to 300 M rows/day, causing query latency to jump from 200 ms to over 2 s during peak traffic.

**Task** – Reduce the average read time for the most common aggregation queries (daily active users, top actions) to below 500 ms while keeping write throughput above 10k ops/s and staying within our on‑prem budget.

**Action** – I built a cheatsheet that became our internal reference:  
1. **Indexing** – Added composite B‑tree indexes on `(user_id, event_time)` and partial indexes for high‑frequency events.  
2. **Partitioning** – Sharded tables by month using range partitioning to keep hot partitions small.  
3. **Query rewrites** – Replaced correlated subqueries with window functions; used `EXPLAIN` to spot scans.  
4. **Caching** – Implemented Redis TTL caches for the top‑10k users’ activity counts.  
5. **Vacuum & Maintenance** – Scheduled nightly `VACUUM ANALYZE` and increased autovacuum thresholds to avoid bloat.  
6. **Monitoring** – Added Prometheus alerts on `pg_stat_activity` and query latency.

**Result** – Read latency dropped from 2 s to 350 ms for the key reports, write throughput stayed at 12k ops/s, and we avoided a $200K upgrade by optimizing existing hardware. I learned that a structured cheatsheet not only speeds up troubleshooting but also aligns the team on best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
