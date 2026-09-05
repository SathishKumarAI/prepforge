---
qid: ing_738b235d82__eli5__local
question: 'Explain: Rate Limits and Quotas — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 203
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:39:39-05:00'
sources: []
---

Imagine a library that lets you borrow books online. The **API (Application Programming Interface)** is the librarian’s desk: it tells you how to ask for a book (“give me book #123”) and how to return it. Every time you send a request, you’re using the API.

Because the library can only serve so many people at once, it sets **rate limits**—the number of times you may call the librarian in a minute—and **quotas**, the total number of books you can borrow over a day or month. If you exceed either limit, the librarian will politely refuse your request until the window resets.

So, an API is the set‑up that lets programs talk to a service, while rate limits and quotas are safeguards that keep traffic fair and prevent overload—just like a library keeps its shelves from breaking under too many simultaneous borrowers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
