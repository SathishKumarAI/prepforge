---
qid: ing_c1a1fc1454__eli5__local
question: 'Explain: Cost optimization — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 197
total_tokens: 357
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:43:04-05:00'
sources: []
---

Imagine your data is a huge library that keeps growing every day. If the whole library sits on one shelf, it becomes heavy and hard to reach for anyone who wants a book. Sharding is like splitting the library into several smaller sections (shards), each stored in its own building. When someone asks for a book, they go straight to the section where that book lives, so the shelves stay light and easy to manage.

In MongoDB, sharding distributes documents across multiple servers based on a *shard key*. This spreads storage and query load, keeping each server from getting overloaded—just like separate library buildings keep books accessible. The result is lower hardware costs (you can use cheaper machines) and faster responses because no single server becomes a bottleneck. Thus, sharding optimizes cost by balancing workload and scaling out smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
