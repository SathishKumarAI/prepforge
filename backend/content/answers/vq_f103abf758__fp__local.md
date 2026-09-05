---
qid: vq_f103abf758__fp__local
question: Which classes are used by the Hive to Read and Write HDFS Files ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 470
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:03:13-05:00'
sources: []
---

In Hive, the *physical* read/write of HDFS files is governed by Hadoop’s **InputFormat**/OutputFormat machinery, not by a single “Hive‑specific” reader.  
When a query is compiled, Hive creates a `TableScanOperator` that wraps an `InputFormat` chosen from the table’s metadata (`STORED AS …`). The same mechanism applies for writes: `FileSinkOperator` supplies an `OutputFormat`.  

**Key classes**

| Operation | Default class (for text‑based files) |
|-----------|-------------------------------------|
| Read  | `org.apache.hadoop.mapred.TextInputFormat` (or the newer `org.apache.hadoop.mapreduce.lib.input.TextInputFormat`) |
| Write | `org.apache.hadoop.mapred.FileOutputFormat` (often `org.apache.hadoop.mapred.TextOutputFormat`) |

If the table is stored in Parquet, Avro, ORC or RCFile, Hive substitutes the corresponding Hadoop formats (`ParquetInputFormat`, `AvroContainerInputFormat`, `OrcInputFormat`, `RCFileInputFormat`).  
The *Hive* layer adds a thin wrapper that supplies column projections and predicate push‑downs via the `RecordReader`/`OutputCollector`.  

**Why this design?**  
Hadoop’s Input/Output formats are pure I/O abstractions; by delegating to them, Hive keeps its query engine agnostic of storage layout. This separation is a classic example of *information‑theoretic* modularity: the data layer encodes the file format (entropy), while Hive’s logical plan decodes it into columnar rows.

**Non‑obvious insight:**  
Because each `InputFormat` implements its own `RecordReader`, Hive can transparently support *schema evolution*. When a Parquet table adds a new column, the same `ParquetInputFormat` reads old files without modification—Hive merely maps missing fields to `NULL`. This implicit schema‑flexibility is why Hive’s “stored as” clause feels like a simple annotation rather than a rigid format choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
