---
qid: ing_1aaaf14f02__eli5__local
question: 'Explain: Best practices — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 195
total_tokens: 354
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:18:31-05:00'
sources: []
---

Think of an Elasticsearch cluster like a library that stores books (your data).  
**Shards** are the shelves where you keep those books, and each shelf has a limit on how many pages it can hold comfortably. If a shelf gets too crowded, reading a single book takes longer because the librarian must search through many pages; if a shelf is too empty, you’re wasting space and paying for unused storage.

**Best practice:** size each shard so that it holds roughly 10–50 GB of data (the exact number depends on your hardware). This keeps the shelves busy enough to use the library’s resources efficiently but not so full that searches slow down.  
Just as a well‑organized library lets you find a book quickly, properly sized shards let Elasticsearch retrieve documents fast and keep the cluster healthy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
