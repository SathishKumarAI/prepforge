---
qid: ing_a7f3aec3b6__eli5__local
question: 'Explain: Secondary Indexes — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 254
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:04:19-05:00'
sources: []
---

Think of a library that lets you look up books by two different “tags”: the author (primary tag) and the genre (secondary tag).  

In **Cassandra**, the primary key is like the author’s name—every book in a row belongs to one author, so you can instantly find all books by that author. A secondary index is an extra shelf that lists every genre for each author, but it’s built lazily: Cassandra only adds a book to this shelf when someone asks for that genre. That means the shelf can be slow or out‑of‑date if many books are added at once.

In **MongoDB**, the primary key (often `_id`) works similarly, but secondary indexes are always kept up‑to‑date and stored in a separate B-tree structure. When you query by genre, MongoDB jumps straight to that B-tree, giving quick results even as data grows.

So: Cassandra’s secondary index is “on demand” and can lag; MongoDB’s is pre‑built and consistently fast—just like choosing between a library that builds its genre shelf only when needed versus one that maintains it all the time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
