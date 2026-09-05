---
qid: ing_0518f74a90__eli5__local
question: 'Explain: REST vs. GraphQL — System Design: Top 15 Trade-Offs - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 303
total_tokens: 475
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:43:36-05:00'
sources: []
---

Imagine a library where you can either ask the librarian for a single book (REST) or pull out a giant menu that lists every book’s details at once (GraphQL).  

**REST** is like ordering one book at a time: each request hits a specific shelf, and you get exactly what you asked for. It’s simple, well‑documented, and scales nicely when many people read the same books. But if you need several titles, you’ll make multiple trips—slow and wasteful.

**GraphQL** lets you write one “menu” that lists all the books (and their chapters) you want. The server returns only what you requested in a single trip, saving bandwidth and time. However, building and maintaining that menu is more complex, and heavy queries can overload the server if not checked.

Key trade‑offs:  
- **Simplicity vs. Flexibility** – REST is easier to start with; GraphQL offers fine control over data.  
- **Overfetching/Underfetching** – REST may give too much or too little; GraphQL tailors responses.  
- **Caching** – REST works well with standard HTTP caches; GraphQL needs custom caching logic.  

Choosing depends on how dynamic your data needs are and how much effort you’re willing to invest in query design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
