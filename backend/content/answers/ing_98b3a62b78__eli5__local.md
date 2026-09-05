---
qid: ing_98b3a62b78__eli5__local
question: 'Explain: General guidelines — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 237
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:39:49-05:00'
sources: []
---

Think of a big library (your dataset) that you want to search quickly.  
A **shard** is like a separate shelf in the library, and each document is a book on that shelf.  
If a single shelf holds too many books, finding one becomes slow because the librarian has to look through all of them.  
If a shelf holds only a few books, you’ll need many shelves, which costs more space and makes it harder for different librarians (nodes) to coordinate.

**General guideline:** aim for each shard to hold about 10 GB–30 GB of data in Elasticsearch. That size is small enough that the node can load the whole shard into memory quickly, yet large enough that you don’t create an overwhelming number of shards.  

In machine‑learning pipelines, keep shards consistent with how your model will read data: a few dozen evenly sized shelves let the training process fetch batches fast without overloading any single node. This balance keeps search and learning both speedy and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
