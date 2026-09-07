---
qid: ing_70784112ce__faang__local
question: 'Explain: Database Performance Cheatsheet — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 553
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:04:58-05:00'
sources: []
---

**Clarify**  
The interview asks for a concise “cheatsheet” that covers the key levers to tune database performance. I’ll assume we’re talking about relational engines (e.g., PostgreSQL/MySQL) and touch on indexing, query design, caching, and hardware/architecture basics.

**Approach**  
1. Identify bottlenecks: CPU, I/O, memory, contention.  
2. Map each bottleneck to a concrete tuning knob.  
3. Prioritize actions that give the highest payoff per effort.

**Depth (Cheat‑Sheet)**  

| Category | Levers | Why it matters | Typical config |
|----------|--------|----------------|----------------|
| **Indexes** | B‑tree, GiST, partial, composite, covering | Reduce scan cost; avoid table scans | `CREATE INDEX ON tbl(col1, col2);` |
| **Query Design** | Predicate pushdown, proper JOIN order, LIMIT/OFFSET avoidance | Keeps data movement minimal | Rewrite `SELECT … WHERE a = b AND c > 5` instead of filtering after join |
| **Execution Plan** | EXPLAIN ANALYZE; use `ANALYZE` to refresh stats | Accurate cost estimates → right index usage | Run nightly `VACUUM ANALYZE` |
| **Buffer & Cache** | Shared buffers, query cache, connection pool | Keeps hot data in RAM | PostgreSQL: `shared_buffers = 25% RAM`; MySQL: innodb_buffer_pool_size |
| **Hardware** | SSD vs HDD; CPU cores; network latency | I/O bound workloads benefit from NVMe + low‑latency NICs | Use NVMe, ≥4 cores for heavy OLTP |
| **Concurrency** | Isolation level, lock granularity, MVCC tuning | Prevent contention & deadlocks | `READ COMMITTED` + row‑level locks |
| **Maintenance** | Vacuuming, reindexing, partitioning | Avoid bloat; keep statistics fresh | Partition large tables by date |

**Edge Cases**  
- Skewed data → consider hash indexes or columnar stores.  
- Very long queries → use materialized views.  
- Distributed DBs → pay attention to sharding strategy and cross‑node joins.

**Optimize & Communicate**  
I’d iterate: run baseline, apply highest‑impact tweak (often indexing), re‑measure, then move to the next lever. I’d explain each step in plain terms, show before/after query plans, and quantify speedups—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
