---
qid: vq_fffcffb9c8__eli5__local
question: Where can one find the high water mark for a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 249
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:35:06-05:00'
sources: []
---

Think of a database table as a long bookshelf that keeps getting new books (rows) added from the right side. The **high‑water mark** is like the bookmark that shows how far the shelf has stretched so far—i.e., the highest block number that has ever been written to, even if later rows are deleted or moved.

In most relational databases this bookmark lives in the table’s metadata:  
* In Oracle it’s stored in the **X$TABLE** view (the column `MAXVADDR`).  
* In PostgreSQL you can query `pg_class.relpages` and `reltoastrelid` for the current size, but the high‑water mark is maintained internally and isn’t exposed directly.  
* SQL Server keeps it in the system catalog tables (`sys.tables`, `sys.indexes`) under columns like `max_extent`.

So, look at the database’s system catalog or information schema for that table; the high‑water mark tells you the furthest point the table has ever reached, useful for estimating disk usage and planning maintenance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
