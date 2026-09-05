---
qid: ing_9e53bd348f__eli5__local
question: 'Explain: Directory-Based Sharding — Key Concepts to Understand Database
  Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 258
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:48:23-05:00'
sources: []
---

Imagine your library has thousands of books but only a few shelves that can hold them all at once. Instead of piling every book on the same shelf and then digging through it for one title, you create a *directory*—a tiny index map—that tells you exactly which shelf holds each book.

In database sharding, the “books” are rows of data, and the “shelves” are separate servers (shards). A directory‑based system keeps a lightweight table that maps each key (like a user ID) to the shard where its data lives. When a query arrives, you look up the key in the directory first; it instantly tells you which server to contact, bypassing the need to scan all shards.

Key terms:  
- **Shard** – a subset of the database stored on one server.  
- **Directory** – a small index that records where each data piece is located.  

Because the directory is tiny compared to the full dataset, it’s fast and inexpensive to query. This approach lets you scale out (add more shelves) while keeping lookups efficient—just like having a quick reference map in your library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
