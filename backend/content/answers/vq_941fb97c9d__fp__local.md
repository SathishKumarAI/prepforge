---
qid: vq_941fb97c9d__fp__local
question: How to convert dataframe to rdd?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 324
total_tokens: 492
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:46:41-05:00'
sources: []
---

In Spark the **DataFrame** abstraction is a typed view over an **RDD of `InternalRow`**, enriched with schema metadata and Catalyst optimizations.  
To convert a DataFrame to an RDD you simply *materialise* that underlying row stream:

```scala
val rdd = df.rdd          // RDD[InternalRow]
```

If you need an RDD of domain objects, map each `InternalRow` through the **Encoder** logic that Spark uses for serialization:

```scala
import spark.implicits._
val typedRdd: RDD[MyType] = df.as[MyType].rdd
```

Why does this work?  
1. The Catalyst optimizer rewrites logical plans into physical operators; when `df.rdd` is called, the plan is executed and each partition yields an iterator of rows.  
2. Spark guarantees *lazy evaluation* – no data moves until an action on the RDD forces execution, preserving fault‑tolerance semantics.  
3. The transformation preserves lineage: any subsequent transformations on the RDD are reflected back to the original DataFrame plan.

**Non‑obvious insight:** Converting to an RDD bypasses Catalyst’s columnar optimizations (e.g., whole‑stage code generation). For heavy analytical workloads, keep data in DataFrames; use `rdd` only when you need low‑level control or integration with legacy APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
