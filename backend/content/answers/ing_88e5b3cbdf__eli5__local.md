---
qid: ing_88e5b3cbdf__eli5__local
question: 'Explain: Range-based sharding — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 231
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:13:23-05:00'
sources: []
---

Imagine a huge library that holds every book in the world. If everyone tried to find a book in one giant room, it would be chaotic and slow. Instead, the librarian splits the collection into several smaller rooms, each holding books whose titles start with certain letters—A‑F, G‑L, M‑R, S‑Z. When you need a book, you go straight to the right room; no one has to search the whole building.

That’s database sharding in plain English. A “shard” is just a subset of a big database that lives on its own server or storage unit. “Range‑based” means data is divided by a logical range (like alphabetical ranges, dates, or numeric IDs). Each shard holds only the records whose keys fall into its assigned range. When an application queries the database, it first figures out which range the requested key belongs to and then talks only to that specific shard. This keeps each server small and fast, while the whole system still feels like one unified database.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
