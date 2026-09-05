---
qid: vq_7a04d206a4__star__local
question: How to select unique records from a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 293
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:05:52-05:00'
sources: []
---

**Situation:**  
In a recent migration project for our e‑commerce analytics platform, the legacy order history table had duplicate rows because of an intermittent ETL bug. The downstream BI dashboards were reporting inflated sales figures—up to 12% higher than expected.

**Task:**  
I was tasked with cleaning the dataset so that each order ID appeared only once, while preserving all other fields and ensuring the process could run nightly without manual intervention.

**Action:**  
Using Snowflake, I wrote a staged table with `ROW_NUMBER()` over `(PARTITION BY order_id ORDER BY load_timestamp DESC)` to rank duplicates by recency. Then I inserted the first row of each partition into a new fact table using a `MERGE` statement. To keep auditability, I logged the discarded rows in an “audit_dedupe” table with their original timestamps and source flags. Finally, I automated this logic as a scheduled Snowflake task that runs every midnight, adding a simple unit test to verify no duplicate order_ids exist after each run.

**Result:**  
The deduplication reduced reported sales by 9%—aligning dashboards with actual figures—and cut query latency on the fact table by 35%. I learned the importance of combining window functions with transactional merges for idempotent ETL, and that an audit trail is essential when purging data in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
