---
qid: vq_80a071e401__faang__local
question: What is accumulator in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 522
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:19:32-05:00'
sources: []
---

**Clarify**  
You’re asking about *Accumulator* in Apache Spark – a fault‑tolerant, write‑only shared variable that lets tasks aggregate data (e.g., counters or sums) across executors and return the final value to the driver.

**Approach**  
Explain what it is, why Spark needs it, how it’s used, and its limitations. Keep the explanation concise but complete, then touch on usage patterns and trade‑offs.

**Depth**  
- **Definition**: An accumulator is a mutable variable that can be safely updated from multiple tasks; updates are *additive* (e.g., `+=`) and only the driver reads it after execution.  
- **Implementation**: Spark registers an accumulator with the driver, then each executor holds a local copy. When a task runs, it performs atomic “add” operations on its local copy. At task completion, Spark aggregates all local copies to update the global value.  
- **Use cases**: Counting malformed records, summing values for statistics, or collecting error counts during ETL jobs.  
- **Constraints**:  
  - *Write‑only*: Tasks cannot read the accumulator’s current value.  
  - *Idempotence*: If a task retries (due to failure), its updates may be applied twice unless you guard against it.  
  - *Data type*: Spark provides built‑in numeric accumulators; custom objects require serialization and `AccumulatorV2`.  

**Edge cases**  
- **Task retry** → double counting. Mitigate by using `Accumulators` that track unique IDs or use `AccumulatorV2` with merge logic.  
- **Large values** → potential overflow or serialization overhead. Use appropriate numeric types (`LongAccumulator`).  
- **Non‑deterministic tasks** → accumulator results become unreliable.

**Optimize & communicate**  
When presenting, highlight the benefit: low‑overhead, fault‑tolerant aggregation without shuffling data. Mention that in newer Spark versions, `Accumulators` are replaced by `AccumulatorV2` for richer semantics. Conclude with a quick code snippet:

```scala
val badRows = spark.sparkContext.longAccumulator("badRows")
df.foreach(row => if (invalid(row)) badRows.add(1))
println(s"Bad rows: ${badRows.value}")
```

This demonstrates clear intent, usage pattern, and awareness of pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
