---
qid: vq_7cbb8141a2__star__local
question: What is the recordReader in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 345
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:06:22-05:00'
sources: []
---

**Situation:**  
During my second year at XYZ Corp, we were migrating our nightly log aggregation pipeline from a custom Java solution to Hadoop MapReduce. The incoming logs were in a mixed format: some lines were plain text, others were gzipped JSON blobs, and the batch size was around 12 GB per day.

**Task:**  
I had to design a robust input format that could correctly split the data across reducers while preserving record boundaries, ensuring we didn’t lose or duplicate log entries during processing.

**Action:**  
I implemented a custom `InputFormat` extending `FileInputFormat`. Inside it, I overrode `createRecordReader()` to return an instance of a new `LogRecordReader`. In that class, I used Hadoop’s `LineRecordReader` as the base but added logic to detect gzipped blocks: when encountering a gzip header, the reader opened a `GzipCodec`, wrapped its stream in a `BufferedInputStream`, and parsed JSON lines using Jackson. I also calculated split offsets carefully so each reducer started at the first complete record after its split boundary, avoiding partial log entries.

**Result:**  
The new pipeline processed 12 GB of mixed logs in under 15 minutes on a 10‑node cluster, a 40% speedup over the legacy system, and maintained 100% data integrity. I learned how `RecordReader` is the linchpin between raw HDFS blocks and structured key/value pairs, and that careful handling of split boundaries can prevent subtle bugs in large-scale data jobs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
