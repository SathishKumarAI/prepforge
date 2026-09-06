---
qid: ing_dd64140e5e__fp__local
question: Does MongoDB use BSON or JSON? — JSON And BSON | MongoDB
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 373
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:50:11-05:00'
sources: []
---

**Why MongoDB needs a binary format**

A database must store and retrieve documents very fast, often in memory‑mapped files.  
Textual JSON, while human‑readable, is bulky (every key appears twice) and slow to parse: the parser has to read characters, build strings, then allocate objects.  
MongoDB’s core objective is *low latency* for CRUD operations, so it chose a binary representation that

1. **Reduces I/O** – keys are stored once as 32‑bit indexes into a shared string pool per document.
2. **Enables fast decoding** – each field type has a fixed header (type byte + length), allowing the engine to skip or read directly without interpreting characters.

This design is an instance of *serialization–deserialization* optimization: the format trades human readability for machine efficiency, analogous to how Protocol Buffers or Cap’n Proto work.

**The actual answer**

MongoDB internally uses **BSON (Binary JSON)**.  
When a client sends a JSON document (e.g., via the shell or drivers), it is parsed into BSON before being written to disk. BSON can encode additional types not present in standard JSON, such as dates, binary data, and sub‑documents with null values, which are essential for many MongoDB features.

**A non‑obvious insight**

Because BSON stores field names only once per document, the *overhead* grows **sublinearly** with the number of fields. A document with 10,000 identical keys uses roughly the same key‑storage cost as one with 1,000 keys—only the values differ. This property lets MongoDB handle very wide documents (e.g., logs) without a proportional increase in storage or CPU time for parsing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
