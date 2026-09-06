---
qid: vq_9b94c5f444__faang__local
question: Spark transformations & actions are evaluated lazily?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 412
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:24:31-05:00'
sources: []
---

**Clarify**  
The interviewer is asking whether Spark’s RDD/DataFrame API evaluates *transformations* and *actions* lazily, and what the implications are. I’ll assume we’re talking about the core execution model (RDDs) and that the user knows the difference between a transformation (e.g., `map`, `filter`) and an action (`count`, `collect`).

**Approach**  
1. Define *lazy evaluation* in Spark.  
2. Explain how transformations build a lineage graph but don’t trigger execution.  
3. Show that actions walk that graph, triggering job(s).  
4. Mention eager operators (e.g., `foreachRDD` on streaming) as exceptions.

**Depth**  
- **Transformations**: return new RDD/DataFrame; only store the function and input lineage.  
- **Actions**: force execution of the lineage; Spark schedules a *stage* per partition set, then jobs for all actions in that task graph.  
- *Lazy evaluation* saves unnecessary shuffles/compute when intermediate results are never materialized.  
- Example: `val rdd2 = rdd1.map(...).filter(...)` → no execution until `rdd2.count()`.

**Edge Cases**  
- Operations like `checkpoint`, `persist` can force materialization early.  
- `foreachRDD` in Structured Streaming is executed eagerly on each micro‑batch.  
- User errors: forgetting an action will never run the job; memory leaks if RDD lineage grows unboundedly.

**Optimize & Communicate**  
I’d summarize: “Yes, Spark lazily evaluates transformations to build a DAG; actions trigger execution. This design reduces redundant work and allows optimizers (Catalyst/WholeStageCodegen) to rearrange tasks.” I’d finish by noting that understanding this model is key for debugging job failures and tuning performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
