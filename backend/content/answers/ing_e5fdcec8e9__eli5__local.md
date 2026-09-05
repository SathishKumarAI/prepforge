---
qid: ing_e5fdcec8e9__eli5__local
question: 'Explain: Multi-tenant architecture — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 192
total_tokens: 354
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:39:12-05:00'
sources: []
---

Imagine a big library that serves many schools at once (the **multi‑tenant** part). Each school has its own books and shelves, but all of them share the same building and librarians.  

Now think of MongoDB’s **sharding** as that library’s way of spreading its collection across several smaller storage rooms (the *shards*). Every book (document) is split into chunks and each chunk lives in a different room so no single room gets overloaded. A special “router” (mongos) sits at the front desk, telling any school which room holds the requested book.

So: **multi‑tenant** = many schools using one library; **sharding** = dividing the library’s shelves into rooms to keep it fast and spacious for everyone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
