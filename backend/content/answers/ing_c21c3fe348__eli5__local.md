---
qid: ing_c21c3fe348__eli5__local
question: 'Explain: Index by retention period — How many shards should I have in my
  Elasticsearch cluster? | Elastic Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 242
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:43:45-05:00'
sources: []
---

Think of your Elasticsearch cluster as a library that keeps books for only a certain number of years (the *retention period*).  
Each book belongs to one shelf, and every shelf is a *shard*.  
If you keep books for five years but have only two shelves, the first three years’ worth of books will pile up on those two shelves until they overflow. That’s like a shard getting too full – searches slow down and updates become harder.

A good rule: give each year its own shelf (one shard per year).  
So if you keep data for 7 years, create about 7 shards.  
If you expect more traffic or want faster queries, add a few extra shelves—maybe two per year—but don’t go too high because every extra shard adds overhead.

In short:  
- **Retention period** = how long you store data.  
- **Shards** = separate storage units that keep the load balanced.  
Pick roughly one shard for each year of data, and add a few more only if your workload demands it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
