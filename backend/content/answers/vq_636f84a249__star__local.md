---
qid: vq_636f84a249__star__local
question: what is the procedure of updating the rows that have been directly uploaded?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 332
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:01:37-05:00'
sources: []
---

**Situation** – In a recent project for a retail analytics platform we were ingesting daily sales snapshots from the POS system into our Snowflake warehouse. The uploads came as flat CSVs via S3, and because of an overnight change in the source schema some rows had stale values for the `promotion_id` column.

**Task** – I was asked to clean up those uploaded rows without re‑ingesting the entire dataset, ensuring that downstream dashboards reflected the correct promotion mapping while keeping data latency under 4 hours.

**Action** – First, I created a temporary staging table (`sales_staging`) with the same schema as the target `sales_fact`. Using Snowflake’s MERGE statement, I joined on the composite key `(store_id, sale_date, item_sku)` and updated only the rows where `promotion_id` was null or mismatched. To avoid locking the main table during peak hours, I ran the merge in a scheduled task at 02:00 AM with a row‑level lock hint (`NOWAIT`). After the update, I ran a data quality check script that compared counts before and after to verify no unintended changes.

**Result** – The operation fixed 12,340 rows in under 30 minutes, reducing the promotion‑related dashboard error rate from 7% to <0.1%. I also documented the merge logic for future schema shifts, which cut onboarding time for new data sources by ~40 hours.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
