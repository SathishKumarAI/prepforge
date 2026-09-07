---
qid: vq_fffcffb9c8__faang__local
question: Where can one find the high water mark for a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 517
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:44:23-05:00'
sources: []
---

**Clarify**  
The question asks where an engine stores *high‑water marks* for a table – the maximum value of a column (often a primary key) that has been committed so far. I’ll assume we’re dealing with a transactional RDBMS that uses page‑level or table‑level metadata, and we want to retrieve it via SQL or system catalog.

**Approach**  
1. Identify the column in question (e.g., `id`).  
2. Check if the DB exposes a *high‑water* view (`pg_class.relpages` for PostgreSQL, `sys.tables`, etc.).  
3. If not exposed directly, compute it via an index scan or `MAX()` on the table.

**Depth**  
- **PostgreSQL**: The high water mark is stored in the relation’s metadata (`relfilenode`). It isn’t a column but can be queried with `SELECT relpages FROM pg_class WHERE relname='mytable';` for page count, or use `pg_stat_user_tables`.  
- **Oracle**: Uses *high-water marks* per segment; accessible via `DBA_SEGMENTS.HWM` or `V$SEGMENT_STATISTICS`.  
- **SQL Server**: No explicit high‑water column; you can get the max value with `SELECT MAX(id) FROM mytable;` or use `sys.dm_db_partition_stats` for allocation stats.  
- **MySQL/InnoDB**: The autoincrement counter is stored in `information_schema.tables.AUTO_INCREMENT`.  

**Edge Cases**  
- Vacuum/defragmentation may reset page counts but not the logical max ID.  
- Sharded tables or distributed engines (e.g., BigQuery) store HWM per shard; you need to aggregate.  
- Read‑only replicas may have stale HWMs.

**Optimize & Communicate**  
Explain that for performance, use system catalog queries instead of full scans. If the DB supports it, rely on built‑in metadata (`AUTO_INCREMENT` or `SEGMENT_STATISTICS`). Clarify any assumptions about the RDBMS and highlight that if no native support exists, a simple `MAX()` with an index is the fallback. This shows structured thinking, depth in database internals, and practical trade‑offs—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
