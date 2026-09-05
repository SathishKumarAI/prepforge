---
qid: ing_a82c53ff92__eli5__local
question: 'Explain: Aim for shards of up to 200M documents, or with sizes between
  10GB and 50GB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 238
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:04:38-05:00'
sources: []
---

Think of a library that stores books in giant boxes. If a box gets too full—say it holds more than 200 million books—it becomes heavy and hard to move, slow for workers to find a single book, and difficult to copy or backup. On the other hand, if a box is too small—holding only 10–50 GB worth of books—it wastes space: you’d need many boxes, each with its own catalog, and the library’s computers would have to open many boxes just to read one chapter.

So, when we design a “shard” (a chunk) in machine‑learning data storage, we aim for about 200 million documents per shard. That keeps each shard manageable: not too heavy, but still large enough that we don’t create an overwhelming number of tiny shards. If the shard’s raw size falls between 10 GB and 50 GB, it strikes a sweet spot where disk space is used efficiently while keeping read/write speed fast. This balance lets our models fetch data quickly without overloading any single storage unit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
