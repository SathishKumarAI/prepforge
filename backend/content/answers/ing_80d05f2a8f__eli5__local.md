---
qid: ing_80d05f2a8f__eli5__local
question: 'Explain: Similarities of REST with GraphQL — Restvsgraphql'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 249
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:01:01-05:00'
sources: []
---

Think of a library that lets you borrow books.  
**REST** is like a library where each book has its own shelf: to get “Book #12” you walk straight to the shelf for that number and take it out. You can’t ask for just the cover or the author without going back to the shelf again.  

**GraphQL** is the same library, but now you hand a librarian a list of what you want—“the title, the author, and the first paragraph” of Book #12—and the librarian gives you exactly that mix, no more, no less. You still need to know the book’s number (the “endpoint”), but you control the shape of the answer.

Both systems:
- Use HTTP requests to talk between client and server.
- Identify resources with URLs or IDs.
- Return data in JSON format.

So, like a library that can give you a whole book or just parts of it, REST and GraphQL let you fetch information over the web, but GraphQL lets you pick the exact fields you need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
