---
qid: ing_8c3a2cce92__eli5__local
question: 'Q: When would you use a Disk-based index (like DiskANN) over a RAM-based
  index (HNSW)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 216
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:18:50-05:00'
sources: []
---

Think of an index as a library’s “find‑me” system.  
A **RAM‑based index** (HNSW) is like a small, super‑fast card catalog that sits right on your desk. It lets you pull up any book in milliseconds, but it can only hold a few thousand cards before the desk gets crowded and you need more space.  

A **Disk‑based index** (DiskANN) is like an enormous shelf in a storage room. The books are still there, but you have to walk over to fetch them. It takes longer to open each book, yet it can hold millions of entries because the shelves aren’t limited by desk space.  

Use HNSW when your data set fits comfortably in RAM and speed is critical—think real‑time chat or gaming.  
Choose DiskANN when you have a massive collection that would overflow memory; the slight delay is worth the ability to search billions of items without buying more RAM.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
