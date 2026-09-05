---
qid: vq_3b44e71b5e__star__local
question: Which operations is not lazy?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 317
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:55:29-05:00'
sources: []
---

**Situation**  
During a migration from Hadoop MapReduce to Apache Spark for our nightly ETL pipeline, we noticed the job was running slower than expected even though the transformations looked efficient.

**Task**  
I had to identify why the pipeline wasn’t benefitting from Spark’s lazy evaluation and pinpoint which operation was forcing an immediate execution that caused unnecessary shuffling and disk I/O.

**Action**  
I traced the code step‑by‑step, looking at each RDD/DataFrame transformation. Most were pure lazily‑executed transformations (filter, map, join). The culprit turned out to be a `collect()` call inserted for debugging early in the job: it pulled the entire intermediate dataset into the driver’s memory, triggering full materialization of all preceding stages. I replaced that with a `take(10)` and moved the debug logic downstream after persisting the RDD. I also added `checkpoint()` before the expensive join to avoid recomputation.

**Result**  
After removing the premature `collect()`, the job time dropped from 12 minutes to 4 minutes, reducing cluster usage by ~70%. I learned that any Spark action—especially `collect` or `count` on large datasets—is a non‑lazy operation that can break performance expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
