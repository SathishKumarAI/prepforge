---
qid: ing_191f6d28e4__eli5__local
question: 'Explain: OAuth 2.0 — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 272
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:15:52-05:00'
sources: []
---

Think of logging into a library that lets you borrow books (your app).  
* **Token** is like a short‑lived library card you get when you show your ID at the desk. It says “you’re allowed to read these books for 30 minutes.” The library doesn’t keep a copy of your card; it just checks the number on it each time you want a book.  
* **Cookie** is a sticky note stuck inside your browser that remembers which library card you have, so you don’t need to re‑show ID every time you click a link. It lives in your computer until you delete it or it expires.  
* **Session** is the librarian’s desk log: once you’ve been given a card, the librarian writes down “John is borrowing books now” and keeps that note until you leave the library or close the door. Your browser sends this note (session ID) with every request to prove you’re still in the system.

In OAuth 2.0, the **token** is the short‑lived credential you send to a server; the **cookie** stores it locally for convenience; and the **session** on the server tracks that you’re authenticated while you browse your app.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
