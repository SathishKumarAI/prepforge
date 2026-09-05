---
qid: ing_fb0ddd89ea__eli5__local
question: 'Explain: 2.1. Resource Identifiers — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 225
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:12:35-05:00'
sources: []
---

Imagine a library where every book, magazine, or CD has its own unique shelf number and a small card that says what it is.  
A **REST** (Representational State Transfer) API works the same way: each piece of data—“resource”—gets a single address called a *URI* (Uniform Resource Identifier). That URI tells you exactly where to find the resource, just like the shelf number points to a book.  

When your program wants to read or change that resource, it sends an HTTP request (like asking the librarian for a copy) and receives a response in a standard format (JSON, XML, etc.). REST doesn’t keep track of who you are between requests; each call is independent, just as pulling a book out of the shelf does not remember the previous visitor.  

So, think of REST as a tidy library where every resource has its own address and can be accessed with simple, stateless “read” or “write” commands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
