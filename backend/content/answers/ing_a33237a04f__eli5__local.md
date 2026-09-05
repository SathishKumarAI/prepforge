---
qid: ing_a33237a04f__eli5__local
question: 'Explain: Schema Evolution — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 242
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:56:29-05:00'
sources: []
---

**Imagine a library that keeps adding new books every day.**  
The *catalog* (schema) lists the titles, authors, and genres—just like a database table tells you what columns exist. When a new book arrives, the catalog must be updated so patrons can find it.  

With **Change Data Capture (CDC)**, the library watches each arrival in real time: as soon as a book is shelved, a note (“new book added”) is written to a log. Other systems—like a recommendation engine or an inventory tracker—read this log and adjust their own catalogs immediately.

**Schema evolution** happens when the library decides it needs a new field, say “ISBN.” Instead of rewriting every existing record, CDC streams the change: each book’s entry gets an extra slot for ISBN. Systems that read the stream add that slot on the fly, keeping everyone in sync without downtime.

So, CDC is the real‑time “arrival notice,” and schema evolution is the library’s way of expanding its catalog smoothly while all services stay up to date.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
