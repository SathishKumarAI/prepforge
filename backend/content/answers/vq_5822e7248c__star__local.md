---
qid: vq_5822e7248c__star__local
question: How can I prevent tablespace fragmentation?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 427
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:59:57-05:00'
sources: []
---

**Situation:**  
At my previous role with a legacy Oracle database that handled 2 TB of transaction data, we noticed the `USERS` tablespace had become highly fragmented after years of continuous inserts and deletes. The fragmentation caused performance degradation: query latency increased from 120 ms to over 650 ms for key OLTP reports.

**Task:**  
I was tasked with reducing fragmentation in the `USERS` tablespace, restoring read/write throughput, and ensuring the solution didn’t disrupt daily operations or exceed our maintenance window budget of 4 hours.

**Action:**  
1. Performed a quick space audit using `DBMS_SPACE.UNUSED_TABLESPACE_USAGE_REPORT`, confirming ~30% free but fragmented blocks.  
2. Created a temporary tablespace with the same size and compression enabled (`COMPRESS FOR OLTP`).  
3. Ran `ALTER TABLE ... MOVE` for each large table, directing data into the new tablespace to rebuild extents sequentially.  
4. Updated all dependent indexes concurrently using `REBUILD PARTITION ONLINE`.  
5. Executed a `DBMS_REDEFINITION.START_REDEF` script to swap old and new tablespaces with minimal downtime (<15 min).  
6. Post‑migration, ran `ALTER TABLE ... SHRINK SPACE` on the old tablespace to reclaim unused blocks and set `AUTOEXTEND OFF`.

**Result:**  
Fragmentation dropped from ~45% to <5%, cutting query latency by 70% (down to 140 ms). The whole operation took 3.2 hours, well within our window. I learned that proactive space management—using temporary tablespaces and online redefinition—is far more efficient than ad‑hoc defragmentation tools, especially for high‑volume OLTP workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
