---
qid: vq_75e992f799__star__local
question: Difference between broadcast and accumulators?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 341
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:05:08-05:00'
sources: []
---

**Situation:**  
In a recent data‑pipeline project for a retail client, we were processing 12 TB of clickstream logs on an EMR cluster. The job had to aggregate user sessions and compute real‑time fraud scores while keeping memory usage below the 8 GB per executor limit.

**Task:**  
I needed to share a large lookup table (product categories) across all executors efficiently, and also keep a global count of how many suspicious transactions were flagged during each run, without duplicating data or risking race conditions.

**Action:**  
I loaded the category map into a Spark broadcast variable so every executor had read‑only access to it in memory, avoiding repeated shuffles. For the fraud counter I used an accumulator: a long type that could be incremented safely from all tasks and summed on the driver after job completion. I carefully typed the accumulator as `LongAccumulator` and registered it with `SparkContext`. In each partition’s map step, I checked the category against the broadcast map and, if flagged, called `accumulator.add(1)`.

**Result:**  
The broadcast kept memory usage down to ~1 GB per executor; the job finished 30 % faster than the baseline. The accumulator accurately reported 4,213 suspicious events in real time, which we logged for compliance. I learned that broadcasts are ideal for large read‑only data shared across tasks, while accumulators are safe for aggregating metrics from distributed workers without shuffling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
