---
qid: ing_4dbaeebe1e__eli5__local
question: 'Explain: JWT — Cookies vs Sessions vs JWT vs PASETO'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 240
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:40:31-05:00'
sources: []
---

Imagine you’re hosting a party where guests need a badge to enter.  

**Cookies** are like paper badges that the host leaves on every table. They stay with the guest’s computer and the server checks them each time someone walks in.  
**Sessions** are like a secret phone line: the host gives the guest a number (session ID) stored on their desk, and the server keeps a notebook of who owns each number. Every visit, the guest dials that number to prove they’re still invited.  

**JWT (JSON Web Token)** is a self‑contained badge: it’s stamped with the guest’s name, expiry time, and a digital signature. The host can read it without looking up any notes—no server storage needed.  
**PASETO** works like JWT but uses stronger, easier‑to‑audit stamps; it’s a newer badge format that avoids some pitfalls of JWT.

So: cookies = persistent paper tags, sessions = phone‑line numbers stored on the host side, JWT = portable signed badges, PASETO = a safer version of those badges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
