---
qid: ing_3dc908b92d__eli5__local
question: 'Explain: Reads (Redirects) — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 226
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:13:50-05:00'
sources: []
---

Imagine a library where every book has a long, unwieldy title. To make borrowing easier, the librarian gives each book a tiny, memorable code—like “B12” or “X9”. When someone asks for a book by its code, the librarian looks up the real title and hands it over.  

In a URL shortener this is exactly what happens with **reads (redirects)**:  
* **Read** – a user clicks the tiny link.  
* The system receives that short ID (the “code”).  
* It quickly searches its database to find the full, original web address (“real title”).  
* Then it sends an HTTP redirect so the browser goes straight to the real site.

Think of each read as a librarian’s swift lookup and hand‑off—fast, one step, no extra paperwork. The goal is to make every click feel instantaneous, just like flipping a page in a well‑organized library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
