---
qid: ing_07c5d4c539__eli5__local
question: 'Explain: Sizing considerations — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 234
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:47:53-05:00'
sources: []
---

Think of an **Elasticsearch index** as a giant library and each **shard** is a single bookcase inside that library.  
When you start a **machine‑learning job**, the system looks at the data in those bookcases to find patterns, so it’s important that no one bookcase becomes too big or too small.

*If a bookcase (shard) holds thousands of books (documents), each search takes longer because the computer has to scan many pages. If it’s too tiny, you’ll end up with hundreds of little bookcases, and the system spends extra time coordinating between them—like having to ask every librarian for a single page.*

The rule of thumb is: make each shard about **30–50 GB** of searchable data. That keeps searches fast enough while keeping the number of shards manageable so your machine‑learning job runs smoothly. Remember, “shard” = one partition of an index; “documents” = individual records you’re analyzing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
