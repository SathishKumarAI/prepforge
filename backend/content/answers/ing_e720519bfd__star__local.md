---
qid: ing_e720519bfd__star__local
question: 'Explain: Replica Selection — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 336
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:10:35-05:00'
sources: []
---

**Situation:**  
At my previous company we were running a Hadoop cluster for nightly analytics on a 10‑TB log dataset. The job ran into frequent timeouts because the DataNode that stored the first block of each file was often down or heavily loaded, causing the NameNode to retry many times.

**Task:**  
I needed to redesign how HDFS chose replicas for read operations so that our Spark jobs would hit healthy nodes and reduce latency by at least 30%.

**Action:**  
I dug into the replica selection algorithm in the NameNode. First, I added a “health score” metric that tracked recent RPC success rates per DataNode. Then I modified the block report handling to attach this score to each block’s metadata. In the client side, I overrode the default `BlockReader` logic: before selecting a replica, it sorted candidates by health score and network proximity (using rack awareness). I also introduced a small cache of “preferred replicas” per DataNode pair so that repeated reads hit the same healthy node. Finally, I updated our monitoring to log each selection decision for audit.

**Result:**  
After rolling out the change, our nightly ETL job completion time dropped from 4 hrs to 2.7 hrs— a 32% improvement—and CPU utilization on the busiest DataNodes fell by ~40%. I learned that small tweaks in replica selection can yield outsized performance gains when combined with real‑time health metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
