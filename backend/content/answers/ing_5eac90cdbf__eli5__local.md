---
qid: ing_5eac90cdbf__eli5__local
question: 'Explain: Consistency — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 233
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:06:26-05:00'
sources: []
---

**Consistency in Cloud Spanner – a “single‑source of truth” story**

Imagine a library that keeps its catalog in one giant, magical book. Every time someone checks out or returns a book, the librarian writes the change on that book *immediately* and everyone else sees the updated page right away. No one can read an old version while another is writing; the book’s pages are always up‑to‑date for all readers.

In Cloud Spanner this “magical book” is its database.  
- **Consistency** means every client (app, user, or service) sees the same data at the same time, just like everyone in the library looks at the same page of the catalog.  
- When a transaction writes new data, Spanner uses distributed locks and a global clock so that all other clients either see the old value *or* the new one—never something in between.  

So, consistency guarantees that your app never reads half‑updated information; it always sees a clean, agreed‑upon snapshot of the database.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
