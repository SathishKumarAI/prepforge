---
qid: vq_d5e7a7eacd__star__local
question: What is a DML statements ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 336
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:21:42-05:00'
sources: []
---

**Situation** – At my previous role I was tasked with building a nightly data sync for the sales analytics platform. The source database had over 2 million rows and we were pulling incremental changes every hour to keep the reporting cube fresh.

**Task** – My job was to design an efficient ETL that could capture inserts, updates, and deletes without reprocessing the entire table each run, while keeping latency under five minutes.

**Action** – I leveraged DML statements (INSERT, UPDATE, DELETE) inside a stored procedure that used row‑level change tracking. First, I queried `sys.dm_tran_version_store` to pull only rows with a transaction ID newer than the last sync timestamp. Then I built bulk‑loaded `MERGE` operations: new records were inserted, changed rows updated, and rows flagged for deletion were removed from the target table. I wrapped everything in a single transaction and used batching (10k rows per batch) to avoid locks and memory spikes.

**Result** – The sync now processes 2 million rows in under three minutes, a 60% reduction in runtime compared to the previous approach. It also cut database load by 40%, freeing resources for ad‑hoc queries. I learned how to combine DML with change tracking to create fast, reliable incremental pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
