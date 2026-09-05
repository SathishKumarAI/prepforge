---
qid: ing_61add12e47__eli5__local
question: 'Explain: How Sharding Works — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 196
total_tokens: 356
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:11:11-05:00'
sources: []
---

Imagine you’re running a huge library with millions of books, but only one librarian can handle them all at once. To keep the shelves tidy and make finding a book fast, you split the collection into separate sections—each section is like a *shard*. Every shard holds a subset of the books (for example, by author name or genre). When someone asks for a book, the system checks which section that book belongs to and goes straight there instead of searching the whole library.

In computing, sharding does exactly this: it divides data across many databases or servers. Each shard stores only part of the total dataset, so queries hit fewer records, load is spread out, and the system can grow by adding more shards. The key point is that each piece knows where its data lives, just like a librarian knows which shelf holds a particular book.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
