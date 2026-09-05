---
qid: vq_75e992f799__eli5__local
question: Difference between broadcast and accumulators?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 213
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:16:27-05:00'
sources: []
---

Think of a data‑engineering job as a big kitchen where many chefs (workers) are chopping vegetables at the same time.

**Broadcast variables** are like a recipe card that every chef receives once. The card is read‑only; each chef can look it up whenever they need to know, but no one changes it. In Spark, a broadcast variable holds data that all executors copy locally so they don’t keep pulling it from the driver.

**Accumulators** are like a shared tally counter in the kitchen. Chefs add numbers to it (e.g., how many carrots were chopped) but never read its current value during work. At the end, the master chef reads the final count. In Spark, an accumulator collects partial results from workers and returns the sum (or other aggregate) to the driver.

So: broadcast = shared read‑only data; accumulator = shared write‑only counter that aggregates results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
