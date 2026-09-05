---
qid: vq_736004aa46__star__local
question: Difference between def and Lambda?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 284
total_tokens: 516
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:04:38-05:00'
sources: []
---

**Situation:**  
While refactoring our ETL pipeline that processed 2 million rows of customer logs per day, I noticed the transformation function we used in `pyspark.map` was written as a full `def`. The build time kept creeping up because each worker had to load the entire module.

**Task:**  
I needed to reduce the serialization overhead and make the mapping step more efficient without breaking the existing logic that normalised timestamps and flagged anomalies.

**Action:**  
I replaced the verbose function with a compact `lambda` inside the `mapPartitions`. I used `pyspark.sql.functions.udf` to wrap the lambda so Spark could broadcast it. The lambda performed the same timestamp parsing, added an “anomaly” flag, and returned the transformed row—all in one line. I also profiled the job before and after to confirm the change reduced worker startup time.

**Result:**  
The ETL runtime dropped from 12 minutes to 8 minutes—a 33% speedup—while keeping the same output quality (0.01% variance in flag counts). I learned that concise, broadcastable lambdas can dramatically cut serialization costs in distributed data pipelines, but only when they’re pure and small enough for Spark to inline efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
