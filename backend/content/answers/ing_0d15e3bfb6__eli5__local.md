---
qid: ing_0d15e3bfb6__eli5__local
question: 'Explain: Read Path — How LedgerStore Supports Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 215
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:56:17-05:00'
sources: []
---

Imagine a gigantic library that never runs out of shelves.  
Every book (data record) has many labels—author, genre, year, and even tiny tags like “rainy day” or “fast food.”  
To find a book quickly you don’t walk the whole library; you jump straight to the label’s shelf.  

**LedgerStore** is that library’s super‑organized catalog.  
When it writes a record, it also writes *index entries* for every label in a special “read path” file—think of it as a master index that points directly to where each labeled copy lives on disk.  
Because the read path stores pointers, the system can jump straight to any combination of labels—even trillions of them—without scanning all books.  

So Uber’s ledger uses this read‑path trick: write once, then instantly locate any needed record by looking up its label in the index, no matter how many indexes exist.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
