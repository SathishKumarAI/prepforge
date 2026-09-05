---
qid: ing_a3d4774361__eli5__local
question: How does shard size affect performance? — How many shards should I have
  in my Elasticsearch cluster? | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 239
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:57:59-05:00'
sources: []
---

Imagine each shard as a tiny library that holds only part of your books (data). If the library is too small—just a handful of shelves—it’s easy to find a book: quick search, fast response. But if you have thousands of such tiny libraries scattered everywhere, every time someone asks for a book you must ask many libraries and then combine their answers; that adds overhead and slows things down.

A shard that’s too big is like one gigantic library with shelves so deep that finding a book takes longer because the librarian has to walk through more rows. Both extremes hurt performance: too many tiny shards create coordination cost, while too few huge shards burden each node.

**Rule of thumb:** keep each shard between 10 GB and 50 GB on SSDs and aim for no more than 1–2 shards per node core. Start with a moderate number (e.g., 5–10) and monitor; if queries lag, add shards gradually—never let a single shard grow beyond the sweet‑spot size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
