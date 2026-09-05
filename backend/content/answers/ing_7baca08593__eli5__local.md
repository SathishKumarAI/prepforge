---
qid: ing_7baca08593__eli5__local
question: 'Explain: How GraphQL Differs from REST — REST vs GraphQL - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 232
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:52:55-05:00'
sources: []
---

Think of a library.  
**REST** is like asking the librarian for a whole book: you pick a title, and the librarian hands you pages 1‑400 all at once. If you only need the chapter on “photosynthesis,” you still get the entire book, then skim or discard what you don’t want.  

**GraphQL** lets you write a note saying, *“Give me the book’s title, author, and just the chapters about photosynthesis.”* The librarian reads your request and returns only those pages. You can ask for more details later without making another trip.

Key terms:  
- **Endpoint** (REST) – a fixed URL that always gives you the same data shape.  
- **Query** (GraphQL) – a flexible question where you specify exactly what fields you need, and the server returns only those.  

So REST is a one‑size‑fits‑all delivery; GraphQL is a tailor‑made request that reduces over‑fetching and lets clients control their data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
