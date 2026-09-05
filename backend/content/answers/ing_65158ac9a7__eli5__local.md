---
qid: ing_65158ac9a7__eli5__local
question: 'Explain: General sizing guidelines — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 219
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:16:09-05:00'
sources: []
---

Think of an **Elasticsearch index** like a big library and each **shard** as a single shelf that holds books (documents).  
If you put too many books on one shelf, it becomes heavy to pull out the right one – search slows down.  
If you split the books into too many tiny shelves, you’ll spend time looking at many shelves just to find one book – again slow.  

A good rule of thumb is: keep each shard around **10 GB** of data (or about 1 billion documents for very small docs). That size lets a single machine handle the shelf comfortably while keeping the number of shelves low enough that a search only touches a few at most.  

So, “size your shards” means pick a shelf size that balances weight (search speed) and number (management overhead). Keep it around 10 GB per shard for most workloads; adjust if you have very large or very small documents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
