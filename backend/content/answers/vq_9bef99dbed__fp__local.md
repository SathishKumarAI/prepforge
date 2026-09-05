---
qid: vq_9bef99dbed__fp__local
question: Default partition size in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 614
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:48:12-05:00'
sources: []
---

**Why Spark picks a “default” partition size**

When a DataFrame operation shuffles data, Spark must decide how many *tasks* to run in the map‑side and reduce‑side stages.  
The core problem is a **memory‑vs‑overhead trade‑off**:

1. **Memory per task** – each task holds its own hash table, spill buffers, etc. If we create too many tasks, the per‑task memory shrinks (executor / parallelism), increasing the chance of spills and GC pauses.
2. **Task overhead** – every task incurs a scheduling latency (~1–3 ms) and a small amount of JVM start‑up cost. Too few tasks underutilise CPU cores; too many tasks waste scheduler time.

Spark’s default `spark.sql.shuffle.partitions` (200 for Hive‑style shuffle, 400 for RDD shuffle in older versions) is derived from the typical **“ideal parallelism”**:

```
idealParallelism = #executors × #cores per executor
defaultPartitions ≈ idealParallelism / 4
```

The factor of 4 comes from empirical studies that show 1/4th of the cores can safely run map tasks while leaving enough for reduce tasks and other overhead.  

**Non‑obvious insight:**  
Because each partition is processed by a *single* task, the default number directly controls **per‑partition data size** (`datasetSize / defaultPartitions`). If you have a 10 TB dataset on an cluster with 2000 cores, the default partitions (≈200) give ~50 GB per map – far too large for most executors. That’s why tuning `shuffle.partitions` is critical: it aligns data locality with executor memory, preventing spill‑induced slowdowns that are often mistaken as network or disk issues.

In short, Spark’s “default” is a heuristic balancing memory safety and scheduling overhead, rooted in the optimization principle of *maximising parallelism without over‑fragmenting the workload*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
