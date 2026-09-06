---
qid: vq_7cbb8141a2__faang__local
question: What is the recordReader in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 403
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:18:48-05:00'
sources: []
---

**Clarify**  
The interview asks about *RecordReader* in Hadoop’s MapReduce framework. I’ll explain its purpose and role in data ingestion, assuming the candidate knows basic MapReduce concepts (splits, mappers).  

**Approach**  
1. Define RecordReader.  
2. Show where it fits between InputSplit and Mapper.  
3. Highlight key methods and how they work.  
4. Mention common implementations (TextInputFormat → LineRecordReader, KeyValueTextInputFormat, SequenceFileInputFormat, etc.).  

**Depth**  
A `RecordReader` converts raw data from an `InputSplit` into key/value pairs that the mapper consumes. It exposes two main methods:  
- `initialize(InputSplit split, TaskAttemptContext ctx)` – prepares the reader (opens streams, seeks to start).  
- `nextKeyValue()` – advances to the next record and returns a boolean.  
- `getCurrentKey()/getCurrentValue()` – expose the current pair.  
It also implements `close()`. The reader must handle compression codecs, splitting logic, and boundary conditions so that each mapper receives exactly the data assigned to its split.

**Edge Cases**  
* Split boundaries crossing records (e.g., a line spanning two splits).  
* Compressed files where splits are not byte‑aligned.  
* Malformed input causing `NullPointerException` or corrupted keys/values.  
Tests should verify that all records are read once, no data loss, and correct key/value types.

**Optimize & Communicate**  
Custom readers can improve performance by batching I/O, caching, or using memory‑mapped files. When explaining, emphasize the separation of concerns: `InputFormat` creates splits; `RecordReader` parses them; `Mapper` processes parsed records. This clear pipeline is why Hadoop scales to petabytes—each component can be tuned independently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
