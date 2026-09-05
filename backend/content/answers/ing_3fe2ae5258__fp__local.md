---
qid: ing_3fe2ae5258__fp__local
question: 'Explain: Bulk imports with COPY [..] FROM STDIN — GitHub - lib/pq: Go PostgreSQL
  driver for database/sql \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 456
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:20:22-05:00'
sources: []
---

### Why `COPY … FROM STDIN` is the “fast‑path” for bulk import

At its core, a database must transform *rows* into an internal representation and then write them to disk.  
A normal `INSERT` does this **row‑by‑row**: SQL parsing → plan → executor → tuple conversion → WAL record → heap page update.  
The overhead of the planner and the per‑tuple logging dominates when millions of rows arrive.

PostgreSQL’s `COPY` bypasses most of that machinery:

| Step | Normal INSERT | COPY FROM STDIN |
|------|---------------|----------------|
| SQL parsing | parsed once, plan reused | none (driver speaks protocol directly) |
| Tuple conversion | per‑row `ExecInsert` | bulk buffer → single `CopyIn` command |
| WAL logging | one record per row | one record per batch or even zero (if `COPY ... FREEZE`) |

Thus the “deep principle” is **batching + minimal protocol**: you send a stream of text/bytea rows, PostgreSQL parses them once, converts to heap tuples in memory, and flushes to disk in large blocks. The driver (`lib/pq`) implements this via `CopyIn`/`CopyOut` methods that open a COPY session and then stream data over the TCP connection.

#### One non‑obvious insight  
Many people think COPY is “just a faster INSERT”, but it actually **avoids WAL logging for each row**. In read‑only or archival scenarios you can set `COPY ... FREEZE`, which writes no WAL at all, making the operation *unlogged*. This turns bulk import into an O(1) cost per page rather than O(N), enabling terabyte loads in minutes.

In short, `COPY … FROM STDIN` works because it trades the safety of per‑row logging for speed: a single protocol command + large buffer → minimal parsing + bulk heap writes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
