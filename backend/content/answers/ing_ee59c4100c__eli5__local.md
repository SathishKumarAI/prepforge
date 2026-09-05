---
qid: ing_ee59c4100c__eli5__local
question: 'Explain: Data storage — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 285
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:52:35-05:00'
sources: []
---

Think of a library that wants to keep books (data) for millions of readers who come at any time.  
**Storage is the shelves and catalogues that let everyone find a book quickly.**

* **Database vs. File Storage** – The database is like a tidy, searchable shelf where each book has a label (key). File storage is a big stack of loose papers; you can grab one if you know its exact spot, but searching takes longer.  
* **Primary vs. Secondary Storage** – Primary (RAM) is the librarian’s desk: fast and always ready, but it holds only what is being used right now. Secondary (disk or cloud) is the warehouse: slower to reach, but can hold far more books.  
* **Replication** – Copying a book to another shelf in a different room so if one shelf breaks, readers still find the book.  
* **Partitioning (sharding)** – Splitting the library into sections (by genre or author) so each section can be managed and searched independently, preventing any single shelf from getting overloaded.  

In an interview, explain that good data storage balances speed (primary memory), capacity (secondary storage), reliability (replication), and scalability (partitioning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
