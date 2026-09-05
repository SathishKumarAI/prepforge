---
qid: ing_ce3210a0a7__eli5__local
question: 'Explain: Embedded connectors — Database Streaming with ksqlDB | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 212
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:02:03-05:00'
sources: []
---

Imagine you have a giant, ever‑growing library where new books (data) arrive every second.  
You want to read the latest chapters in real time without first copying the whole book into your own notebook.

**Embedded connectors** are like tiny librarians that sit inside your database and instantly hand out fresh pages as they’re written.  
They listen to a **database stream**—a continuous line of changes (INSERT, UPDATE, DELETE) coming from a database such as PostgreSQL or MySQL—and push those updates straight into a streaming platform.

**ksqlDB** is the “reading desk” that lets you write simple queries (“show me every new order”) and automatically keeps the result set up‑to‑date.  
So, instead of pulling data in batches, the connector streams changes directly to ksqlDB, which then processes them on the fly—just like a librarian handing you each new chapter as it arrives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
