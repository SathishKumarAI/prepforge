---
qid: ing_b975b7f15c__eli5__local
question: 'Explain: Popular across InfoQ — Discord Migrates Trillions of Messages
  from Cassandra to ScyllaDB - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 219
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:31:24-05:00'
sources: []
---

Imagine a huge library that stores every book ever written in one giant shelf (Cassandra). The shelf is sturdy but it gets cramped and slow when you try to find or add books quickly. A newer, faster shelf (ScyllaDB) is built with the same shape so the books fit exactly, but its design lets many people pull out or put in books at once without waiting.

Discord decided to move all of its trillions of chat messages—each a “book” on that shelf—to this new system. The migration was like carefully packing each book into boxes (data batches), shipping them overnight, and re‑stacking them so the library keeps working while it changes.

**Unavoidable terms:**
- **Cassandra** – A distributed database that stores data across many computers.
- **ScyllaDB** – A newer, faster database built to work similarly to Cassandra but with better performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
