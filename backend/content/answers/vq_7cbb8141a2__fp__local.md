---
qid: vq_7cbb8141a2__fp__local
question: What is the recordReader in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 382
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:42:45-05:00'
sources: []
---

**RecordReader – the bridge between raw bytes and logical records**

In a MapReduce job, *input splits* are just byte ranges of a file system object. A split alone cannot be processed meaningfully; the framework must translate those bytes into the key–value pairs that mappers consume. The **RecordReader** is the component that performs this translation.

1. **Fundamental problem** – Hadoop stores data as streams of bytes, but map tasks need *structured* inputs (e.g., lines, JSON objects). The RecordReader consumes a split, tracks its position, and parses it into key–value pairs on‑the‑fly, avoiding materializing the entire file in memory.

2. **Why it must be stateful** – Splits can start mid‑record (especially for compressed formats). A RecordReader keeps context between calls to `nextKeyValue()`, ensuring that records are neither duplicated nor lost.

3. **Connection to optimization** – By yielding one record at a time, the RecordReader allows back‑pressure: mappers read only as fast as they can process data, keeping I/O and CPU balanced. It also enables *lazy* decompression (e.g., reading a block of a compressed file when needed).

4. **Deep insight** – The RecordReader’s abstraction is essentially an iterator over a *probabilistic* stream: it must decide where one record ends and the next begins, often based on heuristics (newline detection, tokenization). This aligns with information theory—compressing the stream while preserving the underlying entropy of records.

In short, the RecordReader converts arbitrary byte splits into semantically meaningful key–value pairs, handling boundary conditions, compression, and back‑pressure—all while keeping memory usage minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
