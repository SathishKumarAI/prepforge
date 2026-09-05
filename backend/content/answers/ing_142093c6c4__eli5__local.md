---
qid: ing_142093c6c4__eli5__local
question: 'Explain: MongoDB sharded clusters — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 224
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:07:10-05:00'
sources: []
---

Imagine a huge library that holds millions of books, but you only have a few shelves at home. To keep everything organized, the librarian decides to split the collection into smaller “sections” and store each section on a different shelf. Each shelf is like a **shard** – a separate server that keeps a piece of the data.

The library’s **router** (called mongos) is the librarian who knows where every book lives. When you ask for a book, the router looks up which shard holds it and asks that shard to give you the page. If you add more books than one shelf can hold, the librarian simply brings in another shelf—another shard—and redistributes some sections so no single shelf gets overloaded.

So, sharding is just dividing a big database into manageable parts, each on its own server, while a router keeps track of where everything resides and directs your queries to the right place.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
