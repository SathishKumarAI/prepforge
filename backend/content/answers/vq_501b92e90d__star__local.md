---
qid: vq_501b92e90d__star__local
question: HOW DO YOU CHECK FOR DUPLICATE RECORDS IN A TABLE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 360
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:58:52-05:00'
sources: []
---

**Situation** – In my last role as a data engineer at FinTech Solutions, the billing system’s `invoice_payments` table had grown to over 12 million rows. Quarterly audits revealed that 0.7% of records were duplicated, causing reconciliation errors for our monthly financial reports.

**Task** – I was tasked with designing an efficient process to detect and flag duplicate payment records before they reached the analytics layer, without impacting query performance or requiring a full table scan each day.

**Action** – First, I added a composite unique index on `(customer_id, invoice_id, amount, payment_date)` to enforce uniqueness at write time. For existing data, I wrote a scheduled ETL job in Python using `pandas` that streamed batches of 500k rows from the database via SQLAlchemy. Inside each batch, I used `groupby()` on the same composite key and counted groups where count > 1. Duplicates were written to a separate `payment_duplicates` table with metadata (row_id, source_file, timestamp). I also set up a nightly cron that ran an incremental check using a materialized view of new inserts.

**Result** – The duplicate detection run time dropped from ~12 minutes to under 2 minutes, and the unique index prevented any future duplicates. Over the next quarter, reconciliation errors fell by 98%, saving the finance team an estimated $15k in audit costs. I learned that combining database constraints with lightweight ETL checks can provide both preventive and corrective safeguards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
