---
qid: ing_cd6d75ae9e__eli5__local
question: 'Explain: Range-Based Sharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 235
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:00:53-05:00'
sources: []
---

Imagine a huge library that holds millions of books, each identified by a unique number (like an ISBN). If you let every visitor search the whole library, it would be slow and chaotic. Instead, the librarian decides to split the collection into sections: one shelf for books numbered 1–100 000, another for 100 001–200 000, and so on. Each section is managed by a different librarian (a server). This division of the book range is called **range‑based sharding**.

In computer systems, data items are given keys (numbers or strings). A *shard* is a subset of the key space—say all keys from “A0000” to “B9999”. When a request arrives, the system looks at the key and sends it straight to the shard that owns that range. This keeps each server’s workload balanced and lets many servers work in parallel without stepping on each other’s toes. The term *shard* simply means “a piece of data owned by one server.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
