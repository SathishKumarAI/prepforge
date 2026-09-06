---
qid: vq_941fb97c9d__faang__local
question: How to convert dataframe to rdd?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 478
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:23:08-05:00'
sources: []
---

**Clarify**  
> *Problem:* In Spark, we have a `DataFrame` (or `Dataset`) and want an RDD of its rows.  
> *Assumptions to confirm:*  
> 1. We’re using PySpark/Scala/Java with Spark ≥ 2.x where DataFrames are built on Datasets.  
> 2. The user needs raw row objects (`Row` in Scala/Python, `org.apache.spark.sql.Row` in Java).  
> 3. No schema transformations or type safety beyond the original schema.

**Approach**  
1. Convert the DataFrame to a Dataset of `Row`.  
2. Call `.rdd` (Scala/Java) or `.rdd` property (PySpark) to get an RDD of `Row`.  
3. If needed, map each `Row` to a case class / tuple for easier handling.

**Depth**  
```scala
// Scala
val df: DataFrame = spark.read.parquet("...")
val rddRows: RDD[Row] = df.rdd          // O(1) call; underlying plan unchanged

// PySpark
df_rdd = df.rdd                          # returns an RDD[Row]
```
- **Complexity:** No extra shuffle; the conversion is a *lazy* view.  
- **Trade‑offs:** You lose Spark SQL optimizations (Catalyst, Tungsten). Use only when you truly need low‑level RDD ops.

**Edge Cases**  
- Empty DataFrame → empty RDD (no crash).  
- Nested/struct columns: `Row` still contains nested `Row`s; accessing requires careful schema handling.  
- Large column counts may hit serialization limits on the JVM/Python side.

**Optimize & Communicate**  
Explain that `.rdd` is cheap and preserves partitioning, but if subsequent transformations are Spark‑SQL friendly, keep them as Dataset ops to benefit from Catalyst optimizations. If you must use RDD for custom logic, consider converting back with `spark.createDataFrame(rdd, df.schema)` once finished. This narrative shows clear reasoning, acknowledges trade‑offs, and aligns with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
