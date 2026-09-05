---
qid: ing_11e6aacbd6__eli5__local
question: 'Explain: Token — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 269
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:04:02-05:00'
sources: []
---

Think of your computer as a library and you’re borrowing books (data).  
A **session** is the whole visit to the library—you check in at the desk, get a visitor badge, and keep it until you leave. The badge lets the librarian know who you are while you walk around.

A **cookie** is like a little note stuck on your backpack that says “I’m the regular from 3 PM.” The library’s computer reads this note each time you open a book to remember where you left off or what kind of books you like. Cookies live in your browser; they’re stored on your device.

A **token** is a special key you get after you log in. It’s a short, one‑time string that proves “yes, I’m really you.” Every time you ask for a new book (make an API call), you hand the librarian this key so they know you’re allowed to borrow it. Tokens are usually stored only in memory and expire quickly, making them safer than leaving a note on your backpack.

So: session = your whole visit, cookie = a note that stays around, token = a quick‑check key you give each time you do something.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
