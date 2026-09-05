---
qid: ing_5eb34b5f12__eli5__local
question: 'Explain: The Database As Queue Anti-Pattern — Code rant: The Database As
  Queue Anti-Pattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 296
total_tokens: 464
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:06:33-05:00'
sources: []
---

**The “Database‑as‑Queue” anti‑pattern**

Imagine a busy café where orders are written on sticky notes and left on a table for the kitchen to pick up. If the kitchen is tiny, it can only read one note at a time; if it’s huge, the notes pile up and the barista gets lost in a maze of paper. In software, people sometimes use a database table like that sticky‑note board: each row is an “event” or “message”, and workers pull rows out, process them, then delete them.

**Why this is bad**

1. **Speed** – Databases are great at storing data, not at handing off work fast. Every worker has to lock a row, check it, and delete it, which adds overhead.
2. **Reliability** – If the database crashes, you lose all unprocessed rows. A true message queue keeps messages safe until an app confirms receipt.
3. **Scalability** – Adding more workers means more locking contention; the table becomes a bottleneck instead of growing smoothly.

So, just as a café would use a dedicated order‑management system rather than sticky notes, real applications should use a purpose‑built message queue (RabbitMQ, Kafka, etc.) for passing work between services. The database stays for what it does best: storing data, not shuttling tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
