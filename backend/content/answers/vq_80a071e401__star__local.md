---
qid: vq_80a071e401__star__local
question: What is accumulator in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 315
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:06:52-05:00'
sources: []
---

**Situation:**  
In my last role I was building a nightly ETL pipeline for a financial services client that ingested millions of transaction logs from Kafka into Parquet files on S3. During the first run, we noticed an unusually high number of malformed records causing downstream analytics to fail.

**Task:**  
I needed a way to capture and quantify those bad records in real time without interrupting the Spark job, so I could surface metrics to the data quality team and adjust our schema validation logic.

**Action:**  
I introduced a long‑running Spark accumulator named `badRecordCount`. Inside each mapPartitions step, I wrapped the parsing logic with a try/except; on exception, I incremented the accumulator. Because accumulators are read‑only in executors but mutable on the driver, they let me aggregate counts across all partitions efficiently. I also logged the offending payloads to an S3 error bucket for later inspection. The code was integrated into our existing Spark job with minimal changes—just a few lines of Python and the accumulator registration.

**Result:**  
The pipeline completed in 15 minutes instead of hanging, and we identified that 0.8% of records were corrupt. We passed this metric to the product team, who fixed the upstream data source, reducing future errors by 90%. I learned how Spark’s accumulators provide a lightweight, fault‑tolerant way to collect global metrics during distributed processing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
