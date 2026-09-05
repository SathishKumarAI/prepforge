---
qid: vq_063be31e3d__fp__local
question: What are the different file formats in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 458
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:21:14-05:00'
sources: []
---

In Hive the *file format* is not a cosmetic choice; it is the interface between logical columns and physical bytes on HDFS.  
The fundamental problem is that a query planner must be able to skip irrelevant data (predicate push‑down) while still supporting efficient columnar access for analytics. Consequently, every supported format encodes two orthogonal features:

| Format | Storage layout | Why it works |
|--------|----------------|--------------|
| **TextFile** | Plain text, delimited rows | Simplicity; any tool can read it, but no compression or schema enforcement. |
| **SequenceFile** | Binary key/value pairs (Java serialization) | Enables map‑reduce shuffle and efficient block‑compression; each record is a single key/value pair. |
| **RCFile** *(Row‑Column)* | Block of rows grouped by columns | Allows column pruning at the block level, but row order is lost, hurting range scans. |
| **Parquet** | Columnar with nested schema (Apache Arrow) | Provides true column pruning, dictionary and run‑length encoding; supports complex types natively. |
| **ORC** *(Optimized Row Columnar)* | Compact columnar layout + Bloom filter per stripe | Adds lightweight row indexes and predicate push‑down, giving faster scans than Parquet on Hive workloads. |
| **Avro** | Self‑describing binary with schema registry | Good for ETL pipelines; supports schema evolution but is not as compact as ORC/Parquet. |

### Non‑obvious insight  
The choice between Parquet and ORC often boils down to *index granularity*. ORC’s “stripe” index can skip 10 MB of data with a single Bloom filter lookup, whereas Parquet requires scanning the entire row group (typically 128 MB). Thus, for workloads dominated by point‑lookups or heavy filtering on a few columns, ORC wins even though both are columnar. This subtlety is usually missed when people pick a format purely based on compression ratios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
