---
qid: vq_150d74533d__faang__local
question: what is the difference between spark context and spark session?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 480
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:59:01-05:00'
sources: []
---

**Clarify**  
The interviewer asks: *“What’s the difference between a SparkContext and a SparkSession?”*  
Assumptions: we’re on Spark 3.x, using Scala/Python, and the focus is on API evolution rather than internal JVM details.

**Approach**  
1. Define each object and its lifecycle.  
2. Highlight their responsibilities (configuration, cluster connection).  
3. Explain how they map to older/newer APIs.  
4. Show practical implications for a data‑engineering workflow.

**Depth**  

| SparkContext | SparkSession |
|--------------|--------------|
| Core entry point until Spark 1.6. Handles **RDD** creation, configuration (`spark.master`, `spark.app.name`), and low‑level cluster communication. | Unified entry point since Spark 2.0. Combines a SparkContext with the Catalyst optimizer, SQL engine, DataFrame/Dataset APIs, Hive support, and streaming contexts. |
| Created once per JVM; exposes `sc.parallelize()`, `sc.textFile()`. | Created via `SparkSession.builder.appName(...).getOrCreate()`; internally creates/uses a SparkContext. |
| Does **not** provide SQL or DataFrame APIs directly (needs separate `SQLContext`/`HiveContext`). | Provides `spark.sql()`, `spark.read`, `spark.write`, and streaming helpers (`spark.streams`) in one object. |
| Legacy code may instantiate both a Context and an SQLContext; risk of multiple contexts per JVM. | Encourages **single** instance; hides complexity behind the session abstraction. |

**Edge Cases**  
- Mixing old RDD‑centric jobs with new DataFrame APIs requires careful context reuse.  
- In cluster modes, `SparkSession` automatically propagates configuration to executors; manual `SparkContext` may miss settings like Hive metastore URIs.

**Optimize & Communicate**  
Use a single `SparkSession` in modern pipelines: it simplifies code, guarantees one underlying `SparkContext`, and unlocks all optimizations. If legacy RDD code exists, wrap it inside the session’s context (`spark.sparkContext`). Emphasize that SparkSession is the *canonical* API for any new data‑engineering work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
