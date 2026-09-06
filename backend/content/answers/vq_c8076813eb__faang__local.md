---
qid: vq_c8076813eb__faang__local
question: What are the types of UDF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 511
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:33:18-05:00'
sources: []
---

**Clarify**  
The interview asks for *“types of UDF”* in a data‑engineering context (e.g., Spark, Hive). I’ll assume they mean user‑defined functions exposed to SQL or DataFrame APIs, not the internal UDF implementation details.

**Approach**  
1. List each category with a concise definition.  
2. Mention typical use cases and where they’re registered.  
3. Highlight differences in execution model (CPU vs GPU, vectorized).  

**Depth**  
| Type | Definition | Registration | Typical Use |
|------|------------|--------------|-------------|
| **Scalar UDF** | Input → single output per row. | `spark.udf.register("name", func)` or Hive `CREATE FUNCTION`. | Custom string manipulation, date calc. |
| **Table‑valued/UDAF (Aggregate)** | Operates on a group of rows → single value. | `agg` with custom class extending `UserDefinedAggregateFunction`. | Compute median, custom percentiles. |
| **Vectorized UDF** | Processes batches of columns via JVM/Arrow vector APIs. | Spark 3.x `udf.register("name", func, DataType)` with `spark.sql.execution.arrow.enabled`. | High‑throughput numeric transforms. |
| **Python/Scala/Java UDF** | Language‑specific wrappers around the same execution engine. | Same registration API; language chosen at compile time. | Leverage existing libraries (e.g., NumPy). |
| **GPU‑accelerated UDF** | Offloads compute to CUDA via RAPIDS or Spark GPU extensions. | Register with `spark.sql.extensions` pointing to a `GpuUdf`. | Deep‑learning inference, large‑scale joins. |

**Edge Cases**  
- Scalar UDFs can serialize/deserialize overhead; avoid heavy I/O inside them.  
- Aggregates must be deterministic and support partial aggregation for shuffle.  
- Vectorized/UDFs require Arrow compatibility; older Spark versions won’t use them.  

**Optimize & Communicate**  
I’d stress that in production, prefer built‑in functions or vectorized UDFs to keep the Catalyst optimizer happy. If a custom UDF is necessary, benchmark against native SQL first and profile CPU vs I/O costs. This shows awareness of performance trade‑offs while keeping the answer concise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
