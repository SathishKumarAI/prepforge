---
qid: ing_bc5dbdcd95__eli5__local
question: What is a shard? — How many shards should I have in my Elasticsearch cluster?
  | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 222
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:35:50-05:00'
sources: []
---

Imagine you’re storing a huge library of books on a single shelf that can only hold so many volumes before it becomes cramped and slow to reach. A **shard** is like cutting that shelf into smaller sections, each holding its own set of books. In Elasticsearch, every shard contains part of the data and can be read or written independently, so several shards work in parallel, speeding up searches.

How many shards? Think of it as balancing between too few (a single heavy shelf that’s slow) and too many (so many tiny shelves that you waste space). A good rule is to keep each shard under about 50 GB for quick access, then count how much total data you have. For example, if you store 200 GB of logs, use four shards. Adjust based on the size of your nodes and how fast you need queries to respond; more powerful hardware can handle larger shards, while smaller machines benefit from more but lighter ones.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
