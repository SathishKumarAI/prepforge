---
qid: ing_06fa4c34ef__eli5__local
question: 'Explain: Avoid unnecessary mapped fields — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 201
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:46:41-05:00'
sources: []
---

Imagine a library where each book is split into many shelves (shards). Every shelf stores not only the story but also a list of extra details: author, publisher, edition, and even the color of the cover. If you add a detail that no reader ever asks for—say, the exact number of paper sheets in the book—every shelf must carry that useless piece of data. The shelves become heavier and slower to find what’s needed.

In Elasticsearch, “mapped fields” are those extra details you declare in advance. If you map fields that your searches never use, every shard stores them, wasting disk space and slowing queries. So, size your shards by only mapping the fields you actually need—just like keeping the library shelves lean with only the information readers truly ask for. This keeps searches quick, storage efficient, and maintenance simple.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
