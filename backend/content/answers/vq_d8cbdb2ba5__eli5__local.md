---
qid: vq_d8cbdb2ba5__eli5__local
question: what are the different fileformats that can be used in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 385
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:30:17-05:00'
sources: []
---

Think of Hadoop as a giant library that stores books (data) in many different kinds of boxes. Each box type is a **file format**—the way the data is packed and labeled so computers can read it quickly.

| Box (format) | What it looks like | Why you’d use it |
|--------------|-------------------|------------------|
| **Text / CSV** | Plain paper pages, comma‑separated. | Simple, human‑readable, good for small tables or logs. |
| **SequenceFile** | Two columns: key + value, both binary. | Fast, low‑level storage for Hadoop’s own jobs. |
| **Avro** | Compact binary with a built‑in schema (like a card that says “this is a person”). | Great when you need to evolve the data shape over time. |
| **Parquet** | Column‑oriented, compressed blocks. | Efficient for analytical queries that read only some columns. |
| **ORC** | Similar to Parquet but with extra compression tricks. | Best for very large Hive tables on AWS EMR. |
| **JSON** | Textual “object” format (key/value pairs). | Flexible and easy to work with in scripts, though heavier to store. |

All of these let Hadoop’s MapReduce or Spark jobs find the right box, open it, and use the data without having to sort through a messy pile of unstructured files. The choice is like picking the best shelf for your books: quick to fetch, easy to read, and fitting the size of the collection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
