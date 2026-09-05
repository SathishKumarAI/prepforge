---
qid: ing_9c9c87dfc6__eli5__local
question: 'Explain: With the compound key, it makes removal — FAANG System Design
  Interview: Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 220
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:45:34-05:00'
sources: []
---

Think of a library that keeps two copies of every book: one copy is sorted by **author** (A), the other by **genre** (G).  
If you want to *remove* a particular book, you could look it up in either list, but you’ll still have to find its exact spot in both. A **compound key** works like giving each book a single, unique address that combines both “author” and “genre.”  

In a location‑based service (Yelp, Google Places), the compound key might be *“city + business name.”* When you delete a restaurant, the database instantly knows exactly which row to erase because the key already bundles the two pieces of information. It avoids a costly search through all cities or all names separately, so removal is fast and precise—just like pulling a book out from a single shelf that’s labeled with both its author and genre.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
