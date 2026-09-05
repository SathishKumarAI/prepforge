---
qid: ing_181daf335f__star__local
question: 'Explain: Cluster Rebalancing — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 444
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:16:57-05:00'
sources: []
---

**Situation**  
In my last role at a media company, we had a Hadoop 2.10 cluster that grew from 50 nodes to 120 after a campaign‑driven data surge. By the end of Q3, one rack contained 40 % of the HDFS blocks while others held only 15–20 %. Query latency for video metadata exploded from 200 ms to over 1.2 s, and we were hitting the DataNode disk I/O limits on that overloaded rack.

**Task**  
I was tasked with performing a cluster rebalance within a 48‑hour maintenance window so that each node held roughly equal block replicas, restoring query performance without causing service interruptions or data loss.

**Action**  
1. **Baseline Analysis** – Ran `hdfs fsck / -files -blocks -locations` to map block distribution and identified the “hot” rack.
2. **Configuration Tuning** – Increased `dfs.block.replicator.maxThreadsPerNode` to 12 and lowered `dfs.replication.min.rack` to encourage cross‑rack moves.
3. **Rebalance Execution** – Executed `hadoop dfsadmin -setBalancerBandwidth 200m` to throttle traffic, then ran `hadoop balancer -threshold 5`. I added a custom script that paused the indexer service during peak hours and monitored progress with `balancer.log`.
4. **Validation** – After completion, re‑ran `fsck` to confirm even distribution; performed synthetic read/write tests to verify latency improvements.

**Result**  
The rebalance finished in 42 hours, bringing block distribution within ±3% of the ideal. Query latency dropped from 1.2 s to 250 ms, and disk I/O on the previously overloaded rack fell by 70%. The exercise reinforced that careful bandwidth throttling and staged service pauses are essential for large‑scale HDFS rebalancing without downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
