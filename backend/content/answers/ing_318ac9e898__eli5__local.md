---
qid: ing_318ac9e898__eli5__local
question: Are indices and shards not free? — How many shards should I have in my Elasticsearch
  cluster? | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 245
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:54:14-05:00'
sources: []
---

Imagine your data as a huge library of books that you want to lend out quickly.  
Elasticsearch splits this library into **shards**—tiny, self‑contained shelves that can be stored on different servers (the cluster). Each shelf must keep its own copy of the index files and the tiny “catalog” that tells where each word lives. That catalog is the **index**.  

Because every shelf holds a full index and a little bit of extra bookkeeping (memory, disk space, CPU to keep it up‑to‑date), shards aren’t free. More shelves mean more duplicated data and more resources spent keeping them all in sync.

A good rule: start with one shard per node if you have small nodes (<10 GB RAM). If your cluster grows or you need faster search, add shards gradually, watching the CPU and memory usage. Too many shards can slow things down; too few can bottleneck performance. Think of it as balancing a library’s shelves—enough to keep books accessible, but not so many that the librarians (your servers) get overwhelmed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
