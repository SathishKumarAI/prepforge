---
qid: vq_00fc0dfb3f__fp__local
question: where does the data of hive table gets stored?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 386
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:20:28-05:00'
sources: []
---

In Hive a *table* is merely a logical view over files that live somewhere in the Hadoop ecosystem.  
The problem it solves is “how can I query structured data with SQL while still using the cheap, fault‑tolerant storage of HDFS?” The solution is to decouple **metadata** (schema, partitions, statistics) from **data files**.

1. **Metastore as a catalog** – Hive keeps all structural information in a relational metastore (MySQL/PostgreSQL). When you create `CREATE TABLE t … LOCATION '/foo/bar'`, the metastore records that location and the column types.  
2. **HDFS as the storage layer** – The actual bytes are stored as files under `/foo/bar` (or its sub‑directories if the table is partitioned). Each partition becomes a sub‑directory named `col=value`.  
3. **File format choice** – Hive can write to text, Parquet, ORC, Avro, etc. The metastore stores the file format and compression codec; this lets the query engine (e.g., Tez, Spark) know how to read without touching the data itself.

The non‑obvious insight: *Hive does not “own” the files.* If you delete or move the HDFS directory outside Hive’s knowledge, the table becomes a dangling reference. Conversely, you can hand‑craft files in the right structure and Hive will immediately see them once you run `MSCK REPAIR TABLE`. This elasticity lets data engineers treat HDFS as a raw storage layer while Hive provides a schema‑on‑read abstraction that can evolve independently of the underlying files.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
