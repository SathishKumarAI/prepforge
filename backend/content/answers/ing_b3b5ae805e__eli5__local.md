---
qid: ing_b3b5ae805e__eli5__local
question: 'Explain: Indexing — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 180
total_tokens: 339
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:21:55-05:00'
sources: []
---

Think of a library where every book is a database record and the shelf label is its “key.”  
If you want a specific book, you can either flip through every shelf (a *full table scan*) or look directly at the index—a separate card catalog that tells you exactly which shelf holds the book.  

**Index**: A small, sorted list of keys pointing to records, like a phonebook that jumps straight to the right page.  
When you query for “price < $10,” the database uses the index to skip over expensive items instead of checking each one.  

The result is a dramatic speed‑up—like finding a book in seconds versus minutes—because the index shrinks the search space and keeps data retrieval efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
