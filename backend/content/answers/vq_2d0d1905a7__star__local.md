---
qid: vq_2d0d1905a7__star__local
question: What are the nine different types of Indexes?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 353
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:53:28-05:00'
sources: []
---

**Situation:** In my last role as a data engineer at a fintech startup, our fraud‑detection pipeline was ingesting over 10 million rows per day into Snowflake. The query performance on the “transactions” table had dropped from sub‑second to several seconds after we added new columns for machine‑learning features.

**Task:** I needed to redesign the indexing strategy so that key analytical queries—joins on customer ID, range scans on transaction timestamps, and distinct counts on merchant categories—would run in under 500 ms while keeping storage costs reasonable.

**Action:** I mapped out Snowflake’s nine index types: **Cluster Keys**, **Primary Key Constraints**, **Unique Constraints**, **Foreign Key Constraints**, **Materialized Views (as logical indexes)**, **Secondary Indexes via external tables**, **Bitmap Indexes on low‑cardinality columns**, **Full‑Text Search Indexes**, and **Hash Indexes** for hash‑based joins. I created a composite cluster key on `(customer_id, transaction_date)` to co‑locate related rows, added a unique constraint on `transaction_id`, and built bitmap indexes on `merchant_category`. For the heavy range scans, I materialized a view that pre‑aggregated daily totals.

**Result:** Query latency dropped from 3 s to 0.4 s for the most common fraud checks—an 80% improvement—and storage increased by only 12%. The exercise taught me how each Snowflake index type serves different access patterns and how combining them can dramatically boost performance while keeping costs in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
