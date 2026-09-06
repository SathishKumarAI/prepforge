---
qid: vq_d8cbdb2ba5__think__local
question: what are the different fileformats that can be used in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 566
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:29:43-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
* Assume the question refers to *Hadoop Distributed File System (HDFS)* and common formats for storing data in a MapReduce/ETL context.  
* Exclude non‑Hadoop systems (e.g., S3 only) but note that HDFS can read any format supported by Hadoop libraries.

**2️⃣ Adopt a “catalogue” mental model**  
Think of three layers:  
- **Text‑based, line‑oriented** → easy to debug.  
- **Binary columnar/row‑oriented** → compact, fast queries.  
- **Hybrid / semi‑structured** → schema on read.

**3️⃣ Reason through the list step‑by‑step**  

| Category | Format | Typical use & pros | Common libraries |
|----------|--------|--------------------|------------------|
| Text | `Text`, `CSV` | Human readable, simple to write. | Hadoop TextInputFormat / OpenCSV |
| Sequence | `SequenceFile` | Binary key/value pairs; efficient for MapReduce shuffle. | `org.apache.hadoop.io.SequenceFile` |
| Binary columnar | **Parquet** | Compression + predicate pushdown. | Parquet‑hadoop |
|  | **ORC** | Optimised for Hive, good compression & predicate pushdown. | ORC‑hadoop |
| Semi‑structured | **Avro** | Schema evolution, compact binary. | Avro‑hadoop |
|  | **JSON** (plain text) | Flexible schema, easy to ingest. | Jackson / Spark JSON reader |
| Binary row‑oriented | **RCFile** (legacy) | Row‑major storage; older Hadoop versions. | RCFileInputFormat |
| Image/Video | `BinaryFiles` (generic) | Store any binary blob. | BinaryFileInputFormat |

**4️⃣ Common traps to avoid**  
- Confusing *file format* with *serialization format*: e.g., Avro can be stored in a SequenceFile.  
- Assuming Parquet is the only columnar option; ORC and RCFile also exist.  
- Overlooking that Hadoop can read any file type if you supply an appropriate `InputFormat`.

**5️⃣ Sanity‑check & communicate**  
*Summarise aloud*: “In Hadoop we typically use text/CSV for simple logs, SequenceFiles for efficient MapReduce shuffles, Avro for schema evolution, and columnar formats like Parquet or ORC for analytical workloads. JSON is handy for semi‑structured data, while RCFile is legacy.”  

This structured approach lets you recall the main families quickly in interviews or documentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
