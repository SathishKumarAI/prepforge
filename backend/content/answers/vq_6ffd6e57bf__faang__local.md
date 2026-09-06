---
qid: vq_6ffd6e57bf__faang__local
question: What is inputFormat in hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 446
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:16:01-05:00'
sources: []
---

**Clarify**  
*Problem:* Explain Hadoop’s `InputFormat`.  
*Assumptions:* We’re dealing with MapReduce/HDFS context; the audience knows Java basics but not internals.

**Approach**  
1. Define role of `InputFormat` in job configuration.  
2. Show its two core responsibilities: split creation & record reading.  
3. Illustrate with common implementations (Text, SequenceFile).  
4. Mention interaction with `RecordReader`.  
5. Touch on custom use‑cases and performance implications.

**Depth**  
`InputFormat<TK,TV>` is a Hadoop abstraction that determines how an input file set is divided into *splits* and how each split is turned into key/value pairs for the mapper.  
- **createSplits(JobContext):** partitions data (often by block size) into `InputSplit`s, enabling parallelism.  
- **getRecordReader(InputSplit, TaskAttemptContext):** returns a `RecordReader` that streams records from the split.  
The default `TextInputFormat` splits on HDFS blocks and reads lines (`LongWritable`, `Text`). `SequenceFileInputFormat` handles binary key/value pairs. Custom formats let you parse logs, Avro, Parquet, etc., optimizing I/O by skipping irrelevant data.

**Edge Cases**  
- Splits that cut through a record (e.g., very long log entries) need special handling (`LineRecordReader`).  
- Non‑splittable files (e.g., compressed archives) force single‑split jobs.  
- Incorrect split size can cause imbalance or excessive overhead.

**Optimize & Communicate**  
To improve performance: choose a splittable format, tune `mapreduce.input.fileinputformat.split.minsize`, and use block‑aligned compression (bzip2, LZO). Explain trade‑offs: smaller splits increase parallelism but add scheduling overhead; larger splits reduce overhead but risk skew. Conclude by highlighting how mastering `InputFormat` lets you tailor I/O for scale and latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
