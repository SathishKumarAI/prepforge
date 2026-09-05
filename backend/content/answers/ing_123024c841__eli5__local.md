---
qid: ing_123024c841__eli5__local
question: 'Explain: An API Contract in Practice — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 272
total_tokens: 436
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:04:26-05:00'
sources: []
---

Think of a library that serves books to readers. The **API (Application Programming Interface)** is the library’s *catalog card system*: it tells you which books are available, how to request them, and what information you’ll get back—just as an API defines a set of “endpoints” (like /books/123) that software can call.

An **API contract** is the library’s rulebook. It lists every card (endpoint), the format of the request (e.g., “send the book ID”), and the exact response shape (title, author, availability). It also specifies errors (“404 – Book not found”) and versioning rules so that future updates don’t break existing readers.

In practice, a developer writes code to call these endpoints, trusting the contract: if the contract says the response will include a JSON object with `{"id":1,"title":"…","author":"…"}`, the code can safely parse it. If the library (API) changes its rules without updating the contract, all the readers (client apps) might break—just like a sudden change in book titles would confuse patrons. The contract keeps everyone on the same page, ensuring smooth communication between independent systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
