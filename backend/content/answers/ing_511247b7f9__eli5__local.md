---
qid: ing_511247b7f9__eli5__local
question: 'Explain: Costs of Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 243
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:45:32-05:00'
sources: []
---

Imagine your library has a giant bookcase (the database) and you want to find a specific book quickly.  
An **index** is like the table of contents: it tells you exactly which shelf and spot hold the book, so you skip searching every volume.  

But building that table of contents costs time and space.  
When you first create an index, the system must scan every book, note its title, and write a new list—this is the **build cost**.  
Every time a book is added, moved, or removed, the index must be updated too; each update takes extra CPU cycles—this is the **maintenance cost**.  

If you have many indexes (one for author, one for genre, one for publication date), the library grows heavier and slower to reorganize, just like a database slows down with many indexes.  
So while an index speeds up reads, it pays in storage and write‑time—balance them according to how often you read versus write.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
