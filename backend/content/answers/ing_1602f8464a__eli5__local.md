---
qid: ing_1602f8464a__eli5__local
question: 'Explain: Query a document by ID — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 240
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:10:22-05:00'
sources: []
---

Imagine you’re in a giant library that can be organized in two different ways.

**Cassandra** is like a *catalogue* where every book (document) has its own unique ID written on the front cover, and all books are sorted by those IDs across many shelves. When you ask for a specific ID, Cassandra simply pulls the shelf that holds that ID and gives you the book right away. It’s very fast at finding the exact item because it knows exactly where to look.

**MongoDB**, on the other hand, is like a *library with index cards*. Each card lists several books by various attributes (author, title, etc.). When you ask for an ID, MongoDB first scans its index cards to find which shelf holds that book. The search can be slightly slower because it must check the index before retrieving the full document.

So, Cassandra gives a straight‑line “ID → book” lookup, while MongoDB uses an extra “index scan → book” step. Both work well, but Cassandra shines when you always know the exact ID and need the quickest response.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
