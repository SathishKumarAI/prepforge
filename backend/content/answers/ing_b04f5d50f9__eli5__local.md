---
qid: ing_b04f5d50f9__eli5__local
question: 'Explain: Flow: Redirecting to Original URL — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 205
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:16:42-05:00'
sources: []
---

Imagine a librarian who keeps a tiny card for every book in the library. The card’s front shows a short, memorable code (the “short URL”), and its back lists the book’s full title and location (the “original URL”). When someone asks for a book by its code, the librarian looks up that card, reads the full address on the back, and takes the visitor straight to the shelf.

In a URL‑shortening system this process is identical. The short code is stored in a fast lookup table that maps it to the long web address. When a browser requests the short link, the server quickly finds the original URL from the table and redirects the user’s request to that destination. Thus, the “flow” is simply: receive short code → look up full URL → send redirect response. This keeps the system fast, reliable, and easy to understand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
