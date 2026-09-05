---
qid: vq_f8f5676e24__star__local
question: What is Pure function in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 345
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:27:26-05:00'
sources: []
---

**Situation** – In my last role I was refactoring a data‑pipeline that processed nightly clickstream logs. The original implementation mixed stateful transformations with side‑effects, which made unit testing impossible and caused flaky Spark jobs on the cluster.

**Task** – My goal was to rewrite the core transformation logic into pure functions so we could test it in isolation, improve reliability, and enable better parallelism in the DAG.

**Action** – I identified every place where mutable state or external IO was accessed. For each, I extracted the logic into a `case class` method that accepted all required data as parameters and returned a new immutable result without touching any shared variables. For example, the user‑segmentation routine became:

```scala
def segmentUser(events: Seq[Event]): UserProfile =
  events.foldLeft(UserProfile.empty) { (acc, e) =>
    acc.copy(
      clicks = acc.clicks + 1,
      lastSeen = e.timestamp.max(acc.lastSeen)
    )
  }
```

I used `cats` to compose these pure functions and wrote property‑based tests with ScalaCheck. The refactor also eliminated the need for temporary RDDs, reducing memory usage by ~30 %.

**Result** – After deploying the new pipeline, unit test coverage rose from 12 % to 87 %, and production failures dropped by 40 %. I learned that writing pure functions in Scala not only simplifies testing but also unlocks Spark’s full parallel execution capabilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
