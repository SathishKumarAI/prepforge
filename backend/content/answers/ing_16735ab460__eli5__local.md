---
qid: ing_16735ab460__eli5__local
question: Do we need a dedicated vector database, or is pgvector enough? How do you
  decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 215
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:11:16-05:00'
sources: []
---

Think of your data as books in a library.  
A **vector** is like the book’s “content fingerprint” – a short list of numbers that tells you what the book is about (topics, style, mood).  
A **vector database** is a special shelf built only for these fingerprints; it knows how to quickly find the closest matches even if you have millions of books.  

`pgvector` adds that fingerprint‑reading ability to PostgreSQL, but it still uses the library’s general shelves and rules. If your collection is small or you already use PostgreSQL for everything else, pgvector can be enough.  
When the library grows large, you need a dedicated vector shelf: faster search, better scaling, and features like approximate nearest‑neighbor indexing that generic PostgreSQL can’t match efficiently.

So: start with pgvector; move to a dedicated vector database when speed, scale, or specialized indexing become bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
