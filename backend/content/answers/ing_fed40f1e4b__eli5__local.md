---
qid: ing_fed40f1e4b__eli5__local
question: 'Explain: Combine smaller indices — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 211
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:18:36-05:00'
sources: []
---

**Imagine a huge library that’s too big for one shelf.**  
Instead, the librarian splits the books into *shards*—smaller shelves that can be stored separately and searched independently.  

When you store documents in Elasticsearch, each document gets an *index* (a collection of related data). If an index grows too large, queries slow down and storage becomes unwieldy. The solution is to **split the index into shards**: smaller, manageable units that sit on different servers or disks.  

Think of shards as “mini‑libraries” inside the big library. They keep the same book titles (data) but spread them out so you can fetch a page quickly from any mini‑library without scanning the entire collection. This is what *Size your shards* means: decide how many and how large each mini‑library should be to balance speed, storage, and fault tolerance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
