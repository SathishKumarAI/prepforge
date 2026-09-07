---
qid: vq_f8ac545dfc__faang__local
question: What types of transformations do we perform in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 672
total_tokens: 905
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:43:07-05:00'
sources: []
---

**Clarify**  
We’re asked to enumerate the *types* of data‑transformations you can apply when processing datasets with Spark (either DataFrame or RDD APIs). I’ll assume we’re focusing on common ETL use cases: cleaning, enrichment, aggregation, and format changes.

**Approach**  
1. Identify transformation families.  
2. For each family give the typical Spark primitives (SQL functions, UDFs, DSL ops).  
3. Note when they are *lazy* vs *eager*, their execution model, and typical use‑cases.

---

### Depth  

| Transformation Family | Spark API / Syntax | Typical Use‑Case |
|------------------------|--------------------|------------------|
| **Filter / Selection** | `df.filter(col("age") > 30)`; RDD `rdd.filter(x => x.age>30)` | Remove unwanted rows. |
| **Projection / Column Ops** | `select`, `withColumn`, `expr` | Shape schema, add computed columns. |
| **Aggregation / Group‑by** | `groupBy(...).agg(...)` | Compute totals, averages per key. |
| **Window Functions** | `over(Window.partitionBy(...))` | Running totals, rank, lag/lead. |
| **Join / Union / Intersect** | `join`, `union`, `intersect` | Merge datasets or combine partitions. |
| **Deduplication** | `dropDuplicates()` | Remove duplicate rows. |
| **Sorting / Ordering** | `orderBy(...)` | Prepare for window ops or output ordering. |
| **Pivot / Unpivot** | `pivot`, `explode` | Reshape tall/long tables to wide format (and back). |
| **UDF / User‑Defined Functions** | `udf(myFunc)` | Apply custom logic not covered by built‑in functions. |
| **Data Cleansing / Normalization** | Regex replace, trim, cast | Clean text, standardize types. |
| **Schema Inference / Casting** | `schema`, `.cast()` | Ensure consistent data types across jobs. |
| **Format Conversion** | `write.format("parquet")` / `read.json(...)` | Persist to columnar storage or read from JSON/Avro. |

All these operations are *lazy*: they build a DAG of transformations and only materialize when an action (e.g., `count`, `show`) is invoked.

---

### Edge Cases  

* UDFs break Catalyst optimizations → slower execution.  
* Skewed joins cause executor OOM; use broadcast join or salting.  
* Window functions on very large partitions need careful partitioning to avoid shuffle spikes.  
* Schema mismatches after read/write can lead to runtime errors.

---

### Optimize & Communicate  

* Prefer built‑in Spark SQL functions (Catalyst‑optimized) over UDFs.  
* Use `broadcast` for small dimension tables.  
* Cache intermediate results when reused in multiple actions.  
* When explaining, start with the business goal, then map it to the transformation family, and finally discuss performance knobs—this shows deep understanding while keeping the answer concise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
