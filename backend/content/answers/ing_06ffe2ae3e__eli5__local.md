---
qid: ing_06ffe2ae3e__eli5__local
question: 'Explain: And then a scan allows you to — AWS re:Invent 2021 - Which NoSQL
  database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 220
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:46:47-05:00'
sources: []
---

When you choose a NoSQL database, think of it like picking a library that stores books the way you need them. A **scan** is the “walk through every shelf” operation: you let the system look at each item (row or document) to find matches, even if you don’t know exactly where they’re located.

In AWS terms, when you use DynamoDB, MongoDB Atlas, or Cassandra, a scan reads all records in a table or collection. It’s useful for exploratory queries or full‑table exports, but it can be slow and costly because every item is touched. That’s why most applications prefer **queries** (like asking the librarian for a specific title) that use indexes to jump straight to the needed data.

So, if you need quick lookups of known keys, choose a database that supports efficient queries. If you often do “search all books” tasks, ensure your choice can handle large scans without hurting performance or cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
