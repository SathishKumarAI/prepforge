---
qid: vq_f103abf758__aws__local
question: Which classes are used by the Hive to Read and Write HDFS Files ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 610
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:21:50-05:00'
sources: []
---

**Situation / Task**  
I was leading the migration of our analytics pipeline from a legacy MapReduce batch job to Apache Hive on EMR in 2022. The goal was to reduce query latency by 40 % while keeping cost under $10K/month. A critical part of that effort was understanding how Hive reads and writes HDFS files so we could tune compression and partitioning.

**Action**  
I dug into the Hive codebase, focusing on the classes that interface with Hadoop’s `InputFormat`/`OutputFormat`. The key players are:

| Purpose | Class | Notes |
|---------|-------|-------|
| **Read data** | `org.apache.hadoop.hive.ql.io.HiveInputFormat` (implements `InputFormat`) | Delegates to the underlying Hadoop format (`TextInputFormat`, `SequenceFileInputFormat`, etc.) based on file type and table definition. |
| **Record reader** | `org.apache.hadoop.hive.ql.io.HiveRecordReader` | Parses each row into a `Writable` array, handling serialization (RCFile, ORC, Parquet). |
| **Write data** | `org.apache.hadoop.hive.ql.io.HiveOutputFormat` (implements `OutputFormat`) | Routes to the correct file format writer (`TextOutputFormat`, `SequenceFileOutputFormat`, etc.). |
| **Specific writers** | `OrcOutputFormat`, `ParquetOutputFormat`, `RCFileOutputFormat` | Provide schema‑aware, columnar storage. |

I mapped each Hive table’s SerDe and storage descriptor to the corresponding Hadoop format, then rewrote the ETL jobs to write Parquet/ORC with Snappy compression. This eliminated 30 % of the data volume and cut query time from 15 min to 3 min.

**Result**  
- **Customer Obsession:** Faster insights for product managers; latency dropped from 15 min to 3 min (80 % improvement).  
- **Ownership / Deliver Results:** Reduced storage cost by 25 % ($2.5K/month) and CPU usage by 40 %.  
- **Dive Deep & Learn:** Identified that mis‑configured SerDes were causing 10 % of job failures; after fixing, job success rate hit 99.8%.

**Bar‑raiser Takeaway**  
I demonstrated ownership (took full responsibility for the migration), deep technical knowledge (dissected Hive’s I/O classes), and quantified impact (latency & cost). I also learned that proper documentation of SerDe mappings prevents costly runtime errors—an insight we now enforce in our code review checklist.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
