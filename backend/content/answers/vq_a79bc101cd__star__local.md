---
qid: vq_a79bc101cd__star__local
question: To find duplicate record in table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 330
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:13:24-05:00'
sources: []
---

**Situation:** In a recent ETL project for our retail analytics platform, the nightly load of customer purchase data from the legacy system was consistently exceeding our storage quota by 12%. Initial inspection suggested that duplicate rows were inflating the volume.

**Task:** I needed to identify and eliminate duplicates in the `customer_transactions` table while preserving data integrity, all within a tight 48‑hour window before the next release cycle.

**Action:** First, I wrote a quick SQL script using `ROW_NUMBER()` over partitioned windows (`partition by transaction_id, customer_id`) to flag duplicate candidates. To validate the logic, I exported the flagged rows into a temporary staging table and ran an exploratory Python notebook with Pandas, checking for subtle differences in timestamps or currency fields that might warrant retention. Once confirmed, I crafted a `DELETE` statement that removed duplicates based on the lowest row number per group. Finally, I updated our dbt model to include a materialized view that logs each deletion event, ensuring auditability.

**Result:** The cleanup reduced table size by 9.8%, freeing up 1.2 TB of storage and cutting query latency on downstream dashboards from 4.5 s to 2.3 s. I also documented the deduplication logic in our data catalog, which has become a reusable pattern for future ingestion pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
