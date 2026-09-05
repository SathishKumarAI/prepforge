---
qid: ing_5e366f9e53__eli5__local
question: 'Explain: Deletes — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 209
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:05:38-05:00'
sources: []
---

Imagine a library that keeps a running diary of every book that comes and goes.  
When a book is **deleted** (checked out forever or removed), the library writes a quick note to its diary: “Book #456 was taken away on 12‑Mar‑2024.” That note is the **Change Data Capture (CDC) delete event**—a lightweight record that says *this row no longer exists*.

In system design, CDC streams these notes from one database to another (or to a data lake). The receiving system reads each note and removes the same book number from its own catalog. This way, both systems stay in sync without having to rescan the whole library every time. It’s like updating a phone contact list by just copying the “deleted” flag instead of re‑downloading all contacts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
