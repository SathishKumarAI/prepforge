---
qid: vq_2ab5909e7c__eli5__local
question: What are the two types of fragmentation?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 201
total_tokens: 357
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:06:52-05:00'
sources: []
---

Think of a database table like a bookshelf that holds books (records).  
When you keep adding and deleting books, the shelf can get **fragmented** – gaps appear between the books or inside each book’s pages.

1. **External fragmentation** is like having many empty spaces on the shelf. The books are still whole, but there are unused gaps between them that waste space.  
2. **Internal fragmentation** is like a book whose pages are not fully filled; the last page may have a lot of blank area because the record doesn’t use all the allocated room.

Both types make storage less efficient: external fragmentation reduces how many books fit on one shelf, and internal fragmentation wastes space inside each book. Regular maintenance (re‑organizing or rebuilding) can close those gaps and keep the shelf tidy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
