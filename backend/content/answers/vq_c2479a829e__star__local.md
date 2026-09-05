---
qid: vq_c2479a829e__star__local
question: what is the difference between reduceByKey and GroupByKey?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 356
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:18:03-05:00'
sources: []
---

**Situation**  
At my last company we were migrating a real‑time clickstream pipeline from Hadoop MapReduce to Spark Structured Streaming. The incoming data set had millions of user events per hour, and our goal was to compute daily page‑view totals for each product category.

**Task**  
I needed to aggregate the counts efficiently without blowing up memory or network traffic, while still keeping the code readable for the team.

**Action**  
First I tried `groupByKey` on the RDD of `(category, 1)` pairs. It worked but produced a huge shuffle: every executor had to send all keys across the cluster, and the intermediate data exploded beyond the JVM heap, causing GC thrashing. Next, I switched to `reduceByKey`, which internally performs a partial reduce locally before shuffling. This reduced the amount of data sent over the network by ~70% and eliminated the out‑of‑memory errors. I also added a combiner step with `mapValues(_ => 1)` to make the partial aggregation explicit, and logged shuffle metrics to verify the reduction.

**Result**  
The job completed in under 12 seconds per hour instead of 45 seconds, and memory usage dropped from 16 GB to 4 GB per executor. I learned that `groupByKey` is simple but only suitable for small key spaces or low‑volume data; `reduceByKey` (or `aggregateByKey`) should be the default when scaling horizontally because it performs local aggregation and minimizes shuffle traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
