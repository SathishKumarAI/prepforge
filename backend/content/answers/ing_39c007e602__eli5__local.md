---
qid: ing_39c007e602__eli5__local
question: 'Explain: Cardinality — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 220
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:07:46-05:00'
sources: []
---

Imagine a huge library that holds every book in the world. If everyone tried to find a single book by walking through all the shelves at once, it would take forever. Instead, the library is split into several smaller branches—each branch keeps only a portion of the books, like all novels or all history titles. When you want a book, you go straight to the branch that holds its category, saving time and effort.

In database terms, **sharding** does exactly this: it divides one massive database into many smaller “shards.” Each shard stores a subset of the data (for example, users whose IDs start with A–M in one shard, N–Z in another). Queries hit only the relevant shard instead of scanning the entire table. The result is faster access, lower load on any single server, and easier scaling—just add more shards as the collection grows. This is what AWS calls “sharding” when you distribute your data across multiple database instances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
