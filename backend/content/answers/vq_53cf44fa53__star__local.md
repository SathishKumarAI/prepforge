---
qid: vq_53cf44fa53__star__local
question: How can you create a DataFrame a) using existing RDD, and b) from a CSV
  file?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 424
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:59:20-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we had an old batch job that produced millions of raw transaction records as an RDD in Spark 2.x. The data scientists wanted them in a DataFrame for easier schema enforcement and to use MLlib’s VectorAssembler, but the team was still using Python and had no existing DataFrame pipeline.

**Task** – I needed to convert the legacy RDD into a typed DataFrame with proper column names and data types, then build an automated ingestion step that could read new daily CSVs from S3 and produce the same schema without manual intervention.

**Action** – First, I defined a case class in Scala (`Transaction(id: String, amount: Double, ts: Timestamp)`) and used `rdd.map(row => Transaction(...)).toDF()` to cast the RDD into a DataFrame. I then exposed this as a temporary view for SQL queries. For CSV ingestion, I leveraged Spark’s built‑in reader:  
```python
df = spark.read.option("header","true")\
               .option("inferSchema","true")\
               .csv("s3://bucket/transactions/*.csv")
```
After reading, I applied `withColumnRenamed` and a schema cast to match the legacy DataFrame. Finally, I registered both as persistent tables in Hive for downstream jobs.

**Result** – The new pipeline cut data preparation time from 12 minutes per batch to under 2 minutes, freeing up 3 engineer hours weekly. It also reduced runtime errors by 40% because schema mismatches were caught at ingestion. I learned that exposing a consistent DataFrame API early on streamlines collaboration between data engineers and scientists.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
