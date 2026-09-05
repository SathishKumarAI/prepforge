---
qid: ing_68278719c4__eli5__local
question: 'Explain: Scenario – The Canadian census — How Amazon DynamoDB adaptive
  capacity accommodates uneven data access patterns (or, why what you know about DynamoDB
  might be outdated) | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 197
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:20:57-05:00'
sources: []
---

Imagine a library that keeps all the books on a single shelf. If one popular book is checked out every day while others sit untouched, the librarian would have to move that book to a fast‑access spot each time, wasting space and effort. Amazon DynamoDB solves this with **adaptive capacity**, which is like having a smart shelf system that automatically creates extra “quick‑checkout” slots for books that are borrowed often, and removes them when they’re no longer hot.

In the Canadian census data, some regions’ statistics are requested far more than others. Adaptive capacity watches these access patterns in real time and reallocates read/write throughput to the busy partitions, so those users get fast responses without paying for unused capacity elsewhere. It’s a dynamic, self‑balancing mechanism that keeps performance high while keeping costs low—exactly what DynamoDB offers today.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
