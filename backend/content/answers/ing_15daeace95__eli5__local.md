---
qid: ing_15daeace95__eli5__local
question: 'Explain: Need for high availability — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 221
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:10:05-05:00'
sources: []
---

Imagine a huge library that is too big for one building. To keep it open all the time, the books are split into many smaller shelves and placed in several branches around town. Each branch can answer questions about its own shelves, but if you need a book that’s not there, your request automatically goes to the right branch, and if one branch closes, the others still work.

In MongoDB, “sharding” does exactly this for data. A sharded cluster splits large collections into chunks (small sets of documents) and distributes those chunks across many servers called shards. Each shard holds only a portion of the data, so queries hit just the right server. If one shard fails, the system routes requests to the remaining healthy shards, keeping the database available. The “shard key” is like the shelf label that tells MongoDB where each chunk belongs. This design lets databases grow and stay online even when parts of it go down.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
