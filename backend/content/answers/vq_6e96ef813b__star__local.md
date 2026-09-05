---
qid: vq_6e96ef813b__star__local
question: What is call-by-name?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 290
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:03:34-05:00'
sources: []
---

**Situation** – While refactoring our nightly ETL pipeline that ingested millions of customer events into Snowflake, I noticed the job was stuck in an infinite loop because a complex UDF kept recomputing its argument on every row.

**Task** – I needed to eliminate the redundant calculations and bring down runtime from 4 hours to under 1 hour without changing business logic or data quality.

**Action** – I rewrote the UDF in Scala using Spark’s `lazy val` and explicitly marked the parameter as *call‑by‑name* (`def transform(data: => DataFrame): DataFrame`). This forces Spark to evaluate the argument only once, caching it internally. I also added unit tests that compare outputs before and after refactor, and instrumented the job with Prometheus metrics to confirm single evaluation.

**Result** – The pipeline finished 3 hours faster, processing 1.2 billion rows per run. CPU usage dropped by 35%, and we avoided duplicate materialization of intermediate DataFrames. I learned that understanding call‑by‑name semantics can dramatically improve performance in distributed data workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
