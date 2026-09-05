---
qid: ing_9c100b934b__eli5__local
question: 'Explain: MongoDB sharded database architecture — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 209
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:44:40-05:00'
sources: []
---

Imagine a big library that’s too crowded for one shelf.  
**Sharding** splits the books (data) into many smaller piles and stores each pile on its own shelf (server).  

*Shard* – a single server or cluster holding one piece of the data.  
*Cluster* – all the shards together, plus two extra helpers:  
- **Config servers** keep a map that says “book #42 lives on Shelf 7.”  
- **Query router (mongos)** is like a librarian who asks the right shelf for any book.

When you ask for data, the router looks at its map, directs the request to the correct shard, and returns the answer. If one shelf gets too full, you add another shard; the system automatically redistributes books so no single place overburdens itself. Thus sharding lets MongoDB grow horizontally—adding more shelves keeps the library fast and available.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
