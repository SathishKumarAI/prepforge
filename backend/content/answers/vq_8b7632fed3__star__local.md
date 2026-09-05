---
qid: vq_8b7632fed3__star__local
question: Can one load data into multiple tables at once?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 392
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:08:34-05:00'
sources: []
---

**Situation:**  
At my previous company we were migrating a legacy customer database into Snowflake. The raw CSV dump contained millions of rows that needed to be split across three normalized tables: `customers`, `orders`, and `order_items`. Our ETL pipeline was running on an hourly schedule, but the ingestion window before our nightly batch jobs was only 15 minutes.

**Task:**  
I had to design a process that could ingest the flat file into all three target tables within that tight window without compromising data integrity or causing lock contention in Snowflake.

**Action:**  
I leveraged Snowpipe combined with a single COPY statement that used a staged JSON representation of each row. The JSON was pre‑transformed by an AWS Lambda function to include a `target_table` field based on the presence of keys (`order_id`, `item_id`). In Snowflake, I created three file format objects and one external stage pointing to S3. Then, using a single Snowpipe definition with a COPY INTO statement that had `FILE_FORMAT = (TYPE = 'JSON')` and a `WHERE target_table IN ('customers','orders','order_items')`, the data was streamed into all three tables in parallel. I added staged materialized views for each table to enforce uniqueness constraints and used Snowflake’s multi‑table ingestion feature to avoid duplicate writes.

**Result:**  
The pipeline completed 99.8% of the records within the 15‑minute window, a 40% reduction in total load time compared to our previous sequential approach. The accuracy rate hit 100%, with no data loss or duplication. I learned how Snowpipe’s parallel ingestion and staged JSON transformation can efficiently populate multiple tables simultaneously while maintaining ACID properties.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
