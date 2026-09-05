---
qid: vq_512d334e6f__star__local
question: what is Bucketed tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 314
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:58:59-05:00'
sources: []
---

**Situation** – While migrating the customer analytics pipeline from a legacy system to Snowflake, our nightly ETL was hitting a 4‑hour window because joins on the fact table were spilling to disk and throttling I/O.

**Task** – I needed to redesign the data model so that the most frequent join keys (customer_id and product_id) were partitioned in a way that reduced shuffling and kept the load time under two hours.

**Action** – I introduced bucketed tables: created a new fact table with `CLUSTER BY` on `(customer_id, product_id)` and used Snowflake’s `CREATE TABLE … CLUSTERING_KEY`. Then I rewrote the nightly job to write incoming events directly into these buckets using `INSERT OVERWRITE`. I also added a small pre‑aggregation layer to keep row counts per bucket under 10 M rows, which kept the metadata manageable. Finally, I monitored the query profile and tuned the bucket size from 200 M to 150 M rows based on observed contention.

**Result** – The ETL time dropped from 4 hours to 1.5 hours (a 62% speed‑up). Query latency for customer‑level reports improved by ~70%, and I learned that careful bucketing combined with pre‑aggregation can dramatically cut shuffle costs in a cloud warehouse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
