---
qid: ing_a14d733d99__eli5__local
question: 'Explain: Risky Shard Key: Fields With Few Values — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 200
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:53:41-05:00'
sources: []
---

Imagine you’re organizing a library but decide to sort books only by the color of their covers. Most books share the same color—say, many are blue—so almost all books go into one big shelf. The other shelves stay empty or barely used. If someone wants a specific book, they’ll have to sift through that huge blue pile, making the system slow and uneven.

In sharding, the “shelf” is a database shard, and the “color” is your shard key (the field you split data on). A risky shard key has very few distinct values—like only a handful of colors. Most records end up in one shard, causing hot‑spots: heavy load on that shard, slow queries, and poor scalability. Choosing such a key means the system behaves like the crowded blue shelf—inefficient and unbalanced.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
