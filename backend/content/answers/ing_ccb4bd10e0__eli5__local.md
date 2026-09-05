---
qid: ing_ccb4bd10e0__eli5__local
question: 'Explain: What is GraphQL? When should we use — What Is GraphQL? REST vs.
  GraphQL'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 228
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:59:31-05:00'
sources: []
---

Think of a library that holds all your data—books, movies, recipes—and you want to borrow just what you need.  
**GraphQL** is like a personal librarian who takes your exact request (e.g., “give me the title and author of this book, plus its reviews”) and brings back only those items in one trip.  

With **REST**, you ask for a whole shelf: you hit an endpoint (a URL) that returns everything in that category, even if you only need one field. You may have to make several trips or get extra information you don’t want.  

Use GraphQL when:
- Clients need different slices of data at different times.
- You want to reduce round‑trips and avoid over‑fetching.
- The schema is stable and can be described in a single language.

If your app always needs the same, fixed set of fields, or you prefer simple URLs, REST may still be fine. GraphQL shines when flexibility and efficiency matter most.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
