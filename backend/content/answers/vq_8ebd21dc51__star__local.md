---
qid: vq_8ebd21dc51__star__local
question: How to join two tables using dataframes?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 369
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:09:25-05:00'
sources: []
---

**Situation** – In a recent e‑commerce analytics project I was tasked with merging the daily clickstream logs (≈ 50 M rows) with the customer profile table (≈ 2 M rows) to compute per‑customer engagement scores for a marketing campaign.

**Task** – My goal was to join the two datasets on `customer_id` in PySpark, keep only the last 30 days of activity, and ensure the job ran under the 15‑minute SLA on our shared cluster.

**Action** – I first broadcasted the smaller profile table using `spark.conf.set("spark.sql.autoBroadcastJoinThreshold", "10MB")` to avoid shuffle. Then I used a semi‑join to filter clickstream rows:  
```python
clicks = clicks.filter(col("event_date") >= current_date()-30)
joined = clicks.join(broadcast(profiles), on="customer_id", how="inner")
```
I applied `coalesce(8)` before writing the result to Parquet, and enabled predicate push‑down by setting `spark.sql.parquet.enableVectorizedReader=true`. I also added a small unit test using `pyspark.testing.assertDataFrameEqual` to catch schema drift.

**Result** – The job completed in 12 minutes, producing 4.8 M rows of enriched data. The marketing team used the output to target high‑value users with a personalized email campaign that increased click‑through rate by **18%** over the baseline. I learned how broadcast joins and predicate push‑down can dramatically cut runtime for large‑scale analytics jobs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
