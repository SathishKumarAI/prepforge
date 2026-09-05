---
qid: ing_de36eb4d42__eli5__local
question: 'Explain: Shard distribution guidelines — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 220
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:26:30-05:00'
sources: []
---

Imagine a library that stores books (your data) on shelves (shards). If a shelf is too full, you’ll struggle to find a book; if it’s almost empty, you’re wasting space and time moving the whole shelf around. The same idea applies in Elasticsearch.

**Size your shards like you’d size a shelf:**
- **Keep each shard under 50 GB** – that’s the sweet spot for quick searches and easy recovery.
- **Aim for 1–5 shards per node** – too many and the node spends more time coordinating; too few and you lose parallelism.
- **Watch your total index size** – if you have 500 GB of data, don’t split it into 1000 tiny shards; that’s like having a thousand nearly empty shelves.

By following these guidelines, each “shelf” stays manageable, searches stay fast, and the library (cluster) runs smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
