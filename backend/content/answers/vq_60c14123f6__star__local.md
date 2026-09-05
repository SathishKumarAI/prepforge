---
qid: vq_60c14123f6__star__local
question: How to read file from hdfs or other sources in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 415
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:01:09-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a nightly ingestion pipeline for the marketing team. The raw data landed daily on HDFS as compressed Parquet and some legacy CSV files from an S3 bucket. Our SLA required that all files be processed within 30 minutes, or we’d miss the next day’s campaign.

**Task** – I needed to design a robust Spark job that could read both HDFS and external S3 sources, handle schema evolution, and log any corrupt partitions without breaking the entire run.

**Action** – I started by creating a reusable `DataSource` trait with a method `load(path: String): DataFrame`. Inside, I used `SparkSession.read.format("parquet")` for HDFS paths, adding `.option("mergeSchema", "true")` to merge evolving schemas. For S3, I switched to `format("csv")`, set `.option("header","true")` and `.mode("DROPMALFORMED")`. To avoid re‑processing bad files, I wrapped the read in a try/catch that captured `AnalysisException`; any failure was logged to an error table and the offending file was moved to a quarantine directory. Finally, I used `spark.readStream` for incremental loads so we could process new partitions as they appeared.

**Result** – The pipeline processed 1.2 TB of data per night in under 25 minutes, with zero manual intervention during the first month. We cut downstream report lag from 4 hours to 30 minutes and reduced data loss by 99 %. I learned that abstracting source logic into a trait not only keeps code DRY but also makes it trivial to swap formats or add new sources as the data lake evolves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
