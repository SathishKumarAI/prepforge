---
qid: ing_b57908bfcc__faang__local
question: 'Explain: When PySpark starts to feel slow — PySpark for Beginners: Building
  Intermediate-Level Skills'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 480
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:45:25-05:00'
sources: []
---

**Clarify**  
The interview asks why a PySpark job might slow down and what you can do about it. I’ll assume we’re running on a typical YARN cluster, dealing with large tabular data, and the slowdown is noticeable after several stages.

**Approach**  
1. Identify bottlenecks (CPU, memory, disk, network).  
2. Look at stage/task metrics in Spark UI.  
3. Consider data skew, shuffle, serialization, and resource allocation.  
4. Propose tuning knobs: partitioning, caching, broadcast joins, executor settings.

**Depth**  
- **Shuffle overhead**: A wide transformation (groupByKey, join) causes many map‑reduce tasks; use `repartition` with a proper key or `salting`.  
- **Data skew**: One reducer gets >80 % of data → slow. Detect via partition size histogram; mitigate by adding random prefix to keys (`salting`) and aggregating locally before global reduce.  
- **Serialization**: Kryo outperforms Java/Parquet for complex objects—enable `spark.serializer=org.apache.spark.serializer.KryoSerializer`.  
- **Caching**: Persist intermediate RDDs/DataFrames if reused; choose `MEMORY_AND_DISK` to avoid recomputation.  
- **Executor memory & cores**: Too many cores per executor → GC thrashing; balance with `--executor-memory`, `--executor-cores`.  
- **Broadcast joins**: For small tables, use `broadcast()` to avoid shuffle.

Complexity: Shuffles are O(n log n); reducing partitions or using broadcast reduces it to O(n).  

**Edge Cases**  
- Skew only on rare keys → broadcasting may waste memory.  
- Persisting large DataFrames can spill to disk, hurting throughput.  
- Over‑tuning executor count may fragment resources and increase overhead.

**Optimize & Communicate**  
Explain the trade‑off between more partitions (parallelism) vs shuffle cost; illustrate with a simple metrics table from Spark UI. Conclude by recommending an iterative tuning loop: profile → hypothesis → adjust → reprofile, ensuring each change is measurable. This shows structured thinking and deep grasp of PySpark internals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
