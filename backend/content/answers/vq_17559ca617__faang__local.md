---
qid: vq_17559ca617__faang__local
question: what is lazy evaluation in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 449
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:59:28-05:00'
sources: []
---

**Clarify**  
You’re asking about *lazy evaluation* in Apache Spark—a key feature that separates Spark from older batch engines. It means transformations (e.g., `map`, `filter`) are not executed immediately; instead, Spark builds a lineage graph of operations and only runs them when an action (`count`, `collect`, `saveAsTextFile`) is invoked.  
Assumptions: the interviewee knows RDD/DataFrame APIs and basic execution model.

**Approach**  
Explain the two phases (job planning → execution), why laziness matters for optimization, and how Spark’s DAG scheduler uses it to stage jobs.

**Depth**  
- **Lineage graph**: each transformation creates a new logical plan node; edges represent data dependencies.  
- **Optimization**: Catalyst (DataFrames) or Tungsten (RDDs) can rearrange the graph—push‑down predicates, combine shuffles, cache sub‑trees—before any shuffle materialization.  
- **Execution**: On an action, Spark partitions the graph into stages separated by shuffle boundaries; each stage becomes a task set that runs in parallel across executors.  
- **Performance gains**: reduced data movement, minimized disk I/O, and ability to fuse transformations.

**Edge cases**  
- *Side‑effects*: functions with external state or non‑deterministic behavior break the assumption of pure transformations; lazy eval may yield unexpected results if actions are invoked multiple times.  
- *Caching*: calling `cache()` forces materialization but still respects laziness until an action follows.  
- *Fault tolerance*: lineage allows recomputation of lost partitions.

**Optimize & communicate**  
Highlight that lazy evaluation is the foundation for Spark’s query optimization, enabling cost‑based plan selection and efficient resource use. In a FAANG interview, emphasize how this design choice directly translates to lower latency and higher throughput in production data pipelines. Use concise bullet points and analogies (e.g., “Spark builds a recipe first, then cooks only when you serve”) to keep the explanation crisp yet complete.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
