---
qid: vq_a8e00eb90f__eli5__local
question: What are managed and external tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 214
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:23:21-05:00'
sources: []
---

Think of a database like a library.  
A **managed table** is a book that the library owns entirely: when you add it, the library keeps the cover, pages, and storage space. If you decide to delete the book, the library takes away both the paper and the shelf spot—everything disappears.

An **external table** is like a book you bring from home. The library only holds a catalog entry that points to where your copy sits (maybe on your laptop or a shared drive). When you drop the book back at home, the library’s catalog still lists it but the physical pages are gone; the library never deletes them.

So, *managed tables* own both data and storage inside the system, while *external tables* only reference data stored elsewhere. This distinction lets you decide whether the database should control the lifecycle of your data or just read from an outside source.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
