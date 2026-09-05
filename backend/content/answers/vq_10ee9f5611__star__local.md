---
qid: vq_10ee9f5611__star__local
question: What is yield in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 308
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:48:23-05:00'
sources: []
---

**Situation** – While refactoring our nightly ETL pipeline that ingested millions of JSON logs into a Parquet lakehouse, I noticed the transformation stage was generating a huge intermediate RDD with duplicated records, which bloated memory and slowed down downstream analytics.

**Task** – I needed to rewrite the transformation logic so it could filter, deduplicate, and reshape the data in one pass without creating unnecessary collections, keeping the runtime under 10 minutes for a 2‑TB input.

**Action** – Using Scala’s `yield` inside a `for`‑comprehension on an iterator of parsed logs, I combined filtering (`if !seen.contains(id)`) and mapping into a single lazy collection. The comprehension returned a new sequence where each element was a case class `LogEvent`. I then converted this to a Dataset via Spark’s `spark.createDataset` with an implicit encoder, letting Spark handle the schema inference. By leveraging `yield`, I avoided materializing intermediate lists; the iterator produced elements on demand, dramatically reducing GC churn.

**Result** – The refactored pipeline cut memory usage by 45 % and reduced runtime from 18 minutes to 9 minutes. I also learned how Scala’s lazy collections, when paired with Spark Datasets, can lead to cleaner, more efficient ETL code without sacrificing readability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
