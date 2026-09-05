---
qid: ing_013330c353__eli5__local
question: 'Explain: Hash Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 239
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:37:04-05:00'
sources: []
---

Imagine you’re looking for a friend’s house in a huge city. Instead of walking every street, you use a **hash index** like a super‑fast “address book.”  
A hash function is a recipe that takes the key (your friend’s name) and turns it into a number – just as a postal code does. That number points to one of many small shelves in the address book. Each shelf holds a list of people whose names produced the same number. When you need your friend, you run the recipe on the name, jump straight to that shelf, and read only the few entries there instead of scanning the whole city.

In databases, a hash index works the same: it maps search keys (like user IDs) to “buckets” in memory or disk. The bucket holds all rows that share that hashed key. Because you go directly to the bucket, lookups are very quick—just like finding a house by its postal code. This is ideal when you need exact matches and the data set fits into the hash table’s buckets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
