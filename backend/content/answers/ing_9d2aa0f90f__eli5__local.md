---
qid: ing_9d2aa0f90f__eli5__local
question: How many shards should I have in my Elasticsearch cluster?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 199
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:46:34-05:00'
sources: []
---

Imagine your Elasticsearch cluster as a library that stores books (data) and lets people find the right book quickly.  
A **shard** is like a separate shelf in that library. Each shelf can hold only so many books before it becomes crowded and slow to search.  

Rule of thumb: keep each shard under about 50 GB for fast queries, but not too many shelves, because every shelf adds a little overhead (memory, CPU).  
So if you have 200 GB of data, two shelves (shards) are usually enough; 500 GB might need ten.  

In short: split your data so each shard is <50 GB and the total number of shards stays under ~1000 for a single node, then adjust based on how many nodes you have and how fast you need searches to be.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
