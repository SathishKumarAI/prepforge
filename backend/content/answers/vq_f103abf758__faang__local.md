---
qid: vq_f103abf758__faang__local
question: Which classes are used by the Hive to Read and Write HDFS Files ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 573
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:41:57-05:00'
sources: []
---

**Clarify**  
You’re asking which Java classes Hive uses internally to read from and write to HDFS. I’ll assume we’re talking about the classic MapReduce‑based execution engine (not Tez or Spark) and that “read/write” refers to the low‑level file I/O performed by Hive’s `InputFormat`/`OutputFormat`.

**Approach**  
1. Identify the Hive `InputFormat`/`OutputFormat` implementations.  
2. Map those to the concrete Hadoop classes they instantiate for HDFS access.  
3. Summarize the key points (file streams, block handling, compression).

**Depth**  
| Operation | Hive class | Underlying Hadoop class | Role |
|-----------|------------|------------------------|------|
| **Reading** | `HiveInputFormat` (extends `FileInputFormat`) | `org.apache.hadoop.mapred.FileSplit`, `FSDataInputStream` via `FileSystem.open()` | Provides splits; each split opens an `FSDataInputStream`. |
| | `TextInputFormat` / `SequenceFileInputFormat` | `org.apache.hadoop.mapreduce.lib.input.TextInputFormat` etc. | Parses line/record boundaries after the stream is opened. |
| **Writing** | `HiveOutputFormat` (extends `FileOutputFormat`) | `FSDataOutputStream` via `FileSystem.create()` | Handles file creation and block buffering. |
| | `TextOutputFormat`, `SequenceFileOutputFormat` | Same underlying streams, plus `org.apache.hadoop.io.SequenceFile.Writer` for seq files. | Formats the output data before writing to HDFS. |

All of these use Hadoop’s `FileSystem` API (e.g., `FileSystem.get(conf)`), which in turn delegates to `DistributedFileSystem` when talking to HDFS. Compression codecs (`org.apache.hadoop.io.compress.CompressionCodec`) wrap the streams.

**Edge Cases**  
* Split size mismatches → `InputSplit` may span block boundaries; Hive handles this with `FSDataInputStream.seek()`.  
* File corruption → Hadoop’s retry logic kicks in, but Hive will fail if the split is unreadable.  
* Unsupported codecs or formats → throws `IOException` during initialization.

**Optimize & Communicate**  
Explain that Hive relies on Hadoop’s well‑tested I/O stack; any performance tuning (block size, compression) should be done at the HDFS or FileSystem level rather than altering Hive classes. Highlight that for modern workloads one might switch to Tez/Spark which use `FileInputFormat`/`OutputFormat` but still go through the same Hadoop streams under the hood.

---  
*Word count: ~210*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
