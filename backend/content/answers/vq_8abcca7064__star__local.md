---
qid: vq_8abcca7064__star__local
question: what is broadcast variable?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 306
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:08:26-05:00'
sources: []
---

**Situation:**  
During a quarterly sales reporting project at my previous company, our Spark job was processing 12 TB of raw transaction logs every night. The nightly ETL took over four hours because the job had to repeatedly read the same small lookup table—our 3 MB product catalog—from HDFS for each partition.

**Task:**  
I needed to reduce the runtime by at least 30% without changing the business logic or the data pipeline’s architecture, so we could deliver fresh reports before the next day’s sales team meeting.

**Action:**  
I introduced a Spark broadcast variable. First, I cached the product catalog in memory on the driver and called `sc.broadcast(df.collect())`. Then, inside each partition’s map function, I accessed the broadcasted map instead of reading from HDFS. To keep the broadcast fresh, I scheduled an hourly refresh that re‑broadcasts only when the catalog changes. I also enabled Spark’s `spark.sql.autoBroadcastJoinThreshold` to allow automatic broadcasting for any table below 10 MB, ensuring future joins behaved similarly.

**Result:**  
The ETL runtime dropped from 240 minutes to 160 minutes—a 33% improvement—while maintaining exact join semantics. The change was fully automated and added no extra storage cost. I learned that judicious use of broadcast variables can dramatically cut shuffle traffic in Spark, but it requires careful memory management and cache invalidation strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
