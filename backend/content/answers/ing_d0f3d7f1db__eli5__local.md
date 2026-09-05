---
qid: ing_d0f3d7f1db__eli5__local
question: 'Explain: Redis Codec — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 224
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:06:28-05:00'
sources: []
---

Imagine a giant library (Uber’s online storage) that holds every ride request, driver profile, and fare calculation. Reading directly from the shelves would be slow if thousands of customers ask at once—like trying to find a book in a crowded room.

Uber solves this by using a *Redis codec*, a tiny “translator” that copies popular books into a fast‑moving carousel (the Redis cache). The codec turns each piece of data into a simple, compact format so it fits neatly on the carousel’s shelves. When a request comes in, the system first checks the carousel: if the book is there, it delivers it instantly; otherwise, it fetches from the main library and puts a copy on the carousel for future use.

This two‑layer approach lets Uber answer more than 40 million reads per second—just like a bustling bookshop that keeps high‑demand titles in a quick‑access aisle while still holding everything else in its larger back rooms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
