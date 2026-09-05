---
qid: ing_49507a339d__eli5__local
question: 'Explain: Resource Methods — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 262
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:33:22-05:00'
sources: []
---

Imagine you’re in a library where every book has its own shelf and a unique call number. You can **look up** (GET) a book to read it, **add** a new one (POST), **update** an existing copy (PUT/PATCH), or **take it out** of the shelf (DELETE).  
In the same way, RESTful APIs treat each piece of data—users, posts, orders—as a *resource* with its own address (URL). The “methods” you use are just the library’s actions:  

- **GET** – fetch a resource, like checking a book’s contents.  
- **POST** – create a new one, like adding a new title to the catalog.  
- **PUT/PATCH** – modify an existing item, akin to updating a book’s details.  
- **DELETE** – remove it from the system, just as you’d return a lost book.

So REST is simply a set of rules that let clients (like web browsers or apps) talk to servers in this familiar “look‑up‑add‑edit‑remove” way, using plain HTTP verbs and clear URLs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
