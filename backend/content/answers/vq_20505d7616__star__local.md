---
qid: vq_20505d7616__star__local
question: Can one resize tablespaces and data files?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 380
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:50:55-05:00'
sources: []
---

**Situation:**  
At my previous company we had a PostgreSQL warehouse that grew from 150 GB to over 400 GB in six months due to new BI reports. The daily vacuum‑analyze cycle started taking 2 hours, and our nightly backup window was shrinking.

**Task:**  
I needed to resize the tablespace and its data files without disrupting users or exceeding the 24‑hour maintenance window, while keeping the file system fragmentation minimal.

**Action:**  
First I created a new tablespace on a larger SSD pool using `CREATE TABLESPACE`. Then I wrote a migration script that used `pg_dump` with `--column-inserts` for hot tables and `COPY TO/FROM` for bulk data. For each table, I ran `ALTER TABLE ... SET SCHEMA <new_tablespace>` to move it atomically. To shrink the original file system, I performed an offline `VACUUM FULL` on a copy of the database in a temporary cluster, then used `pg_basebackup` to stream the compacted data back. Finally, I updated the application’s connection strings and scheduled a 10‑minute downtime window for the final cutover.

**Result:**  
The tablespace grew from 150 GB to 450 GB with zero data loss, and the vacuum cycle dropped from 2 hours to 30 minutes. Backups now finish in 45 minutes instead of 90, freeing an extra hour each night. I learned that combining logical migration for hot tables with a physical rebuild for cold tables can be done safely within tight windows if you plan the sequence and use PostgreSQL’s native tools.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
