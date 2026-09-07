---
qid: ing_30b445790e__faang__local
question: 'Explain: Read-Only Load — How to Benchmark PostgreSQL Performance Using
  Sysbench | Severalnines'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 508
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:37:37-05:00'
sources: []
---

**Clarify**

You want to *benchmark read‑only performance* of a PostgreSQL cluster (e.g., for OLAP or reporting) using **Sysbench**.  
Assumptions:  
1. A single‑node PostgreSQL instance or a cluster with a master that accepts only reads.  
2. The workload is CPU‑bound (SELECTs, aggregations).  
3. Sysbench can generate the query mix via its `oltp_read_only` test.

**Approach**

1. **Prepare data** – create a sizeable table (`CREATE TABLE t …; INSERT …`) and index it.  
2. **Configure PostgreSQL** – set `shared_buffers`, `work_mem`, `effective_cache_size` for read‑only, ensure `autovacuum` is off.  
3. **Run Sysbench** – use the built‑in OLTP read‑only test:  
   ```bash
   sysbench --test=oltp_read_only --num-threads=8 \
            --max-time=60 --db-driver=pgsql \
            --pgsql-host=localhost --pgsql-port=5432 \
            --pgsql-user=pguser --pgsql-db=testdb run
   ```
4. **Collect metrics** – Sysbench reports TPS, latency; capture PostgreSQL `pg_stat_database` and `pg_statio_user_tables`.  
5. **Repeat** with varying thread counts to find the sweet spot.

**Depth**

- Sysbench issues simple SELECTs (`SELECT * FROM t WHERE id = ?`).  
- PostgreSQL’s query planner will use indexes; if not, add them.  
- Measure CPU, I/O, and cache hit ratios. Complexity: O(1) per request; overall throughput linear until saturation.

**Edge Cases**

- Hot‑spot contention if many threads target same rows.  
- Misconfigured `max_connections` can cause connection pool exhaustion.  
- Disk I/O limits may mask true CPU performance.

**Optimize & Communicate**

- Tune `work_mem` for the query’s sort/aggregate needs; larger values reduce disk spills.  
- Use `pg_stat_statements` to spot slow queries and rewrite them.  
- Present results as a graph of TPS vs threads, annotate the point where latency starts rising sharply.  

By following this structured benchmark, you’ll reliably quantify PostgreSQL read‑only performance and pinpoint configuration bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
