---
qid: vq_6ffd6e57bf__star__local
question: What is inputFormat in hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 344
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:03:55-05:00'
sources: []
---

**Situation** – In my last role I was tasked with migrating a legacy batch pipeline from a flat‑file system into HDFS for a quarterly financial reporting job that processed 12 TB of transaction data nightly. The original code used a simple line‑by‑line reader, but the new Hadoop MapReduce job needed to handle mixed record types and custom delimiters.

**Task** – I had to design an InputFormat that could split the files correctly across reducers, preserve record boundaries, and expose each transaction as a key/value pair for downstream processing, all while keeping shuffle traffic minimal.

**Action** – I started by extending `FileInputFormat` and implementing a custom `RecordReader`. The reader used a `LineRecordReader` under the hood but added logic to skip header lines and detect the start of multi‑line records. For splitting, I leveraged `FixedLengthInputFormat` as a base and overrode `getSplits()` to respect our 128 MB block size, ensuring no split cut through a record. I also registered the format in `job.setInputFormatClass(MyCustomInputFormat.class)` and tuned `mapreduce.input.fileinputformat.split.minsize` for optimal parallelism.

**Result** – The new InputFormat reduced map‑stage CPU usage by 35 % and eliminated data loss from malformed splits, bringing the nightly job runtime down from 4 hours to 2.5 hours. I learned that a well‑designed InputFormat can dramatically improve reliability and performance in Hadoop workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
