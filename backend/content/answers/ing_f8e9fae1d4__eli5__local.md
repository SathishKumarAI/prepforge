---
qid: ing_f8e9fae1d4__eli5__local
question: 'Explain: Infrastructure costs — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 195
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:08:55-05:00'
sources: []
---

Imagine a huge library that holds every book in the world. If everyone tried to find a single title at once, the shelves would crush under the traffic. Instead of keeping all books on one shelf, the librarian splits them into several smaller sections—each section handles only a portion of the titles. That’s **database sharding**.

In computing, a “shard” is just a slice of a database that stores part of the data (like a subset of customer records). When an application needs information, it first asks which shard holds that piece and then looks there. By distributing work across many shards, the system can grow without any single part becoming a bottleneck. Think of each shard as its own mini‑library, all working together to serve the whole collection efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
