---
qid: ing_c0a0479911__eli5__local
question: 'Explain: What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 263
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:41:58-05:00'
sources: []
---

Imagine you’re at a library that lets anyone borrow books, but it follows one simple rule: every request must be written on a card with the book’s ID and the action (read, add, delete). The librarian reads the card, does exactly what you asked, and hands back the book or a confirmation. That’s REST—**R**esource **E**xchange **S**tandardized **T**ransport.

In computing, each “resource” is like a book: a user profile, an image, or a model. A **REST API** (Application Programming Interface) lets different programs talk to one another over the internet using this card‑style language—HTTP requests such as GET (read), POST (create), PUT/PATCH (update), and DELETE (remove). Each request points to a URL that identifies the resource, and the response comes back in a simple format like JSON. Just as you can mix and match cards to get any book from any library, programs can combine REST calls to build powerful, distributed applications without needing to know how each part is built inside.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
