---
qid: ing_65269a03ff__eli5__local
question: 'Explain: Moving collections — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 213
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:16:15-05:00'
sources: []
---

Imagine your data is a giant library that keeps growing so fast you can’t store all its books on one shelf. In MongoDB, **sharding** is like hiring several librarians, each taking a portion of the library and keeping it in their own small room.

*Shard* – a server (or group of servers) that holds part of the data.  
*Shard key* – a rule you pick (like “by author last name”) that decides which librarian gets a book.  
*Chunk* – a contiguous block of books that lives together in one shard; when it becomes too big, it splits into two chunks.

When someone asks for a book, the system looks up the key, finds the right chunk, and goes straight to the librarian who owns it—no need to search the whole library. Sharding keeps the collection manageable, scales out storage and speed, and lets MongoDB handle millions of records without slowing down.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
