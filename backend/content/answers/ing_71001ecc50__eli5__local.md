---
qid: ing_71001ecc50__eli5__local
question: 'Explain: Supported Formats — Schemaregistry'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 272
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:35:41-05:00'
sources: []
---

Think of a **schema registry** like a library’s catalog that tells you exactly how to read each book (data format) before you start reading. In machine‑learning pipelines, the “books” are data files or messages—JSON, Avro, Protobuf, or plain text—that feed models.  

*Supported formats* are simply the kinds of books the registry knows about.  
- **Avro** is a compact binary book that comes with its own index (the schema) so you can instantly locate any chapter.  
- **Protobuf** is similar but more flexible, like a set‑of‑instructions manual that can be updated without breaking older readers.  
- **JSON** is the plain‑text version everyone knows, great for quick sharing but heavier to parse.  

When you publish data, you register its schema (the book’s table of contents). Later, any component—data loader, model trainer, or inference service—can fetch that schema from the registry and read the data correctly, no matter which format it came in. Thus “supported formats” are just the catalog’s list of trusted, machine‑friendly books that keep your ML system reading smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
