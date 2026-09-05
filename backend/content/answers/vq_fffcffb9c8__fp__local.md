---
qid: vq_fffcffb9c8__fp__local
question: Where can one find the high water mark for a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 555
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:05:24-05:00'
sources: []
---

**High‑water mark (HWM) of a database table** is the maximum extent (row or page count, space usage, etc.) that the table has ever reached during its lifetime. It tells us how much physical storage we must reserve to avoid future growth spikes.

---

### Why it matters  
When a table grows, the DBMS allocates new extents. If the allocation policy is “grow on demand,” the HWM represents the peak of that demand curve. Knowing it allows:

1. **Capacity planning** – set a static size or an autogrow limit that covers all historical peaks.
2. **Performance tuning** – large tables with frequent growth can suffer fragmentation; pre‑allocating to the HWM reduces this.

---

### Where to find it  

| DBMS | Source of HWM |
|------|---------------|
| **SQL Server** | `sys.dm_db_partition_stats` → `max_rows` (for rows) or `reserved_page_count` (for pages).  The maximum across all partitions equals the HWM. |
| **Oracle** | `DBA_SEGMENTS.SEGMENT_NAME` + `DBA_HIST_SEG_STAT` → `SEGMENT_BYTES_MAX`.  Also `V$RECYCLABLE_OBJ` for temporary tables. |
| **PostgreSQL** | `pg_class.reltuples` (estimated rows) and `pg_stat_user_tables.n_live_tup` plus `pg_size_pretty(pg_total_relation_size(oid))`.  The historic peak is stored in the WAL if you keep a log or can be inferred from `pg_stat_all_tables`. |
| **MySQL / MariaDB** | `information_schema.tables.DATA_LENGTH + INDEX_LENGTH` gives current size; MySQL’s `performance_schema.table_io_waits_summary_by_table` can track peak I/O, but no built‑in HWM. You need a custom audit table or binlog replay to compute it. |

---

### Non‑obvious insight  
The HWM is *not* the same as the current size; it reflects **historical maxima**. A table that has shrunk dramatically after a purge still carries its old HWM until you explicitly recompute it (e.g., by `DBCC SHRINKDATABASE` in SQL Server or `ALTER TABLE ... MOVE`). Thus, capacity decisions based on “current size” can be dangerously optimistic.

In short, query the system catalog that tracks per‑partition/page counts and take the maximum across partitions. That gives you a principled upper bound for future growth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
