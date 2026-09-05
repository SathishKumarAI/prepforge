---
qid: ing_c2fc0d3318__eli5__local
question: 'Explain: Sessions — Cookies vs Sessions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 214
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:45:07-05:00'
sources: []
---

Think of a library where you can borrow books (your browser).  
A **cookie** is like a sticky note you leave on the desk that says “I’m Alice, I was here yesterday.” It travels with you each time you visit; the library reads it and knows who you are.  

A **session** is like a temporary locker in the library. When you check in, the librarian gives you a key (a session ID). You keep that key while you’re there, but once you leave or the timer runs out, the locker disappears and its contents are erased. The library keeps the locker’s data only on its own servers; it never sends that data back to you.

So, cookies store small pieces of information in your browser, while sessions hold larger, more private data on the server, tied together by a short‑lived cookie that just says “here’s my key.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
