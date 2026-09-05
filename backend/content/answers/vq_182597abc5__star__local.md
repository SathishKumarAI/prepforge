---
qid: vq_182597abc5__star__local
question: Difference between Call-by-value and call-by-name parameter?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 300
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:49:37-05:00'
sources: []
---

**Situation:** In my third year as a data engineer at FinTech Corp, we were refactoring our nightly ETL pipeline that ingested millions of transaction records from a streaming source into Snowflake. The legacy code used a custom in‑memory transformation function written in Scala; it accepted parameters by value, causing the entire dataset to be materialized before any filtering.

**Task:** I needed to reduce memory consumption and processing time so the job could finish within our 2‑hour window while still preserving correctness for downstream analytics.

**Action:** I switched the function signature from call‑by‑value to call‑by‑name. By wrapping the expensive transformation in a lazy val, the data was only evaluated when actually needed during filtering. I also added unit tests to verify that side effects (e.g., logging) behaved identically. We benchmarked both versions on a sample of 5 M rows: the new call‑by‑name version cut memory usage from 12 GB to 4 GB and runtime from 95 min to 38 min.

**Result:** The pipeline now reliably completes under the deadline, freeing up cluster resources for other jobs. I learned that understanding parameter passing semantics can unlock significant performance gains in large‑scale data workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
