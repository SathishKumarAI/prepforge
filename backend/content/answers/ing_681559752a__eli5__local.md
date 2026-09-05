---
qid: ing_681559752a__eli5__local
question: 'Explain: 2.2. Hypermedia — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 226
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:20:57-05:00'
sources: []
---

Think of the web as a giant library where every book (resource) has its own shelf‑number (URL).  
A **REST API** is like a polite librarian who follows simple rules:

* **Resource identification** – each book gets a unique address, so you can ask for it directly.  
* **Standard verbs** – you use the same commands everywhere: `GET` to read a book, `POST` to add a new one, `PUT` to replace it, and `DELETE` to remove it.  
* **Statelessness** – every request carries all the information needed; the librarian never remembers past visits, so each interaction is independent.  
* **Uniform interface** – because you always use the same verbs and addresses, any program can talk to any library without learning a new language.

So REST lets different software speak to each other over HTTP by treating everything as a named resource that can be fetched, created, updated, or deleted using the same set of simple commands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
