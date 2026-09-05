---
qid: vq_c9568f3ae3__star__local
question: How can we import data from particular row or column?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 349
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:19:29-05:00'
sources: []
---

**Situation** – At my last role I was tasked with adding a new analytics dashboard for the marketing team. The data source was a huge CSV exported from our CRM – 12 million rows, but the dashboard only needed three columns: `customer_id`, `signup_date`, and `last_purchase_amount`. Importing the entire file into Snowflake cost us ~$1,500/month in storage and slowed downstream jobs by 30 %.

**Task** – I had to pull only those specific columns and a subset of rows (customers who signed up in 2023) into our data lake, while keeping the load time under two minutes and ensuring the pipeline was repeatable.

**Action** – I wrote a Python script using `pandas` with `read_csv(..., usecols=...)` to limit columns and `chunksize=500k` to stream rows. Inside each chunk I applied a filter on `signup_date`, then immediately appended the filtered DataFrame to an S3 Parquet file using `pyarrow`. Finally, I scheduled the script in Airflow with a DAG that re-runs nightly and updates a Snowflake external table pointing to the S3 bucket.

**Result** – The load time dropped from 45 minutes to under two minutes. Storage costs fell by 70 %, saving us $1,050 annually. The marketing team got real‑time insights, and I learned how to combine selective column loading with chunked processing for massive files.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
