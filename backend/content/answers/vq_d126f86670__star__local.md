---
qid: vq_d126f86670__star__local
question: What is the difference between var and value?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 386
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:20:44-05:00'
sources: []
---

**Situation** – In a recent migration of our nightly ETL pipeline from Python to Scala on Spark, we noticed that several transformation stages were mutating intermediate RDDs and DataFrames. The codebase had dozens of `var` declarations that made debugging hard because the state could change unexpectedly across lazy evaluations.

**Task** – My goal was to refactor the critical aggregation logic so that it used immutable variables (`val`) wherever possible, thereby reducing side‑effects, improving readability, and enabling Spark’s catalyst optimizer to better predict query plans.

**Action** – I began by profiling the pipeline with `spark.ui` and found a 12 % slowdown on stages where `var` was reused across partitions. I replaced those mutable references with `val`, introduced case classes for intermediate results, and leveraged Scala’s pattern matching to enforce immutability. I also added unit tests that asserted no state leakage between stages. During refactoring I kept an eye on memory usage; each `val` created a new reference but avoided the overhead of synchronized writes.

**Result** – After deploying the changes, the pipeline completed 15 % faster and the JVM heap churn dropped by ~30 %. The code became easier to reason about, and we eliminated three production bugs that had been caused by unintended state mutation. I learned that embracing immutability in Spark not only improves performance but also enhances maintainability in large data‑engineering projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
