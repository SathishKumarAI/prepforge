---
qid: vq_5e0b79cc40__star__local
question: How can we add a column to dataframe?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 314
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:00:46-05:00'
sources: []
---

**Situation:** While leading a monthly sales report pipeline for an e‑commerce client, the raw CSVs we ingested lacked a “discount_rate” column that analysts needed to compute net revenue. The downstream dashboards were stalling because the metric was missing.

**Task:** I had to enrich each daily batch with a calculated discount rate derived from two existing columns—`original_price` and `final_price`—and ensure the new column propagated through our Spark‑based ETL without breaking downstream consumers.

**Action:** First, I added a UDF in PySpark to compute `(1 - final_price/original_price)` and cast it as a double. Using `withColumn`, I appended this value to the DataFrame, naming it `discount_rate`. To avoid schema drift, I updated the Avro schema registry entry and validated the change with a unit test that checked null handling for edge cases. Finally, I scheduled the job on Airflow, adding an alert if the new column’s percentage of nulls exceeded 5%.

**Result:** The enriched dataset now includes a precise discount metric; analysts report a 12% reduction in manual calculations and faster dashboard refreshes. The pipeline maintained 99.9% data quality, and I documented the change for future schema evolution, reinforcing our governance practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
