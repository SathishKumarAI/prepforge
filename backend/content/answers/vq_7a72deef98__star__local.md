---
qid: vq_7a72deef98__star__local
question: How to find count of duplicate rows?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 359
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:06:01-05:00'
sources: []
---

**Situation** – In a recent migration project for our retail analytics platform, the data lake had accumulated over 2 million transaction records from multiple legacy systems. During quality checks, we noticed that sales totals in downstream dashboards were consistently higher than expected, hinting at duplicated rows.

**Task** – I needed to identify and quantify all duplicate transaction records so we could cleanse the dataset before feeding it into the BI layer, ensuring accurate revenue reporting for the fiscal year forecast.

**Action** – I wrote a PySpark job that read the raw Parquet files into a DataFrame. Using `groupBy` on the composite key (`customer_id`, `order_date`, `product_sku`) and `agg(count("*").alias("cnt"))`, I filtered rows where `cnt > 1`. The result was written to a separate table for audit. To validate, I cross‑checked the count against a SQL query in Hive: `SELECT COUNT(*) FROM raw_transactions WHERE (customer_id, order_date, product_sku) IN (SELECT customer_id, order_date, product_sku FROM duplicates);` Both engines returned identical counts, confirming consistency.

**Result** – The job flagged 18,432 duplicate rows out of 2.1 million (0.88% duplication). After removing them, the revenue metric aligned with external financial statements within a 0.02% margin. I also automated this check as a nightly Spark job, reducing future data drift to near zero and saving analysts an estimated 3 hours per week on manual validation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
