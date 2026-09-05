---
qid: ing_7da2bf124e__eli5__local
question: 'Explain: Writes (URL Shortening) — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 266
total_tokens: 435
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:55:59-05:00'
sources: []
---

Imagine a library that only keeps book titles, not the full story. When you want to read a long novel, you first ask the librarian for its “library code.” The librarian looks up the title in a tiny catalog and gives you a short, unique number—say 7a3f9—that points straight to the book’s shelf.

A URL shortener works exactly like that librarian.  
* **Short URL** (the code) is just a compact key that fits on a page or in an email.  
* The system stores a *mapping table*: key → original long web address.  
When someone clicks the short link, the server looks up the key in this table and redirects the browser to the real site.

Key parts you must design:  
1. **Key generation** – create unique, short codes (often using base‑62 encoding).  
2. **Storage** – a fast database or cache for the mapping table.  
3. **Redirection logic** – read the key, fetch the long URL, and send an HTTP 301/302 redirect.

That’s it: a tiny “library code” that points to a huge story behind the scenes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
