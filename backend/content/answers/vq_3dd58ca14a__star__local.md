---
qid: vq_3dd58ca14a__star__local
question: What is a Fact Table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 323
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:55:57-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the reporting layer for our quarterly sales dashboard. The legacy system stored every transaction in a flat CSV, and analysts complained that aggregations were slow and inconsistent across departments.

**Task** – My goal was to build a scalable fact table that could serve all BI tools, support fast roll‑ups, and enforce data quality. I needed to decide on grain, measure selection, and dimension links while keeping ETL latency under 30 minutes.

**Action** – I first defined the granularity as one row per sale line item (transaction_id + product_id). For measures I included `quantity_sold`, `sale_amount`, and a calculated `discount_rate`. I used Snowflake’s clustering keys on `date_key` and `product_category_key` to speed up time‑based queries. During the ETL, I applied incremental loads with change data capture from our transactional database, validating each batch against referential integrity rules before inserting into the fact table. To keep cardinality manageable, I pre‑aggregated daily totals in a separate summary fact for quick dashboard pulls.

**Result** – After deployment, report query times dropped from 4 minutes to under 15 seconds on average—a 97% reduction. The new fact table also eliminated duplicate sales entries, raising data accuracy to 99.9%. I learned that carefully choosing grain and clustering keys can dramatically improve performance without sacrificing flexibility for future analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
