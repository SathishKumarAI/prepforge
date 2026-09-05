---
qid: ing_806a581bd1__eli5__local
question: 'Explain: Conclusions — How many shards should I have in my Elasticsearch
  cluster? | Elastic Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 223
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:00:25-05:00'
sources: []
---

Think of an Elasticsearch cluster like a library that stores books (your data).  
Each *shard* is a shelf in that library. The right number of shelves depends on two things:

1. **How many books you have** – If the library is tiny, one or two shelves are fine; if it’s huge, you need more shelves so readers can reach any book quickly.  
2. **How fast people want to find books** – More shelves let several librarians work at once, speeding up searches.

A good rule of thumb: start with one primary shard per 1–5 GB of data, then add replicas (copies) for fault‑tolerance and read speed. If your cluster grows or you notice slow queries, split the large shards into smaller ones—like adding more shelves—so each stays manageable. Remember, too many tiny shelves can waste space, while too few bulky shelves slow everything down. Adjust gradually, watching performance as you go.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
