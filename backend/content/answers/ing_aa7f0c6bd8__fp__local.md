---
qid: ing_aa7f0c6bd8__fp__local
question: 'Explain: A Spark job that joins a 2 TB fact table to a 50 GB dimension
  table has one straggler task running 100× longer than the rest. Diagnose and fix
  it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 439
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:07:37-05:00'
sources: []
---

**Why the straggler appears**

In a Spark join every key‑value pair from both sides is shuffled to the same reducer (partition).  
If one dimension row has a *high‑cardinality* fact key, all its 2 TB facts will be routed to a single task. That task then scans far more data than its peers, so it dominates the job time—exactly what we see with the 100× lag.

**Diagnosing**

1. **Shuffle metrics** – `spark.sql.shuffle.partitions` and `org.apache.spark.scheduler.TaskInfo` show one partition’s input size ≫ others.  
2. **Broadcast vs shuffle** – The 50 GB dimension is too large for broadcast, so Spark uses a full shuffle; no data locality is preserved.  
3. **Data profiling** – Inspect the join key distribution on both tables; a few keys will have >10⁶ fact rows.

**Fixes**

| Approach | How it works |
|----------|--------------|
| **Repartition by hash with `salting`** | Append a random bucket to high‑cardinality keys, then repartition on `(key,bucket)`. This spreads the load across many tasks. |
| **Broadcast join after filtering** | If most dimension rows are needed (e.g., 95 % of facts), broadcast only the *active* subset or use `broadcastHashJoin` with a smaller filter. |
| **Skew‑aware shuffle** (`spark.sql.adaptive.skewJoin.enabled=true`) | Spark automatically splits heavy partitions into sub‑partitions during runtime. |

**Non‑obvious insight**

Most people blame “too many tasks” for slow jobs, but the *root cause is often a single key’s cardinality*. A skewed key can turn a perfectly parallel job into serial work—fixing it requires redistributing that key’s data, not merely adding more executors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
