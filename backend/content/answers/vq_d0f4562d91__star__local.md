---
qid: vq_d0f4562d91__star__local
question: Difference between case class vs Struct type?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 294
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:20:43-05:00'
sources: []
---

**Situation:** While migrating our nightly ETL pipeline from Spark 2.x to Databricks Runtime 13 for a real‑time analytics platform, we noticed the query plan was ballooning and the job ran twice as long.

**Task:** I had to refactor the data model so that the schema would be both strongly typed for downstream jobs and efficiently serializable for the new runtime. The team needed an approach that preserved type safety but avoided the overhead of Scala case classes in the Catalyst optimizer.

**Action:** I replaced the heavy use of `case class` definitions with Spark’s native `StructType` schemas. By defining a reusable `StructType` schema file and applying it via `.schema(mySchema)` when reading Parquet/Delta tables, we let Spark generate internal columnar representations directly. I also leveraged `Encoders.tuple` for the few narrow transformations that still required typed objects, but kept most data frames untyped to benefit from Tungsten’s code generation.

**Result:** The pipeline execution time dropped from 45 minutes to 22 minutes—a 51% improvement—while preserving compile‑time type checks. I learned that in Spark 3.x+ the cost of case classes often outweighs their readability, and that `StructType` gives us both performance and flexibility when working with large, schema‑driven data sets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
