---
qid: ing_039f542e26__eli5__local
question: 'Explain: Consider additional heap overheads — Size your shards | Elastic
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 237
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:41:02-05:00'
sources: []
---

Imagine a library that stores books (your data) on shelves inside a room (the JVM heap). Each shelf is a *shard* – a self‑contained section that can be moved or copied independently. The room has limited space; every book, plus the librarian’s notes and spare binding glue, takes up part of it. In Elasticsearch, the “heap” is this room’s memory, and each shard adds its own overhead: index metadata, field data structures, caches, and more. If you cram too many books onto one shelf or pile too many shelves in the room, the librarian (the JVM) runs out of space and must pause to reorganize, slowing everything down.

So “size your shards” means choose how large each shelf should be so that the total memory used by all shards plus their overhead stays comfortably below the heap limit. Think of it as balancing the number of shelves against the room’s capacity: too many heavy shelves crowd the space; a few lighter ones leave room for smooth operation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
