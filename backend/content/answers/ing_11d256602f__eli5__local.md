---
qid: ing_11d256602f__eli5__local
question: 'Explain: Risky Shard Key: created_at — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 204
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:03:56-05:00'
sources: []
---

Imagine a library that splits its books into many shelves (shards) so people can find them quickly. If the librarian decides to sort every book by the date it was written (`created_at`) and put all recent books on one shelf, that shelf will soon become huge while older shelves stay tiny. This is a **risky shard key**: the data grows unevenly because most new records pile onto the same shard.

In database sharding, a *shard key* tells the system where to store each record. Choosing `created_at` means “store by time.” As time moves forward, almost all writes go to the newest shard, creating an imbalance and slowing queries that touch older data. The right choice is one that spreads rows evenly—like sorting books by author or genre—so every shelf stays roughly the same size and performance stays smooth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
