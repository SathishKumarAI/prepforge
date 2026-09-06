---
qid: vq_3407545e54__faang__local
question: what are the most common Input fileformats in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 530
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:05:19-05:00'
sources: []
---

**Clarify**  
The interviewer wants a quick rundown of the *most common* file formats that Hadoop jobs consume—think MapReduce/Spark inputs. I’ll assume we’re talking about batch ingestion pipelines (HDFS or S3) rather than streaming or real‑time sources.

**Approach**  
1. List the canonical text‑based formats.  
2. Add binary/columnar options that are widely used in production for efficiency.  
3. Mention any Hadoop‑specific wrappers (e.g., SequenceFile).  
4. Note where each shines (schema, compression, query speed).

**Depth**  

| Format | Typical use | Pros | Cons |
|--------|-------------|------|------|
| **Text / CSV** | Simple logs, TSVs | Human readable; easy to load with `TextInputFormat` | No schema; costly scans; bad for large joins |
| **JSON / Parquet‑like JSON** | Semi‑structured APIs | Flexible schema | Parsing overhead; not columnar |
| **SequenceFile** (key/value binary) | Hadoop internal logs, intermediate data | Efficient serialization; supports compression | Not human‑readable; limited to Java objects |
| **Avro** | Schema‑driven records, data exchange | Compact binary + optional JSON header; evolve schema | Requires Avro libraries; less efficient for columnar queries |
| **Parquet** | Analytical workloads (Spark/Impala) | Columnar storage, predicate pushdown, compression | Requires schema upfront; not great for write‑heavy pipelines |
| **ORC** | Hive/Presto analytics | Columnar with heavy optimizations (indexing, compression) | Similar trade‑offs to Parquet |

**Edge Cases**  
- Mixed or nested schemas: Avro or Parquet handle them better than CSV.  
- Very small files: SequenceFile or Avro can pack many records to avoid HDFS overhead.  
- Compression choices (`snappy`, `gzip`) affect read/write speeds.

**Optimize & Communicate**  
If the pipeline is analytics‑heavy, I’d push for Parquet/ORC and compress with Snappy; if ingestion speed matters more than query performance, plain CSV or Avro might be preferable. Highlight that choosing a format should align with downstream consumers (Hive, Spark SQL, Presto) and data lifecycle requirements.

*Word count: ~190*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
