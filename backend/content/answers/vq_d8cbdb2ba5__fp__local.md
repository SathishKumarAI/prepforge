---
qid: vq_d8cbdb2ba5__fp__local
question: what are the different fileformats that can be used in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 438
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:59:10-05:00'
sources: []
---

**Why Hadoop needs many formats**

Hadoop’s core problem is *scalable, fault‑tolerant storage* for data that will later be processed by MapReduce or Spark. The format must (1) support random access to large files, (2) allow splitting across nodes without corrupting records, and (3) expose a schema or at least a predictable delimiter so downstream jobs can parse quickly.  

**The canonical formats**

| Format | Fundamental idea | Why it works |
|--------|------------------|--------------|
| **Text / CSV** | Line‑delimited UTF‑8 text | Easiest to split; no metadata overhead, but no schema or compression. |
| **SequenceFile** | Key–value pairs stored in binary blocks with optional compression | Enables efficient key/value shuffling and compaction. |
| **Avro** | Self‑describing JSON schema + binary encoding | Combines schema evolution (dynamic fields) with fast binary I/O; supports compression codecs. |
| **Parquet** | Columnar storage with nested structures, column statistics, predicate push‑down | Optimizes read for analytics workloads by skipping irrelevant columns and rows. |
| **ORC** | Similar to Parquet but tuned for Hive: lightweight row groups, Bloom filters, and Zlib/ LZ4 compression | Provides higher compression ratios and faster scans in Hive queries. |
| **RCFile** (deprecated) | Row‑column hybrid; each column stored separately per block | Early attempt at columnar reads before Parquet/ORC became dominant. |

**Non‑obvious insight**

All “good” Hadoop formats expose *block boundaries that align with logical records*. This is a direct consequence of the underlying HDFS replication and split‑based MapReduce model: if a record straddles a block, a mapper cannot safely process it without inter‑node communication. Thus even a simple binary format must embed length prefixes or delimiters per record to guarantee deterministic splits—something often overlooked when choosing a storage schema.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
