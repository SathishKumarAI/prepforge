---
qid: vq_7f3b3b0c1a__eli5__local
question: RDDs says materialized in which condition?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 185
total_tokens: 343
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:17:46-05:00'
sources: []
---

Think of an RDD (Resilient Distributed Dataset) like a recipe that tells you how to bake a cake, but it doesn’t actually bake the cake until someone asks for it. In Spark, an RDD is **materialized**—that is, the data is actually computed and stored in memory or disk—only when you run an action (like `count()`, `collect()`, or writing to HDFS). Transformations (`map`, `filter`) are lazy: they just record what should be done. The first time you trigger an action, Spark walks through all the recorded steps, computes the result, and keeps it for future reuse. So, RDDs become materialized **when an action forces computation**; otherwise, they stay as a chain of instructions waiting to be executed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
