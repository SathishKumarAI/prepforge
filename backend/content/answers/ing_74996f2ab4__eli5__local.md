---
qid: ing_74996f2ab4__eli5__local
question: 'Explain: Approach #1: Synchronous communication — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 251
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:41:32-05:00'
sources: []
---

Think of a library that wants to keep its catalog up‑to‑date.  
The librarian (the crawler) walks from book to book, reads the title and author, and writes that information into the master list. While she’s in a book, no one else can add or edit the same entry—she holds a “lock” on it.  

In a **synchronous web‑crawler** this is exactly what happens:  
1. The crawler asks (sends an HTTP request) for a page and *waits* until the server sends back the whole page.  
2. While waiting, it can’t ask for another page; it’s busy “talking” to that single server.  
3. Once it receives the page, it parses the links inside, stores the data, and then goes on to the next request.

This one‑by‑one approach is simple to understand and implement, but if a page takes long to respond or many pages need crawling at once, the whole system slows down—just like a librarian who can only handle one book at a time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
