---
qid: vq_3407545e54__fp__local
question: what are the most common Input fileformats in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 443
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:30:32-05:00'
sources: []
---

**Why Hadoop needs specific input formats**

Hadoop’s core problem is *parallel I/O on a distributed file system*.  
To expose data as a stream of key/value pairs, the framework must **(1)** split files deterministically across nodes, **(2)** read them cheaply, and **(3)** allow schema evolution without rewriting all records.  
These constraints drive the choice of formats.

| Format | Why it works |
|--------|--------------|
| **Text (CSV/TSV/JSON)** | Simple line‑by‑line split; no overhead but poor compression and parsing cost. |
| **SequenceFile** | Binary key/value pairs with optional compression, good for small records. |
| **Avro** | Self‑describing schema, supports evolution, efficient binary serialization, and native support in MapReduce. |
| **Parquet / ORC (columnar)** | Store columns separately; enable predicate pushdown, column pruning, and higher compression ratios—critical when only a subset of fields is needed. |
| **RCFile** | Older column‑file format; still used for legacy workloads. |

*Non‑obvious insight:*  
Columnar formats (Parquet/ORC) are not just “smaller”; they fundamentally change the *information‑theoretic* cost of a query. By aligning storage with the actual read pattern, you reduce entropy per byte that the reducer must process—effectively turning I/O into a form of **lossless compression tailored to access patterns**. This makes Hadoop queries behave more like analytic engines than batch file readers.

In practice, most Hadoop pipelines use **Avro for ingestion and Parquet/ORC for analytics**, with Text or JSON as a fallback when schema flexibility outweighs performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
