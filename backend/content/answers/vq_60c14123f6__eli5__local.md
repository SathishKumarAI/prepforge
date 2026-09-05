---
qid: vq_60c14123f6__eli5__local
question: How to read file from hdfs or other sources in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 268
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:13:10-05:00'
sources: []
---

Imagine Spark is a giant library that can read books from many different shelves—local paperbacks, cloud‑based e‑books, or even a distributed collection called HDFS (Hadoop Distributed File System). To bring a book into the library’s reading room, you simply point Spark to the shelf and tell it what kind of book it is.

In code, you use **SparkSession**. For example:

```scala
val df = spark.read.format("parquet")   // or "csv", "json", etc.
  .option("header","true")
  .load("hdfs://namenode:9000/user/data/file.parquet")
```

The `format` tells Spark the file’s language (Parquet, CSV…). The `load()` URL can be an HDFS path (`hdfs://…`), a local path, or a cloud URI (`s3a://…`, `wasb://…`). Spark then splits the file into many small “pages” that different workers read in parallel, just like librarians pulling out pages from multiple copies at once.

So, to read any file: choose the format, give the right path, and Spark handles distributing the work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
