---
qid: vq_54d18035da__star__local
question: what are the parameters of mappers and reducers?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 383
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:59:28-05:00'
sources: []
---

**Situation:**  
At my last company we were rebuilding a real‑time analytics pipeline on Hadoop to support daily sales dashboards that had been lagging behind by hours.

**Task:**  
I needed to re‑design the MapReduce jobs so they could ingest the raw clickstream logs, aggregate per product in under 30 minutes, and feed the results into our BI tool.

**Action:**  
In the mapper I defined `Text` as the input key (file offset) and a custom `ClickEventWritable` for the value. The output key was the product ID (`IntWritable`) and the value was a `CountPriceWritable` holding count, total revenue, and min/max prices. For the reducer I set the input key/value types to match the mapper’s output, and the final output key/value pair was a `ProductStatsWritable`. I also tuned the number of reducers to 50 (matching our data partitions), added a combiner identical to the reducer for local aggregation, and configured the partitioner to hash on product ID so related keys hit the same reducer. I set job properties like `mapreduce.job.reduces` and `mapreduce.map.memory.mb` to balance throughput and memory.

**Result:**  
The new jobs cut processing time from 2 hours to under 20 minutes, with a 40 % reduction in spill‑to‑disk events. I learned that careful alignment of key/value types across mapper, combiner, reducer, and the use of custom writable classes are essential for efficient MapReduce pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
