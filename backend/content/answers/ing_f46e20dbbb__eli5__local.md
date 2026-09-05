---
qid: ing_f46e20dbbb__eli5__local
question: 'Explain: Avoid node hotspots — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 168
total_tokens: 328
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:01:36-05:00'
sources: []
---

Imagine a library that keeps every book in tiny drawers (the “nodes”). If one drawer gets filled with too many books while others stay almost empty, people will always go to that crowded drawer and wait—this is a *node hotspot*. To avoid it, the librarian splits the collection into several shelves (the “shards”) of roughly equal size. Each shelf holds a balanced number of drawers, so no single node gets overwhelmed.

In Elasticsearch, documents are stored in shards, and each shard lives on a node. If you put too many documents in one shard, that shard’s node becomes a hotspot. By sizing your shards—choosing how many and how big—they spread the load evenly across nodes, keeping search and indexing fast for everyone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
