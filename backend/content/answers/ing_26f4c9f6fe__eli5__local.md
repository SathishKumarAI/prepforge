---
qid: ing_26f4c9f6fe__eli5__local
question: 'Explain: Sharding — How Uber Serves Over 40 Million Reads Per Second from
  Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 221
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:37:27-05:00'
sources: []
---

Imagine a huge library that has millions of books, but you can only read a few at a time because the shelves are cramped. Uber solves this by splitting the library into many smaller “sections” (shards). Each section holds a slice of all the data and sits next to its own quick‑access shelf—an integrated cache—so readers find what they need instantly without searching the whole building.

When a rider asks for a map or fare estimate, Uber’s system first checks the cache in that section. If the answer is there (a “hit”), it returns it right away. If not (a “miss”), it goes to the small database shard that owns the data, fetches the book, puts a copy into the cache, and then serves the request.

By distributing traffic across many shards and keeping a local cache in each, Uber can handle more than 40 million read requests every second—like dozens of readers grabbing books from their own mini‑libraries at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
