---
qid: ing_c47196314a__eli5__local
question: 'Explain: 1.4. Cacheable — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 247
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:47:17-05:00'
sources: []
---

Think of the web as a giant library where every book (resource) has its own shelf number (URL).  
A **REST API** is like a polite librarian who follows a simple set of rules so you can pick up, add, update, or put back books without getting confused.

* **Resource** – anything that can be identified by a URL (a user, an article, a photo).  
* **HTTP methods** – the actions you ask the librarian to do:  
  *GET* → “Show me this book.”  
  *POST* → “Add a new book here.”  
  *PUT/PATCH* → “Replace or edit this book’s contents.”  
  *DELETE* → “Remove this book.”  

The librarian always returns a standard note (status code) telling you if the request succeeded, and the book itself is sent in plain text or JSON. Because every request follows these predictable steps, developers can build programs that talk to any RESTful service just like they would with any other library—clear, consistent, and cacheable for efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
