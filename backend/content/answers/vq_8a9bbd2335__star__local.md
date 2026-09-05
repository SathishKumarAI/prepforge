---
qid: vq_8a9bbd2335__star__local
question: what is Serde in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 355
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:08:27-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with adding a new data source to our nightly ETL pipeline: a continuous stream of semi‑structured JSON logs from the mobile app that needed to be ingested into Hive for downstream analytics.

**Task:**  
I had to expose those logs as a regular Hive table so BI users could run ad‑hoc queries without waiting on an external parsing step, while keeping latency under two minutes and ensuring schema evolution was handled gracefully.

**Action:**  
I chose the Avro SerDe because it natively supports JSON via the `avro.json` property. I wrote a small Spark job to generate the Avro schema from a sample payload, then registered that schema in Hive’s metastore. Using `ROW FORMAT SERDE 'org.apache.hadoop.hive.serde2.avro.AvroSerDe'` and setting `AVRO_SCHEMA_LITERAL`, I created an external table pointing at the HDFS folder where the logs landed. To handle new fields without breaking existing queries, I added the `AVRO_FIELD_DELIMITER` property and leveraged Hive’s schema‑on‑read to ignore unknown columns.

**Result:**  
The new table was up and running within 24 hours, reducing BI query latency from 15 minutes (previously using a nightly MapReduce job) to under two. The approach also cut storage costs by 30% because we avoided materializing duplicate CSV files. I learned that choosing the right SerDe can dramatically simplify data ingestion pipelines and provide future‑proofing for evolving schemas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
