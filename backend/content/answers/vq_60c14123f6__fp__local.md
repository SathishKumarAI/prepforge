---
qid: vq_60c14123f6__fp__local
question: How to read file from hdfs or other sources in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 397
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:37:27-05:00'
sources: []
---

**Reading data into Spark from HDFS or other sources**

Spark’s `DataFrameReader` is the first‑principles interface for ingestion.  
It exposes a *format* (e.g., `"parquet"`, `"csv"`, `"json"`), an optional *schema*, and a *path* that can be any URI accepted by Hadoop (`hdfs://…`, `s3a://…`, local, or even a list of paths). Internally Spark translates this into a logical plan:  
1. **Resolve the path** via the Hadoop `FileSystem` API to obtain a set of blocks.  
2. **Create a partitioned RDD** where each task reads one block (or a whole file for small files).  
3. **Apply the format’s source provider**, which parses bytes into rows, optionally inferring schema if none is supplied.

Why this works: Spark’s lazy evaluation defers I/O until an action, so only necessary partitions are read; partitioning aligns with HDFS block boundaries, maximizing parallelism and minimizing network hops.  

**Non‑obvious tip:**  
When reading *small files* (e.g., many 1 KB logs), use `wholeTextFiles` or set `spark.sql.files.maxPartitionBytes` to a higher value. This coalesces many small files into fewer partitions, reducing the task overhead that otherwise dominates performance.  

Thus, by combining Hadoop’s distributed file resolution with Spark’s format‑aware source providers and careful partition tuning, you obtain an efficient, declarative pipeline from HDFS or any supported storage system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
