---
qid: ing_4f0142e91f__eli5__local
question: 'Explain: Sharding — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 245
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:42:22-05:00'
sources: []
---

Imagine Instagram as a huge library that holds every photo and story ever uploaded. If one shelf held all the books, it would get crowded fast and finding a single book would take forever. Sharding solves this by splitting the library into many smaller shelves—each shelf (a *shard*) stores only a portion of the books.

In practice, Instagram assigns each user to a specific shard using a simple rule (like “user ID mod 10”). When someone uploads or views a photo, the system first figures out which shelf that user belongs to and then works only on that shelf. This keeps every shelf small, speeds up searches, and lets many servers work in parallel.

**Key terms**
- **Shard**: A subset of data stored on its own server or group of servers.
- **Sharding key** (e.g., user ID): The value used to decide which shard a record belongs to.

By sharding, Instagram can grow without slowing down, just like a well‑organized library that keeps each section manageable and easy to navigate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
