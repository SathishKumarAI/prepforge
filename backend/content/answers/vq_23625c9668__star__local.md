---
qid: vq_23625c9668__star__local
question: Explain about a Clustered Index.?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 295
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:51:32-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we had a nightly batch that ingested millions of transaction records into our data warehouse. The query engine would spend 45 % of the runtime scanning the table because the primary key was a surrogate integer and the natural sort order of the business key (customer_id + txn_date) was not aligned.

**Task** – I needed to reduce the read latency for “last‑n‑days” reports by at least 30 % without adding extra storage or compromising write performance.

**Action** – I redesigned the table to use a clustered index on `(customer_id, txn_date DESC)` instead of the surrogate key. Using SQL Server’s `CREATE CLUSTERED INDEX` syntax, I dropped the old index and rebuilt the table in a single transaction. I also added a filtered non‑clustered index on `status = 'completed'` to accelerate status checks. While rebuilding, I scheduled it during the low‑traffic window and monitored tempdb usage to avoid spilling.

**Result** – The report run time dropped from 2 minutes to 1.3 minutes—a 35 % improvement—and CPU utilization fell by ~20 %. I learned that choosing a clustered index that mirrors the most frequent access pattern can dramatically cut I/O, but it requires careful rebuild planning to avoid lock‑related downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
