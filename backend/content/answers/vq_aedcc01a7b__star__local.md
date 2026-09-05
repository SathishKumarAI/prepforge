---
qid: vq_aedcc01a7b__star__local
question: Can Objects of the same Schema reside in different tablespaces?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 328
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:14:51-05:00'
sources: []
---

**Situation:** In a multi‑tenant data warehouse I was tasked with rebalancing storage for a high‑traffic reporting database that had grown to 250 GB across three tablespaces on an Oracle 19c instance.

**Task:** The goal was to keep all objects belonging to the *sales* schema in a dedicated tablespace while still allowing the same schema’s temporary and undo segments to live elsewhere, thereby optimizing I/O and meeting compliance storage quotas.

**Action:** I created a new tablespace “SALES_DATA” with SSD‑based file groups, then used `ALTER TABLE ... MOVE` for each user table and view in the *sales* schema. For indexes, I ran `ALTER INDEX … REBUILD ONLINE` into the same tablespace to avoid downtime. The temporary tablespaces remained unchanged; I simply pointed the *sales* schema’s session parameters (`TEMP_TABLESPACE`) to the existing temp pool. Finally, I updated all stored procedures that referenced fully‑qualified table names, ensuring no hard‑coded tablespace references.

**Result:** Post‑migration, the *sales* schema’s active data volume dropped from 200 GB to 120 GB in a single tablespace, cutting read latency by ~18% during peak reporting hours. I learned how Oracle’s `ALTER TABLE MOVE` and index rebuild can isolate schema objects across tablespaces without affecting session‑level temp usage, a pattern I now reuse for quarterly storage optimization projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
