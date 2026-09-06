---
qid: vq_063be31e3d__faang__local
question: What are the different file formats in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 632
total_tokens: 864
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:55:59-05:00'
sources: []
---

**Clarify**  
You’re asking which storage‑format options a Hive table can use when it writes data to HDFS (or S3). We’ll assume the question is about *file formats* Hive supports natively, not external connectors or serialization libraries.

**Approach**  
1. List the native “storage format” types Hive can declare in a `CREATE TABLE … STORED AS …`.  
2. Briefly describe each: file type, compression support, typical use case, and any caveats (e.g., query performance, schema evolution).  
3. Highlight how these formats interact with SerDes and the impact on ETL/analytics workloads.

**Depth**  

| Format | File Type | Compression | Use‑case | Notes |
|--------|-----------|-------------|----------|-------|
| **TextFile / LazySimpleSerDe** | delimited text (CSV, TSV) | Any HDFS compression | Simple ingestion, legacy data | High I/O cost; no schema enforcement. |
| **SequenceFile** | binary key/value pairs | LZO/SNAPPY/… | MapReduce‑friendly, small values | Requires custom SerDe for complex schemas. |
| **RCFile** | columnar with row groups | LZO/SNAPPY | Early Hive columnar option; better than Text but limited | Deprecated in favor of ORC/Parquet. |
| **ORC (Optimized Row Columnar)** | columnar binary | ZLIB, SNAPPY, LZ4, ZSTD | Modern analytics workloads, ACID support | Supports predicate pushdown, compression ratio 2–5× better than Parquet on Hive. |
| **Parquet** | columnar, open‑source | Snappy, GZIP, ZSTD | Interoperable with Spark/Presto; good for wide tables | Slightly slower row‑level access vs ORC. |
| **Avro** | binary record format | Snappy, Deflate, LZ4 | Schema evolution friendly; used in streaming pipelines | Requires Avro SerDe; not columnar but schema‑aware. |

Other options (e.g., *Kudu*, *HBase*) exist but are external tables or storage engines rather than file formats.

**Edge cases**  
- Mixing compression codecs inside the same table is disallowed; you must pick one codec per format.  
- ORC/Parquet require Hive 0.14+; older clusters may default to RCFile.  
- When using Avro, ensure the schema registry is reachable at query time.

**Optimize & communicate**  
For most analytical workloads on modern Hive (e.g., Hive‑LLAP or Tez), recommend **ORC** for OLAP tables and **Parquet** when cross‑platform compatibility is needed. If you need streaming ingestion with evolving schemas, use Avro. Mention that the choice can be tuned by measuring compression ratio vs query speed in a pilot before production rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
