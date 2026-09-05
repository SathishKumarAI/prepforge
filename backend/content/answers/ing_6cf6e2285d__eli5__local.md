---
qid: ing_6cf6e2285d__eli5__local
question: 'Explain: Storage Estimation — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 241
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:29:06-05:00'
sources: []
---

Imagine a giant library where every book is a listing on Airbnb. The library’s shelves are the database, but we don’t know how many books will arrive or how big each one is. **Storage estimation** is like predicting how much space the new books will need before the librarian (the system) builds more shelves.

First, we look at what a book contains: title, description, photos, price, reviews, host info, availability dates, and metadata. We give each part an average size—e.g., a photo might take 200 KB, a review 5 KB, the text 1 KB per word. Then we estimate how many of each will exist: maybe 50 million listings, 10 photos each, 100 reviews on average.

By multiplying these averages (size × quantity) and adding overhead for database indexing, we get an approximate storage requirement—just enough to know whether the library needs more floors or a new building. This helps engineers choose cloud storage plans, budget costs, and design scalable infrastructure without surprises.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
