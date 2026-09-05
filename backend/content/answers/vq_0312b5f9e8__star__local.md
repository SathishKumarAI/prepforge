---
qid: vq_0312b5f9e8__star__local
question: What is the difference between a call-by-value and call-by-name parameter?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 277
total_tokens: 518
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:45:56-05:00'
sources: []
---

**Situation:** In my last role, I was refactoring a Spark ETL pipeline that processed millions of records daily. The original UDFs were written in Scala and passed large lookup tables as parameters, causing repeated data shuffling and memory spikes.

**Task:** My goal was to reduce the runtime by 30% while keeping the code maintainable and ensuring lazy evaluation where possible.

**Action:** I switched from call‑by‑value (the default) to call‑by‑name for the lookup table parameter. By annotating the function with `=> Map[String, Int]`, the map was only materialized when accessed inside the UDF, preventing unnecessary serialization of unused data across executors. I also benchmarked both versions using Spark’s `spark.time` and monitored executor memory via the UI.

**Result:** The call‑by‑name version cut execution time from 12 min to 8 min (≈33% faster) and reduced peak executor memory by ~200 MB per node. This experience taught me that choosing the right parameter passing strategy can have a measurable impact on distributed workloads, especially when dealing with large immutable collections.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
