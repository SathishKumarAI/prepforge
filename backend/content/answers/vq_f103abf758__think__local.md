---
qid: vq_f103abf758__think__local
question: Which classes are used by the Hive to Read and Write HDFS Files ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 650
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:39:09-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
   - Confirm we’re talking about Apache Hive on Hadoop.  
   - “Classes used by Hive to read/write HDFS files” refers to the Java classes that implement file I/O in Hive’s execution engine (not just generic `FileSystem`).  

**2️⃣ Mental model / framework**  
   - Hive’s storage layer is built on top of Hadoop’s `FileSystem`.  
   - For each supported file format Hive registers a *serde* and an *input/output format*.  
   - The core I/O classes are the ones that implement `InputFormat`/`OutputFormat` and their `RecordReader`/`RecordWriter`.  

**3️⃣ Step‑by‑step reasoning**  
   1. List common formats: Text, ORC, Parquet, Avro, SequenceFile, RCFile, etc.  
   2. For each format identify the concrete class that extends Hadoop’s API.  
      - `TextInputFormat` / `TextOutputFormat` (`org.apache.hadoop.mapred.TextInputFormat`)  
      - `OrcInputFormat` / `OrcOutputFormat` (`org.apache.hadoop.hive.ql.io.orc.OrcInputFormat`, `org.apache.hadoop.hive.ql.io.orc.OrcOutputFormat`)  
      - `ParquetInputFormat` / `ParquetOutputFormat` (`org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat`, `org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat`)  
      - `AvroContainerInputFormat` / `AvroContainerOutputFormat` (`org.apache.avro.mapred.AvroContainerInputFormat`, `org.apache.avro.mapreduce.AvroJob`)  
      - `SequenceFileInputFormat` / `SequenceFileOutputFormat` (Hadoop core).  
   3. Note that Hive also uses the generic `FileSystem` API for low‑level I/O (`FileSystem.open()`, `create()`), but the “read/write” classes are those above.

**4️⃣ Common traps to avoid**  
   - Mixing MapReduce vs YARN API packages (e.g., `org.apache.hadoop.mapreduce.*` vs `org.apache.hadoop.mapred.*`).  
   - Forgetting that Hive can use both old (`mapred`) and new (`mapreduce`) APIs depending on the version.  
   - Assuming a single “file I/O” class; instead, each format has its own pair.

**5️⃣ Sanity‑check & communication**  
   - Cross‑reference the Hive documentation (e.g., *Hive Storage Handlers*).  
   - Verify by looking at Hive’s `serde` registration in `SerDeUtils`.  
   - Summarize succinctly: “Hive uses Hadoop’s InputFormat/OutputFormat classes per file format; the key ones are Text, ORC, Parquet, Avro, SequenceFile, RCFile, each with its own concrete Java class.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
