---
qid: vq_4072a021d5__faang__local
question: How can we join two bigger tables in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 551
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:07:12-05:00'
sources: []
---

**Clarify**  
You’re asking how to perform an efficient `JOIN` on two large Spark tables (say > 10 GB each). Key assumptions: both are partitioned/clustered on the join key, data is stored in Parquet/Hudi, and you have a cluster with enough executors. Ask whether the join is inner, left‑semi, or broadcastable.

**Approach**  
1. **Partition & Broadcast Decision** – If one table < 100 MB after filtering, use `broadcast()`.  
2. **Shuffle Hash Join** – default for large tables; ensure `spark.sql.shuffle.partitions` ≈ 4× executor cores.  
3. **Sort‑Merge Join** – enable if both tables are already sorted on the key and `spark.sql.autoBroadcastJoinThreshold` is low.  
4. **Skew Handling** – detect skew with `table.groupBy(key).count()`, then apply salting or `broadcastHashJoin`.

**Depth**  
```scala
val dfA = spark.read.parquet("s3://bucket/a")
val dfB = spark.read.parquet("s3://bucket/b")

// Option 1: broadcast small table
val joined = if (dfB.count() < 100e6) {
  dfA.join(broadcast(dfB), Seq("id"))
} else {
  dfA.join(dfB, Seq("id"), "inner")
}
```
Complexity: shuffle hash join is O(n log n) in memory; sort‑merge is O(n). Broadcast costs O(k) where k is size of small table. Skew mitigation adds extra partitioning overhead but keeps executor utilization high.

**Edge Cases**  
- **Skewed keys** → many partitions collapse to one executor, causing OOM.  
- **Non‑partitioned data** → shuffle cost skyrockets; consider `repartition` on key first.  
- **Null join keys** → results in missing rows; handle with `coalesce`.

**Optimize & Communicate**  
Explain that tuning `spark.sql.shuffle.partitions`, `spark.default.parallelism`, and enabling `broadcastJoinThreshold` are primary knobs. Show a small profiling snippet (`df.explain(true)`) to validate the chosen join strategy. Conclude by summarizing trade‑offs: broadcast saves shuffle but costs memory; shuffle hash is scalable but needs enough executors; sort‑merge works best when data is already sorted. This structured walk‑through demonstrates clear problem framing, methodical planning, and depth of knowledge—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
