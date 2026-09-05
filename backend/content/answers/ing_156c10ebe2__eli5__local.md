---
qid: ing_156c10ebe2__eli5__local
question: 'Explain: Data Model — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 245
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:09:23-05:00'
sources: []
---

**Data Model – a “Library Catalog” for your system**

Imagine you’re building a huge library. The *data model* is the catalog that tells every book where it belongs: its title, author, genre, and how it links to other books (series, translations). In an interview, show you can design this catalog so it answers questions quickly—finding all mystery novels by a specific author or listing sequels in order.

1. **Define entities** – like “Book,” “Author,” “Genre.”  
2. **Identify attributes** – title, ISBN, publication date.  
3. **Set relationships** – one‑to‑many (author to books), many‑to‑many (books to genres).  
4. **Choose a storage style** – relational tables for strict rules or NoSQL collections when you need flexibility.

When you sketch the catalog before coding, you prove you can think about how data will grow, be queried, and stay consistent—exactly what interviewers want to see.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
