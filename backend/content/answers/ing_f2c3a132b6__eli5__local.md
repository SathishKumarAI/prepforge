---
qid: ing_f2c3a132b6__eli5__local
question: How do I manage shard size? — How many shards should I have in my Elasticsearch
  cluster? | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 241
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:58:43-05:00'
sources: []
---

Think of an Elasticsearch cluster like a library that stores books (your data).  
A *shard* is one shelf inside the library—each shelf holds a slice of all the books.  
If you have too few shelves, each one becomes crowded and slow to find a book; if you have too many, you waste space and spend time moving between shelves.

**How many shelves (shards) do you need?**  
1. **Start with 5–10 shards per index** – this gives enough room for growth while keeping search quick.  
2. **Watch the size of each shelf**: if a shard grows beyond ~50 GB, split it; if it stays under ~30 GB and the cluster is fast, you can keep it as‑is.  
3. **Balance nodes**: spread shards evenly across your servers so no single node becomes a bottleneck.

Remember: *shard* = shelf; *index* = collection of books. Keep shelves sized comfortably and evenly, and your library will stay quick and organized.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
