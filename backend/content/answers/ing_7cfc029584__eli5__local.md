---
qid: ing_7cfc029584__eli5__local
question: Why Shard? — Sharding | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 196
total_tokens: 354
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:55:00-05:00'
sources: []
---

Think of a gigantic library that holds every book ever written, but you’re only allowed to read one shelf at a time because the whole building is too heavy to carry. Sharding is like dividing that library into smaller, independent sections—each section (a “shard”) contains a subset of books that can be fetched, updated, or searched on its own. In machine‑learning systems, sharding lets you split huge datasets (or model parameters) across many servers so each one handles only a piece of the work. When a model needs data, it goes straight to the shard that holds the relevant portion, speeding up training and keeping memory usage manageable. Just as librarians can quickly locate a book in its dedicated shelf, a sharded system locates the needed information without touching the entire collection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
