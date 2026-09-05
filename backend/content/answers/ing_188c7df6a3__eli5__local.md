---
qid: ing_188c7df6a3__eli5__local
question: 'Explain: Delete indices, not documents — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 181
total_tokens: 343
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:14:41-05:00'
sources: []
---

Imagine your data is like a huge library that’s split into many small shelves (shards). Each shelf holds books (documents) and a list of page numbers where the books start (indices). When you want to throw out some old pages, you don’t need to toss whole books—just remove the entries in the page‑number list that point to those pages. The books stay on the shelves; only the pointers are deleted.

In Elastic Search this means “delete indices, not documents.” You’re trimming the navigation map (indices) so the system knows which parts of a shard are gone, but you don’t physically rewrite or remove the underlying book data immediately. This keeps shards small and efficient while keeping the actual content intact until it’s truly needed to be purged.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
