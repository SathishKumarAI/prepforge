---
qid: ing_a9ece991fd__eli5__local
question: 'Explain: Composite Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 278
total_tokens: 437
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:07:07-05:00'
sources: []
---

**Composite indexes are like a two‑column filing system for your database.**  
Think of a library that keeps books by *author* and then by *title*. A single “author” index lets you quickly find all books by an author, while a single “title” index finds all copies of a particular book. But if you often need to locate a specific book written by a particular author, the librarian would first look in the “author” column, then within that section jump straight to the title—saving time compared to flipping through every shelf.

In database terms:  
- **Index** = a lookup table that speeds up searches.  
- **Composite index** = an index built on two (or more) columns together, exactly like the author‑then‑title example.  

When a query filters by both columns, the composite index lets the system jump directly to the matching rows, much faster than using separate indexes or scanning every row. It’s especially handy for queries that combine conditions such as “WHERE user_id = 42 AND status = 'active'.” The index works in the order you list the columns; if your query always uses both, a composite index is usually the best design choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
