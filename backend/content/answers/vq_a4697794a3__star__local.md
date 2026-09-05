---
qid: vq_a4697794a3__star__local
question: What is the difference between val and var in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 328
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:13:00-05:00'
sources: []
---

**Situation** – While refactoring the ETL job that aggregates click‑stream logs into Hive, I noticed the Spark driver was throwing “ConcurrentModificationException” during partition shuffling. The code used a mutable `var` to accumulate intermediate metrics.

**Task** – I had to eliminate the race condition without breaking the existing logic or slowing down the 12 hour nightly run.

**Action** – First I replaced every `var` that held state across transformations with an immutable `val`. For example, instead of  
```scala
var totalClicks = 0L
df.foreach(row => totalClicks += row.getLong(1))
```
I used a fold:  
```scala
val totalClicks = df.rdd.map(_.getLong(1)).foldLeft(0L)(_ + _)
```
This ensured the value was calculated in a single pass and never mutated after creation. I also switched to `lazy val` for expensive lookups that were previously stored in a mutable map, guaranteeing they were computed once per partition.

**Result** – The pipeline now completes in 8 minutes instead of 12, with no concurrent modification errors. The immutable approach reduced memory churn by ~30% and made the codebase easier to reason about. I learned that choosing `val` over `var` not only enforces safety but can also improve performance in distributed data processing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
