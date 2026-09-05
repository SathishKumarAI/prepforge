---
qid: vq_5a92d59e42__eli5__local
question: What is a constraint and what are the seven constraints?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 319
total_tokens: 478
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:12:24-05:00'
sources: []
---

Imagine your data warehouse as a giant library where every book (data row) must follow certain rules so that visitors can find and use them easily.

A **constraint** is one of those rules—something the database insists on to keep everything consistent and reliable. Think of it like a librarian’s policy: no duplicate ISBNs, every book must have an author, and every reference must point to an existing book.

There are seven common constraints that most databases enforce:

1. **Primary Key** – unique identifier for each row (like a library card number).  
2. **Foreign Key** – links one table to another; it must match an existing primary key (like a book’s “borrowed from” link).  
3. **Unique** – guarantees that a column’s values never repeat (no two books with the same ISBN).  
4. **Not Null** – requires a value be present (every book must have a title).  
5. **Check** – enforces a condition on data (publication year can’t be in the future).  
6. **Default** – supplies a standard value when none is given (default status “available”).  
7. **Index** – speeds up searches, not strictly a rule but a performance aid that many consider part of the constraint toolkit.

These rules together keep your data tidy, accurate, and quickly retrievable—just like a well‑organized library keeps readers happy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
