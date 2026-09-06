---
qid: vq_512d334e6f__faang__local
question: what is Bucketed tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 487
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:10:14-05:00'
sources: []
---

**Clarify**  
> *What are bucketed tables and why would a data‑engineering team use them?*  
Assumptions: We’re talking about Hive/Databricks‑style partitioning on large analytics datasets; the interviewer wants to hear how bucketing improves join/shuffle performance, storage layout, and query planning.

**Approach**  
1. Define bucketed tables.  
2. Explain hashing & fixed bucket count.  
3. Contrast with plain partitions.  
4. Discuss use‑cases (joins, sampling, shuffle reduction).  

**Depth**  
Bucketed tables store rows in a deterministic number of *buckets* per table/partition, created by hashing a chosen column(s). Each row is written to one of the `N` buckets; files are laid out as `bucket_0000.snappy.parquet`, etc.  
- **Join locality:** When two tables share the same bucketed columns and bucket count, Spark/Hive can skip shuffling during joins—data in the same bucket already aligns on disk.  
- **Data skew mitigation:** Hashing distributes rows evenly across buckets, reducing hotspot partitions that cause slow tasks.  
- **Sampling & analytics:** Since each bucket contains a random subset of values, you can sample by reading a subset of bucket files without scanning the whole table.  
Complexity: `O(1)` bucket lookup; shuffle cost drops from `O(n log n)` to zero for aligned joins.

**Edge Cases**  
- **Different bucket counts:** If tables use different numbers of buckets, Spark must still shuffle.  
- **Changing hash columns:** Requires full rewrite of the table.  
- **Very small tables:** Bucketing overhead outweighs benefits; better to keep unbucketed.  

**Optimize & Communicate**  
Explain that bucketing is a *secondary* optimization after partitioning—use partitions for coarse filtering, buckets for fine‑grained join locality. Highlight that in Databricks, `CLUSTERED BY … INTO N BUCKETS` automatically generates the bucket files and updates metadata so the optimizer can push down filters. Conclude by noting that careful bucket design (column choice, bucket count) can cut query times by 3–10× on large analytical workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
