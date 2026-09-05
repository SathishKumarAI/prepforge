---
qid: vq_1b48e7bc77__eli5__local
question: What is Hive Managed and External tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 216
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:04:17-05:00'
sources: []
---

Imagine your data warehouse as a library.  
A **managed table** is like a book that belongs to the library’s collection. When you decide to remove the book, the library deletes both the cover (the table metadata) and everything inside it (the files on disk). The library owns every page; once the book is gone, so are its contents.

An **external table** is like a book that you borrowed from a friend. The library only knows where to find it – the shelf location – but does not own the pages. If you return the book, the library keeps its catalog entry, but the actual pages stay in your friend’s possession. Deleting the external‑table entry simply removes the reference; the underlying files remain untouched.

So:  
* **Managed** = library owns and cleans up everything.  
* **External** = library only tracks location; the data lives elsewhere and is preserved when you drop the table.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
