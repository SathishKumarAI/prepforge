---
qid: vq_97683b3f09__star__local
question: How does yield work in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 358
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:10:39-05:00'
sources: []
---

**Situation:**  
While building a data pipeline for our e‑commerce analytics platform, I needed to transform a large stream of purchase events into summarized daily reports. The raw event list was over 5 million records, and the initial implementation using `map` followed by `foldLeft` was too slow (≈4 min per batch).

**Task:**  
I had to refactor the transformation logic to reduce latency while preserving correctness, leveraging Scala’s collection APIs.

**Action:**  
I rewrote the core loop as a single `for‑yield` comprehension on a `List[(String, Double)]`. The code extracted product IDs and amounts, grouped them by date, then yielded tuples of `(date, totalRevenue)`. Using `yield` let me keep the transformation declarative:  
```scala
val dailyTotals = for {
  event <- events
  (date, amt) = parse(event)
} yield (date, amt)

val aggregated = dailyTotals.groupBy(_._1).mapValues(_.map(_._2).sum)
```
I also switched from `List` to `Vector` for better random‑access performance and enabled parallel collections (`par`) where safe. The compiler optimized the comprehension into a single pass.

**Result:**  
The batch time dropped from 4 minutes to under 45 seconds—a 90% reduction—while memory usage stayed below 200 MB. I learned that `yield` can replace explicit mutable state, making code easier to reason about and enabling the compiler to generate efficient loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
