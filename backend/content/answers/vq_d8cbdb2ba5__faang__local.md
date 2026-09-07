---
qid: vq_d8cbdb2ba5__faang__local
question: what are the different fileformats that can be used in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 598
total_tokens: 834
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:37:40-05:00'
sources: []
---

**Clarify**  
The interviewer wants a quick inventory of file formats commonly consumed or produced by Hadoop workloads (MapReduce, Spark, Hive, Flink). Assume we’re focusing on *storage* layer formats—those that can be read/written in HDFS or object stores and that support schema evolution, compression, and efficient columnar access.

**Approach**  
1. List the major families: text‑based, binary, columnar, and specialized.  
2. For each, note typical use cases, pros/cons, and key features (compression, schema).  
3. Mention any emerging formats that might appear on a FAANG stack.

**Depth**  

| Format | Type | Key Features | Typical Use |
|--------|------|--------------|-------------|
| **Text / CSV** | Line‑delimited text | Human‑readable, simple parsing | Quick prototyping, logs |
| **SequenceFile** | Binary key/value pairs | Splittable, supports compression (SNAPPY/BZIP2) | Efficient mapreduce shuffle |
| **Avro** | Compact binary with JSON schema | Schema evolution, serialization/deserialization APIs, compression | Data interchange between services |
| **Parquet** | Columnar storage | Predicate pushdown, efficient column pruning, compression (GZIP/SNAPPY/ORC) | Hive/Hadoop analytics, Spark SQL |
| **ORC (Optimized Row Columnar)** | Columnar with ORC‑specific encoding | Built‑in bloom filters, index for fast predicate evaluation | Hive OLAP workloads |
| **RCFile** | Record‑Column File | Early columnar format, less efficient than Parquet/ORC | Legacy Hive jobs |
| **Avro Container Files (AVRO)** | Similar to SequenceFile but with schema | Good for streaming data pipelines |
| **Kudu** (not HDFS‑only) | Hybrid transactional store | Row and column access, ACID ops | Real‑time analytics |

**Edge Cases**  
- Splittability: Avro/SequenceFile are splittable; Parquet/ORC need special readers.  
- Schema evolution: Avro & Parquet support it natively; CSV does not.  
- Compression trade‑offs: SNAPPY is fast but less compressive than GZIP.

**Optimize & Communicate**  
Explain that the choice depends on workload: *text* for logs, *SequenceFile* for mapreduce shuffle, *Avro* for schema‑aware pipelines, *Parquet/ORC* for OLAP. Mention that many modern stacks layer Hive/Hadoop with Spark and use Parquet or ORC as default columnar storage, while Avro remains popular in data lakes where schema evolution matters. Conclude by noting that understanding each format’s trade‑offs is key to designing efficient ETL pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
