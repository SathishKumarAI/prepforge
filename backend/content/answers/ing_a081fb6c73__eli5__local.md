---
qid: ing_a081fb6c73__eli5__local
question: 'Explain: Summary — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 233
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:52:16-05:00'
sources: []
---

**REST (Representational State Transfer)** is a simple way for computers to talk over the web, just like sending mail between people.

Imagine you have a library where each book has its own unique address (a URL).  
* **GET** – “Can I read this book?”  
* **POST** – “I’m adding a new book.”  
* **PUT/PATCH** – “Let’s update the book’s details.”  
* **DELETE** – “Remove this book.”

The library doesn’t keep your reading history; it only gives you what you ask for, and each request is independent. That’s REST: a stateless protocol that uses standard HTTP verbs (GET, POST, PUT, DELETE) to create, read, update, or delete resources identified by URLs. In machine‑learning projects, a REST API lets your model live on a server while clients send data and receive predictions as if they were ordering books from the library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
