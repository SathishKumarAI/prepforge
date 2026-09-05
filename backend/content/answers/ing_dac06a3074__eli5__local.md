---
qid: ing_dac06a3074__eli5__local
question: 'Explain: WWW-Authenticate — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 334
total_tokens: 493
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:20:39-05:00'
sources: []
---

Think of logging into a website as borrowing a library book.  
When you first ask for the book (make a request), the librarian says, “Show me your library card.” That’s **WWW‑Authenticate** – the server telling the client it needs proof of identity.

1. **Token** – After you prove who you are, the librarian gives you a short‑lived, one‑time pass that says, “You’re allowed to read this book for 10 minutes.” You keep the pass and show it each time you ask for another chapter. The token is like a QR code: it’s simple, has an expiration date, and can be revoked if misused.

2. **Cookie** – Instead of handing you a new QR code every visit, the librarian sticks a small sticker on your sleeve (the cookie). Every time you walk back in, that sticker automatically proves you’re still a registered member. It stays until it expires or you delete it.

3. **Session** – The librarian keeps a paper log in her desk (the server‑side session). When you show your card, she writes your name and the book you borrowed. You then just walk back to the desk, and she recognizes you from that note. The session lives on the server; the client only remembers a tiny “session ID” that points to the log.

So: **Token** = self‑contained key you hand each time, **Cookie** = persistent sticker you carry, **Session** = secret note kept by the librarian that ties your visits together.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
