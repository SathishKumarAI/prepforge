---
qid: vq_2fbffb8a47__faang__local
question: What are the various hive optimization techniques?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 565
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:04:47-05:00'
sources: []
---

**Clarify**  
The interviewer asks for *Hive* performance tuning techniques. I’d confirm that we’re talking about Hive on Hadoop (or EMR), not Spark‑SQL, and whether the goal is query latency or resource utilization.

**Approach**  
1. *Data layout & partitioning*  
2. *File format & compression*  
3. *Statistics gathering & cost‑based optimizer*  
4. *Execution engine tweaks*  
5. *Runtime configuration*

**Depth**

| Technique | What it does | Typical settings |
|-----------|--------------|------------------|
| **Partitioning** | Splits table into sub‑directories on high‑selectivity columns, reducing data scanned. | `PARTITIONED BY (date STRING)` |
| **Bucketing** | Further shuffles rows by hash of a column; helps joins/aggregations. | `CLUSTERED BY (user_id) INTO 256 BUCKETS` |
| **ORC/Parquet** | Columnar storage with predicate pushdown and built‑in compression. | `STORED AS ORC`, `SET hive.exec.compress.output=true` |
| **Snappy/Zstd compression** | Low CPU cost, high decompression speed. | `set parquet.compression=SNAPPY;` |
| **Statistics & Cost‑Based Optimizer (CBO)** | Enables Hive to choose better join orders and map‑reduce tasks. | `SET hive.cbo.enable=true; SET hive.stats.autogather=true;` |
| **MapReduce vs Tez/Spark** | Switch execution engine for faster DAGs. | `SET hive.execution.engine=tez;` |
| **Parallelism & task size** | Controls number of mappers/reducers and split size. | `set mapreduce.map.memory.mb=4096; set hive.exec.reducers.bytes.per.reducer=67108864;` |
| **Vectorized execution** | Processes batches in native code for speed. | `SET hive.vectorized.execution.enabled=true;` |

**Edge cases**  
* Too many partitions → overhead of task scheduling.  
* Improper bucketing columns cause uneven data skew.  
* Enabling CBO without accurate stats leads to poor plans.

**Optimize & Communicate**  
I’d iterate: start with partitioning on the most selective filters, then convert to ORC and enable vectorization. After each change, run `EXPLAIN` and `ANALYZE TABLE … COMPUTE STATISTICS;`. I would narrate that these steps reduce I/O, improve CPU locality, and let Hive’s optimizer pick optimal join orders—exactly the kind of structured reasoning FAANG interviewers reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
