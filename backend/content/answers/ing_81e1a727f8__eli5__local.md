---
qid: ing_81e1a727f8__eli5__local
question: 'Explain: Caching and Conditional Requests — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 255
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:02:30-05:00'
sources: []
---

Think of the web like a library that has a giant, always‑open bookcase (the server) and a smart assistant who keeps a small “quick‑reference” shelf (your browser’s cache).  
When you ask for a page, the assistant first checks its quick‑reference shelf. If it already has the exact copy of the requested book (page), it hands it to you immediately—no need to go back to the big bookcase. That’s **caching**: saving a recent version locally so future requests are faster.

If the shelf is empty or the book might have changed, the assistant goes to the bookcase and asks, “Did this book change since I last looked?” The server replies with a status like *304 Not Modified* if nothing has changed. That’s a **conditional request**: you only get a full copy when it actually differs, saving bandwidth.

So caching is your local shelf; conditional requests are the polite check‑in that keeps your shelf up to date without unnecessary trips.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
