---
qid: ing_c8db3d0f80__eli5__local
question: 'Explain: Sharding — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 255
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:53:44-05:00'
sources: []
---

**Sharding is like a library that has turned its books into many mini‑libraries spread across town.**

In a single database (the original library), all the data sits together on one server. When lots of people try to read or write at once, the server gets crowded and slows down—just as a single shelf can’t hold every book when everyone wants to borrow.

Sharding solves this by dividing the data into *shards*—small, independent chunks that live on separate servers (the mini‑libraries). Each shard handles only the subset of data it owns. If one reader goes to the “history” shard, they don’t interfere with someone else reading “science.” The system can now serve many readers simultaneously, just like having several libraries in different neighborhoods.

**Key terms:**  
- **Shard:** a partition of the database that lives on its own server.  
- **Horizontal sharding:** splitting rows (records) across shards based on a key (e.g., user ID).  

By spreading the load, sharding keeps queries fast and lets the database grow without bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
