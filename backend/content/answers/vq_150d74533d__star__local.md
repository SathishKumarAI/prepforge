---
qid: vq_150d74533d__star__local
question: what is the difference between spark context and spark session?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 371
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:49:08-05:00'
sources: []
---

**Situation:**  
At my last role I was refactoring a legacy ETL pipeline that had been running on Spark 1.6 for years. The team wanted to migrate to Spark 3.0 and take advantage of the new DataFrame APIs while keeping the existing job orchestration intact.

**Task:**  
I needed to rewrite the ingestion jobs so they could run under the newer Spark Session model, but still preserve the ability to share a single JVM process for multiple workloads without losing the context‑level configuration that our scripts relied on.

**Action:**  
I started by creating a `SparkContext` only when we had to interact with RDDs or broadcast variables. For every job I instantiated a `SparkSession.builder.appName("etl-job")…getOrCreate()`. The session internally creates a single `SparkContext`, so the two layers coexist without conflict. I then migrated the code: replaced all `sc` references with `spark.sparkContext` where needed, and used `spark.read.parquet()` instead of `sc.textFile()`. To keep backward compatibility, I wrapped legacy functions in helper modules that lazily initialize a session if one isn’t already present.

**Result:**  
The new pipeline ran 35 % faster due to Catalyst optimizations, and we reduced the number of JVMs per day from 8 to 3. The migration also made the codebase cleaner; future developers now use only `SparkSession`, simplifying debugging and configuration management. I learned that while a `SparkContext` is the low‑level engine for distributed execution, a `SparkSession` is the unified entry point for all high‑level APIs, and using both appropriately can ease incremental upgrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
