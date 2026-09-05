---
qid: vq_1385c9d033__eli5__local
question: What format (JSON, Avro, Parquet)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 227
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:03:17-05:00'
sources: []
---

Think of data formats as different kinds of books you can write your story in.

* **JSON** is like a plain‑text novel: every chapter (record) lists all its details (fields) explicitly, so it’s easy to read and edit by hand but takes up more space and slows down searches.  
* **Avro** is a paperback that comes with a fixed table of contents (a schema). Every page knows exactly where each fact sits, making the book compact and fast for computers to unpack, but you can’t skip ahead without knowing the layout first.  
* **Parquet** is a hardcover encyclopedia: it stores columns together (columnar storage) so that if you only need one topic (field), you read just that part, saving time and disk space. It also keeps a schema for consistent reading.

Pick JSON when flexibility matters, Avro when you need strict structure and efficient serialization, and Parquet when you’re crunching huge datasets and want speed in reading specific columns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
