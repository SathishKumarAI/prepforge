---
qid: ing_6737403a86__eli5__local
question: 'Explain: Hashed sharding — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 223
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:19:41-05:00'
sources: []
---

Think of a huge library that holds millions of books. If every reader had to go to the same shelf to find their book, it would be slow and crowded. Instead, the library splits its collection into sections—by genre, author, or even by page number—and assigns each section to a different room. Each room (a *shard*) works independently, so many readers can look up books at once without stepping on each other’s toes.

In databases, **sharding** is exactly that: the data is divided into smaller, self‑contained pieces called shards. Each shard lives on its own server or cluster and stores only a subset of the total rows (for example, all customers in a particular region). When an application needs data, it first figures out which shard holds it—often by hashing a key like “customer ID”—and then queries just that shard. This keeps each database small, fast, and easier to scale, while still presenting one unified view to users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
