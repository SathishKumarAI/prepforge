---
qid: ing_c88debd2e0__eli5__local
question: 'Explain: Primary and Unique Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 237
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:53:20-05:00'
sources: []
---

Think of a library that catalogs books by their ISBN numbers.  
The **primary index** is like the main catalog card: it guarantees every book has one, only one, entry in the system—just as a primary key guarantees each row in a table is uniquely identified and no two rows can share the same value.  

A **unique index** is similar to a special “first‑edition” list that only allows one copy of a particular edition to appear. It lets you enforce uniqueness on any column (or set of columns) even if it isn’t the primary key—so two books can have the same title, but no two can share the same combination of title and author if that pair is unique‑indexed.

Both indexes speed up searches: the library’s card system quickly locates a book by ISBN, while the first‑edition list prevents duplicate entries. In database terms, they’re both structures that keep data tidy and retrieval fast, but only the primary index can also serve as the table’s main reference point for relationships.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
