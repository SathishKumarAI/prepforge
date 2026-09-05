---
qid: ing_74688a5ea7__eli5__local
question: 'Explain: Create a sharding strategy — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 257
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:41:10-05:00'
sources: []
---

Imagine you’re building a huge library of books (your data). You want to make sure people can find any book quickly, even if the library grows to millions of volumes. A **sharding strategy** is like deciding how many shelves (shards) to use and how big each shelf should be.

1. **Size your shards** – Think of each shard as a shelf that holds a certain number of books. If you make every shelf too small, you’ll have thousands of tiny shelves that are hard to manage; if you make them too large, searching a single shelf takes forever. Pick a size that balances speed and manageability—often a few hundred gigabytes or a few million records.

2. **Elastic Docs** – When the library expands, you add new shelves (shards) on demand instead of overloading existing ones. This is “elastic” because it can stretch as more books arrive, keeping each shelf at an optimal size without manual re‑balancing.

So, sharding is like organizing a growing book collection into well‑measured, expandable shelves that keep search time short and maintenance easy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
