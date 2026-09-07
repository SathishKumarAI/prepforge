---
qid: vq_ec6ae4afe5__faang__local
question: how to join two larger tables in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 584
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:41:19-05:00'
sources: []
---

**Clarify**

> *“How do you efficiently join two large Spark tables?”*  
Assumptions:  
1. Tables are > 10 GB each (larger than executor memory).  
2. The join key is a single column, not highly skewed.  
3. We have a cluster with enough executors to parallelize the shuffle.

**Approach**

1. **Broadcast‑small‑table trick** – if one table < 200 MB, broadcast it.  
2. **Shuffle hash / sort‑merge join** – otherwise use Spark’s default shuffle join.  
3. **Partitioning** – co‑partition by the join key to reduce shuffle.  
4. **Avoid data skew** – apply `salting` or `skew hint`.  
5. **Persist intermediate results** when reusing.

**Depth**

```scala
val left  = spark.read.parquet("left")
val right = spark.read.parquet("right")

// Co‑partition by key if not already done
val leftPart  = left.repartition($"id")
val rightPart = right.repartition($"id")

// If one side is small enough, broadcast
if (right.count() < 200*1024*1024) {
  val joined = leftPart.join(broadcast(right), Seq("id"))
} else {
  // Standard shuffle join
  val joined = leftPart.join(rightPart, Seq("id"), "inner")
}
joined.write.parquet("joined_result")
```

- **Complexity**:  
  *Broadcast* – O(N) where N is the small table size.  
  *Shuffle* – O(M log M + N log N) with M,N being row counts; memory‑bounded by shuffle partitions.

- **Trade‑offs**: Broadcast saves shuffle but consumes executor RAM; shuffle uses disk/network.

**Edge Cases**

| Issue | Mitigation |
|-------|------------|
| Skewed keys | Use `spark.sql.shuffle.partitions`, `salting`, or `skewHint`. |
| Out‑of‑memory on executors | Increase memory, reduce partition count, or use `broadcast` if possible. |
| Data skew causing long tasks | Apply custom partitioner or `repartitionByRange`. |

**Optimize & Communicate**

- **Monitoring**: Inspect Spark UI for stage durations; check shuffle read/write metrics.  
- **Tuning**: Adjust `spark.sql.shuffle.partitions`, broadcast threshold (`broadcastTimeout`), and executor memory.  
- **Narration**: “I first evaluate table sizes to decide between a broadcast or shuffle join, then co‑partition by the key to minimize data movement. I’ll monitor for skew and adjust partitions accordingly.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
